"use client";
import React, { useMemo, useState } from "react";

type Item = {
  text: string;
  bold?: boolean;
  disabled?: boolean;
};

type Package = {
  title: string;
  subtitle: string;
  price: string;
  items: Item[];
  featured?: boolean;
};

type RegionKey = "NRW" | "HESSEN" | "ANDERER_ORT";

// ✅ HIER deine WhatsApp Nummer (ohne +, ohne Leerzeichen)
const WHATSAPP_NUMBER = "491776889333";

const CheckIcon: React.FC<{ type?: "check" | "x" }> = ({ type = "check" }) => {
  const common = "w-3 h-3";
  if (type === "x") {
    return (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        className={common}
        viewBox="0 0 24 24"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    );
  }
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      className={common}
      viewBox="0 0 24 24"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
};

const PriceCard: React.FC<{ pkg: Package }> = ({ pkg }) => {
  const cardBase = "relative flex flex-col h-full p-8 rounded-xl border transition";
  const cardStyle = pkg.featured
    ? "bg-white border-blue-200 shadow-lg"
    : "bg-gray-50 border-transparent hover:border-white hover:shadow-lg";

  return (
    <div className={`${cardBase} ${cardStyle}`}>
      {pkg.featured && (
        <span className="absolute -top-3 right-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          Beliebt
        </span>
      )}

      <span className="mb-4 text-base tracking-widest text-gray-600 uppercase font-bold">
        {pkg.title}
      </span>

      <span className="flex items-center mb-8 text-base font-medium tracking-tight text-gray-600">
        {pkg.subtitle}
      </span>

      <div className="flex items-end text-3xl font-black leading-none text-gray-700 lg:text-4xl">
        <span>{pkg.price}</span>
      </div>

      <ul className="mt-8">
        {pkg.items.map((it, idx) => {
          const textClass = it.disabled ? "text-gray-600 text-opacity-70" : "text-gray-600";
          const iconClass = it.disabled ? "text-gray-600 text-opacity-70" : "text-gray-600";
          return (
            <li
              key={`${pkg.title}-item-${idx}`}
              className={`flex items-center mb-2 text-base font-medium tracking-tight ${textClass}`}
            >
              <span className={`inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 ${iconClass}`}>
                <CheckIcon type={it.disabled ? "x" : "check"} />
              </span>
              {it.bold ? <strong>{it.text}</strong> : it.text}
            </li>
          );
        })}
      </ul>

      
    </div>
  );
};

// ✅ NRW Daten
const NRW_PACKAGES: Package[] = [
  {
    title: "Paket 1",
    subtitle: "Dakka Marrakschia ganztägig (Brautabholung bis Amaria / max. 24:00 Uhr)",
    price: "1.400€",
    items: [
      { text: "Brautabholung", bold: true },
      { text: "Begleitung beim Saalempfang", bold: true },
      { text: "Ganzer Abend bei jedem Kleidwechsel", bold: true },
      { text: "Bis Amaria / max. 24:00 Uhr", bold: true },
    ],
  },
  {
    title: "Paket 2",
    subtitle: "Paket 1 + Gästeempfang mit Dakka & Saal-Dekoration",
    price: "1.700€",
    items: [
      { text: "Alles aus Paket 1", bold: true },
      { text: "Gästeempfang mit Dakka", bold: true },
      { text: "Dekoration im Saal", bold: true },
    ],
  },
  {
    title: "Paket 3 (Royal)",
    subtitle: "Dakka Marrakschia + Bola Bola (8 Personen) + Gästeempfang & Deko",
    price: "2.000€",
    featured: true,
    items: [
      { text: "Dakka Marrakschia", bold: true },
      { text: "Bola Bola (8 Personen)", bold: true },
      { text: "Mehr Stimmung & königlicher Empfang", bold: true },
      { text: "Gästeempfang + Dekoration", bold: true },
    ],
  },
  {
    title: "Paket 4",
    subtitle: "Paket 1 + Liveband (Männer) mit PA-Anlage (falls getrennt)",
    price: "2.500€",
    items: [
      { text: "Alles aus Paket 1", bold: true },
      { text: "Livemusik mit Liveband (Männer)", bold: true },
      { text: "PA-Anlage / Lautsprecher", bold: true },
      { text: "Ideal bei getrennten Bereichen", bold: true },
    ],
  },
  {
    title: "Paket 5",
    subtitle: "Halbes Programm: Brautabholung + Saalempfang",
    price: "1.000€",
    items: [
      { text: "Brautabholung", bold: true },
      { text: "Saalempfang", bold: true },
      { text: "Ganzer Abend", disabled: true },
      { text: "Gästeempfang + Deko", disabled: true },
    ],
  },
  {
    title: "Paket 6 (Kombi)",
    subtitle: "Dakka Marrakschia (Paket 1) + Dabke orientalische Show",
    price: "1.700€",
    items: [
      { text: "Alles aus Paket 1", bold: true },
      { text: "Dabke orientalische Show", bold: true },
      { text: "Extra Show-Highlight", bold: true },
    ],
  },
  {
    title: "Paket 7",
    subtitle: "Henna-Abend / Verlobung o.ä. (18:00–24:00 Uhr)",
    price: "1.000€",
    items: [
      { text: "Dakka Marrakschia", bold: true },
      { text: "Zeit: 18:00 bis 24:00 Uhr", bold: true },
      { text: "Ideal für Henna & Verlobung", bold: true },
    ],
  },
];

