import type { Metadata } from "next";
import BookingForm from "./components/BookingForm";
import Caroussel from "./components/Caroussel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

export const metadata: Metadata = {
  title: "Dakka Marrakschia für Hochzeiten, Henna & Verlobung buchen",
  description:
    "Buchen Sie Dakka Nassim für marokkanische Hochzeiten, Henna-Abende, Verlobungen und festliche Events. Mit Paketen, Verfügbarkeitskalender und direkter WhatsApp-Anfrage.",
  alternates: {
    canonical: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EntertainmentBusiness",
      "@id": "#business",
      name: "Dakka Nassim",
      description:
        "Dakka Marrakschia für Hochzeiten, Henna-Abende, Verlobungen und besondere Feiern in NRW, Hessen und deutschlandweit.",
      areaServed: ["Nordrhein-Westfalen", "Hessen", "Deutschland"],
      telephone: "+49 177 6889333",
      url: "/",
      image: ["/hero.jpg", "/Logo.png"],
      sameAs: [
        "https://www.instagram.com/dakka_marrakechia_nassim/",
        "https://www.tiktok.com/@dakka_marrakechia_nassim",
      ],
    },
    {
      "@type": "Service",
      "@id": "#booking-service",
      serviceType: "Dakka Marrakschia Buchung",
      provider: {
        "@id": "#business",
      },
      areaServed: ["Nordrhein-Westfalen", "Hessen", "Deutschland"],
      offers: [
        {
          "@type": "Offer",
          name: "Dakka Paket NRW",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Dakka Paket Hessen",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-violet-50 dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Hero />

      <section
        aria-labelledby="galerie-heading"
        className="mx-auto max-w-6xl px-4"
      >
        <h2 id="galerie-heading" className="sr-only">
          Einblicke in Auftritte und Feiern
        </h2>
        <Caroussel />
      </section>

      <section className="bg-black" id="buchung" aria-labelledby="booking-heading">
        <h2 id="booking-heading" className="sr-only">
          Verfügbarkeit prüfen und Event anfragen
        </h2>
        <BookingForm />
      </section>

      <section className="bg-white" id="packs" aria-labelledby="packages-heading">
        <h2 id="packages-heading" className="sr-only">
          Pakete und Leistungen
        </h2>
        <Pricing />
      </section>

      <section className="mx-auto max-w-6xl px-4" id="footer">
        <Footer />
      </section>
    </div>
  );
}
