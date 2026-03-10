import { sql } from "@/lib/db";

import { NextResponse } from "next/server";
export async function GET() {
  try {
    const termine = await sql`
      SELECT * FROM termine
    `;

    return Response.json(termine);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch termine" },
      { status: 500 }
    );
  }
}


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

function buildWhatsappText(body: BookingRequestBody) {
  const ortText =
    body.ortRegion === "ANDERER_ORT"
      ? `Anderer Ort: ${body.otherOrt || "-"}`
      : `Region: ${body.ortRegion === "HESSEN" ? "Hessen" : "NRW"}`;

  const selectedDate = new Date(body.selectedDate);

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

export async function POST(req: Request) {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        { error: "DATABASE_URL fehlt." },
        { status: 500 }
      );
    }

    const body = (await req.json()) as BookingRequestBody;

    if (!body.bookingName?.trim()) {
      return NextResponse.json({ error: "Name ist erforderlich." }, { status: 400 });
    }

    if (!body.bookingLocation?.trim()) {
      return NextResponse.json(
        { error: "Saal/Location ist erforderlich." },
        { status: 400 }
      );
    }

    if (!body.paket?.trim()) {
      return NextResponse.json({ error: "Paket ist erforderlich." }, { status: 400 });
    }

    if (body.ortRegion === "ANDERER_ORT" && !body.otherOrt?.trim()) {
      return NextResponse.json(
        { error: "Genauer Ort ist erforderlich." },
        { status: 400 }
      );
    }

    const start = new Date(body.selectedDate);
    start.setHours(body.selectedHour, 0, 0, 0);

    const end = new Date(start);
    end.setHours(start.getHours() + body.bookingDurationHours);

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
        ${body.otherOrt?.trim() || body.bookingLocation.trim()},
        ${body.bookingName.trim()},
        ${body.bookingLocation.trim()},
        ${mapAnlassToDb(body.anlass)},
        ${body.paket.trim()},
        ${body.bookingType},
        ${`${body.bookingDurationHours} Stunde(n)`},
        ${whatsappMessage},
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