// ✅ Hessen Daten
const HESSEN_PACKAGES: Package[] = [
  {
    title: "Paket 1",
    subtitle: "Dakka Marrakschia ganztägig (Brautabholung bis Amaria / max. 24:00 Uhr)",
    price: "1.600€",
    items: [
      { text: "Brautabholung", bold: true },
      { text: "Begleitung beim Saalempfang", bold: true },
      { text: "Ganzer Abend bei jedem Kleidwechsel", bold: true },
      { text: "Bis Amaria / max. 24:00 Uhr", bold: true },
    ],
  },
  {
    title: "Paket 2",
    subtitle: "Paket 1 + Gästeempfang mit Dekoration im Saal",
    price: "1.800€",
    items: [
      { text: "Alles aus Paket 1", bold: true },
      { text: "Gästeempfang", bold: true },
      { text: "Dekoration im Saal", bold: true },
    ],
  },
  {
    title: "Paket 3 (Royal)",
    subtitle: "Dakka Marrakschia + Bola Bola (8 Personen) + Gästeempfang & Deko",
    price: "2.200€",
    items: [
      { text: "Dakka Marrakschia", bold: true },
      { text: "Bola Bola (8 Personen)", bold: true },
      { text: "Königlicher Empfang", bold: true },
      { text: "Gästeempfang + Dekoration", bold: true },
    ],
  },
  {
    title: "Paket 4",
    subtitle: "Paket 1 + Liveband (Männer) mit PA-Anlage (falls getrennt)",
    price: "2.700€",
    items: [
      { text: "Alles aus Paket 1", bold: true },
      { text: "Livemusik mit Liveband (Männer)", bold: true },
      { text: "PA-Anlage / Lautsprecher", bold: true },
      { text: "Ideal bei getrennten Bereichen", bold: true },
    ],
  },
  {
    title: "Paket 5",
    subtitle: "Halbes Programm: Brautabholung + Saalempfang",
    price: "1.200€",
    items: [
      { text: "Brautabholung", bold: true },
      { text: "Saalempfang", bold: true },
      { text: "Ganzer Abend", disabled: true },
      { text: "Gästeempfang + Dekoration", disabled: true },
    ],
  },
  {
    title: "Paket 6 (Kombi)",
    subtitle: "Dakka Marrakschia (Paket 1) + Dabke orientalische Show",
    price: "2.000€",
    featured: true,
    items: [
      { text: "Alles aus Paket 1", bold: true },
      { text: "Dabke orientalische Show", bold: true },
      { text: "Show-Highlight für extra Stimmung", bold: true },
    ],
  },
  {
    title: "Paket 7",
    subtitle: "Henna-Abend / Verlobung o.ä. (18:00 – 24:00 Uhr)",
    price: "1.300€",
    items: [
      { text: "Dakka Marrakschia", bold: true },
      { text: "Zeit: 18:00 bis 24:00 Uhr", bold: true },
      { text: "Ideal für Henna & Verlobung", bold: true },
      { text: "Professionelle Musiker & garantierte Stimmung", bold: true },
    ],
  },
];

