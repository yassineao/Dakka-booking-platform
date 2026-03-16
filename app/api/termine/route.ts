import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

type BookingType = "Meeting" | "Training" | "Workshop" | "Private" | "Wedding";
type Anlass = "Hochzeit" | "Henna" | "Verlobung" | "Geburtstag" | "Sonstiges";
type RegionOrt = "NRW" | "HESSEN" | "ANDERER_ORT";

type BookingRequestBody = {
  bookingName: string;
  ortRegion: RegionOrt;
  otherOrt: string;
  anlass: Anlass;
  paket: string;
  bookingLocation: string;
  bookingType: BookingType;
  bookingDescription: string;
  selectedDate: string;
  selectedHour: number;
  bookingDurationHours: number;
};

const ALLOWED_BOOKING_TYPES = new Set<BookingType>([
  "Meeting",
  "Training",
  "Workshop",
  "Private",
  "Wedding",
]);

const ALLOWED_ANLASS = new Set<Anlass>([
  "Hochzeit",
  "Henna",
  "Verlobung",
  "Geburtstag",
  "Sonstiges",
]);

const ALLOWED_REGIONEN = new Set<RegionOrt>(["NRW", "HESSEN", "ANDERER_ORT"]);

const MAX_NAME_LENGTH = 100;
const MAX_LOCATION_LENGTH = 150;
const MAX_PAKET_LENGTH = 100;
const MAX_OTHER_ORT_LENGTH = 150;
const MAX_DESCRIPTION_LENGTH = 2000;

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function mapAnlassToDb(anlass: Anlass) {
  switch (anlass) {
    case "Hochzeit":
      return "HOCHZEIT";
    case "Henna":
      return "HENNA";
    case "Verlobung":
      return "VERLOBUNG";
    case "Geburtstag":
      return "GEBURTSTAG";
    default:
      return "SONSTIGES";
  }
}

function sanitizeText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";

  return value
    .trim()
    .replace(/\u0000/g, "") // remove null bytes
    .replace(/\s+/g, " ")
    .slice(0, maxLength);
}