export default function PreiseRegionenNeu() {
  const [region, setRegion] = useState<RegionKey>("NRW");

  // Formular für "Anderer Ort"
  const [form, setForm] = useState({
    ort: "",
    datum: "",
    feier: "Hochzeit",
    paket: "",
    uhrzeit: "",
    saal: "",
    nachricht: "",
  });

  const regionLabel = region === "NRW" ? "NRW" : region === "HESSEN" ? "Hessen" : "Anderer Ort";

  const data = useMemo(() => {
    if (region === "NRW") return NRW_PACKAGES;
    if (region === "HESSEN") return HESSEN_PACKAGES;
    return [];
  }, [region]);

  const whatsappFormHref = useMemo(() => {
    const text = `Hallo Dakka Nassim,

Ich interessiere mich für eine Buchung.

Region: ${regionLabel}
Ort: ${form.ort || "-"}
Datum: ${form.datum || "-"}
Art der Feier: ${form.feier || "-"}
Paket: ${form.paket || "-"}
Uhrzeit: ${form.uhrzeit || "-"}
Saal/Location: ${form.saal || "-"}

Nachricht: ${form.nachricht || "-"}

Danke!`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [form, regionLabel]);

  const isFormValid = form.ort.trim().length > 0 && form.datum.trim().length > 0;

  return (
    <section className="py-20">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-medium lg:text-6xl">Preisliste {regionLabel}</h2>
          <p className="mt-4 text-gray-600">
            Wir bieten mehrere Pakete an – wir freuen uns auf Ihre Rückmeldung.
            <br />
            <span className="font-medium">Lg. Dakka Nassim</span>
          </p>
        </div>

        {/* Region Switch */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl bg-gray-100 p-1">
            <button
              onClick={() => setRegion("NRW")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${
                region === "NRW" ? "bg-white shadow text-gray-900" : "text-gray-600"
              }`}
            >
              NRW
            </button>
            <button
              onClick={() => setRegion("HESSEN")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${
                region === "HESSEN" ? "bg-white shadow text-gray-900" : "text-gray-600"
              }`}
            >
              Hessen
            </button>
            <button
              onClick={() => setRegion("ANDERER_ORT")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${
                region === "ANDERER_ORT" ? "bg-white shadow text-gray-900" : "text-gray-600"
              }`}
            >
              Anderer Ort
            </button>
          </div>
        </div>

        {/* Content */}
        {region === "ANDERER_ORT" ? (
          <div className="mx-auto max-w-3xl rounded-2xl bg-gray-50 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 text-center">
              Anfrage (außerhalb NRW/Hessen)
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              Füll kurz die Infos aus – per Klick wird der Text direkt in WhatsApp eingefügt.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input
                className="w-full rounded-xl border bg-white px-4 py-3"
                placeholder="Ort (z.B. Berlin) *"
                value={form.ort}
                onChange={(e) => setForm({ ...form, ort: e.target.value })}
              />
              <input
                className="w-full rounded-xl border bg-white px-4 py-3"
                placeholder="Datum (z.B. 12.08.2026) *"
                value={form.datum}
                onChange={(e) => setForm({ ...form, datum: e.target.value })}
              />

              <select
                className="w-full rounded-xl border bg-white px-4 py-3"
                value={form.feier}
                onChange={(e) => setForm({ ...form, feier: e.target.value })}
              >
                <option>Hochzeit</option>
                <option>Henna</option>
                <option>Verlobung</option>
                <option>Geburtstag</option>
                <option>Sonstiges</option>
              </select>

              <input
                className="w-full rounded-xl border bg-white px-4 py-3"
                placeholder="Wunsch-Paket (z.B. Paket 3 Royal)"
                value={form.paket}
                onChange={(e) => setForm({ ...form, paket: e.target.value })}
              />

              <input
                className="w-full rounded-xl border bg-white px-4 py-3"
                placeholder="Uhrzeit (z.B. 18:00–24:00)"
                value={form.uhrzeit}
                onChange={(e) => setForm({ ...form, uhrzeit: e.target.value })}
              />
              <input
                className="w-full rounded-xl border bg-white px-4 py-3"
                placeholder="Saal/Location (optional)"
                value={form.saal}
                onChange={(e) => setForm({ ...form, saal: e.target.value })}
              />

              <textarea
                className="w-full rounded-xl border bg-white px-4 py-3 sm:col-span-2"
                placeholder="Zusätzliche Nachricht (optional)"
                rows={4}
                value={form.nachricht}
                onChange={(e) => setForm({ ...form, nachricht: e.target.value })}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={whatsappFormHref}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow ${
                  isFormValid ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600 pointer-events-none"
                }`}
              >
                Auf WhatsApp senden
              </a>

              <button
                type="button"
                onClick={() =>
                  setForm({
                    ort: "",
                    datum: "",
                    feier: "Hochzeit",
                    paket: "",
                    uhrzeit: "",
                    saal: "",
                    nachricht: "",
                  })
                }
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-gray-900 font-semibold shadow border"
              >
                Zurücksetzen
              </button>
            </div>

            {!isFormValid && (
              <p className="mt-3 text-center text-sm text-gray-500">
                Bitte mindestens <strong>Ort</strong> und <strong>Datum</strong> ausfüllen.
              </p>
            )}
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((pkg) => (
              <PriceCard key={`${region}-${pkg.title}`} pkg={pkg} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}