function isValidDateOnlyString(value: unknown): value is string {
  if (typeof value !== "string") return false;
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function isIntegerInRange(value: unknown, min: number, max: number): value is number {
  return Number.isInteger(value) && typeof value === "number" && value >= min && value <= max;
}

function buildWhatsappText(body: BookingRequestBody) {
  const ortText =
    body.ortRegion === "ANDERER_ORT"
      ? `Anderer Ort: ${body.otherOrt || "-"}`
      : `Region: ${body.ortRegion === "HESSEN" ? "Hessen" : "NRW"}`;

  const selectedDate = new Date(`${body.selectedDate}T00:00:00`);

  return `Hallo Dakka Nassim,

Ich möchte anfragen / buchen:

${ortText}
Datum: ${selectedDate.toLocaleDateString("de-DE")}
Uhrzeit: ${pad2(body.selectedHour)}:00 – ${pad2(
    (body.selectedHour + body.bookingDurationHours) % 24
  )}:00
Dauer: ${body.bookingDurationHours} Stunde(n)

Name: ${body.bookingName || "-"}
Anlass: ${body.anlass}
Paket: ${body.paket || "-"}

Saal/Location: ${body.bookingLocation || "-"}
Beschreibung: ${body.bookingDescription || "-"}

Danke!`;
}

function validateAndNormalizeBody(input: unknown):
  | { success: true; data: BookingRequestBody }
  | { success: false; error: string } {
  if (!input || typeof input !== "object") {
    return { success: false, error: "Ungültiger Request-Body." };
  }

  const raw = input as Record<string, unknown>;

  const bookingName = sanitizeText(raw.bookingName, MAX_NAME_LENGTH);
  const ortRegion = raw.ortRegion;
  const otherOrt = sanitizeText(raw.otherOrt, MAX_OTHER_ORT_LENGTH);
  const anlass = raw.anlass;
  const paket = sanitizeText(raw.paket, MAX_PAKET_LENGTH);
  const bookingLocation = sanitizeText(raw.bookingLocation, MAX_LOCATION_LENGTH);
  const bookingType = raw.bookingType;
  const bookingDescription = sanitizeText(raw.bookingDescription, MAX_DESCRIPTION_LENGTH);
  const selectedDate = raw.selectedDate;
  const selectedHour = raw.selectedHour;
  const bookingDurationHours = raw.bookingDurationHours;

  if (!bookingName) {
    return { success: false, error: "Name ist erforderlich." };
  }

  if (!ALLOWED_REGIONEN.has(ortRegion as RegionOrt)) {
    return { success: false, error: "Ungültige Region." };
  }

  if (!ALLOWED_ANLASS.has(anlass as Anlass)) {
    return { success: false, error: "Ungültiger Anlass." };
  }

  if (!paket) {
    return { success: false, error: "Paket ist erforderlich." };
  }

  if (!bookingLocation) {
    return { success: false, error: "Saal/Location ist erforderlich." };
  }

  if (!ALLOWED_BOOKING_TYPES.has(bookingType as BookingType)) {
    return { success: false, error: "Ungültiger Buchungstyp." };
  }

  if (!isValidDateOnlyString(selectedDate)) {
    return { success: false, error: "Ungültiges Datum. Erwartet wird YYYY-MM-DD." };
  }

  if (!isIntegerInRange(selectedHour, 0, 23)) {
    return { success: false, error: "Ungültige Uhrzeit." };
  }

  if (!isIntegerInRange(bookingDurationHours, 1, 12)) {
    return { success: false, error: "Ungültige Dauer. Erlaubt sind 1 bis 12 Stunden." };
  }

  if (ortRegion === "ANDERER_ORT" && !otherOrt) {
    return { success: false, error: "Genauer Ort ist erforderlich." };
  }

  const normalized: BookingRequestBody = {
    bookingName,
    ortRegion: ortRegion as RegionOrt,
    otherOrt,
    anlass: anlass as Anlass,
    paket,
    bookingLocation,
    bookingType: bookingType as BookingType,
    bookingDescription,
    selectedDate,
    selectedHour,
    bookingDurationHours,
  };

  return { success: true, data: normalized };
}

export async function GET() {
  try {
    const termine = await sql`
      SELECT * FROM termine
    `;

    return NextResponse.json(termine);
  } catch (error) {
    console.error("GET /api/booking-requests failed:", error);

    return NextResponse.json(
      { error: "Failed to fetch termine" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: "DATABASE_URL fehlt." },
        { status: 500 }
      );
    }

    const rawBody = await req.json();
    const validated = validateAndNormalizeBody(rawBody);

    if (!validated.success) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const body = validated.data;

    // Create local datetime safely from YYYY-MM-DD + hour
    const start = new Date(`${body.selectedDate}T${pad2(body.selectedHour)}:00:00`);
    if (Number.isNaN(start.getTime())) {
      return NextResponse.json({ error: "Startdatum ist ungültig." }, { status: 400 });
    }

    const end = new Date(start);
    end.setHours(end.getHours() + body.bookingDurationHours);

    const whatsappNumber = "491776889333";
    const whatsappMessage = buildWhatsappText(body);

    await sql`
      INSERT INTO termine (
        region,
        exact_location,
        name,
        hall_or_location,
        occasion,
        package_name,
        booking_type,
        duration,
        description,
        status,
        start_date,
        end_date
      )
      VALUES (
        ${body.ortRegion},
        ${body.ortRegion === "ANDERER_ORT" ? body.otherOrt : body.bookingLocation},
        ${body.bookingName},
        ${body.bookingLocation},
        ${mapAnlassToDb(body.anlass)},
        ${body.paket},
        ${body.bookingType},
        ${`${body.bookingDurationHours} Stunde(n)`},
        ${body.bookingDescription || whatsappMessage},
        ${"AUSSTEHEND"},
        ${start.toISOString()},
        ${end.toISOString()}
      )
    `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    return NextResponse.json({
      ok: true,
      whatsappUrl,
    });
  } catch (error) {
    console.error("POST /api/booking-requests failed:", error);

    return NextResponse.json(
      {
        error: "Buchung konnte nicht gespeichert werden.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}