import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import "./globals.css";

function getBaseUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (!configuredUrl) {
    return new URL("http://localhost:3000");
  }

  const normalizedUrl = configuredUrl.startsWith("http")
    ? configuredUrl
    : `https://${configuredUrl}`;

  return new URL(normalizedUrl);
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getBaseUrl(),
  applicationName: "Dakka Nassim Booking Platform",
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
  title: {
    default: "Dakka Nassim buchen | Dakka Marrakschia für Hochzeiten & Henna",
    template: "%s | Dakka Nassim",
  },
  description:
    "Offizielle Buchungsplattform von Dakka Nassim für Hochzeiten, Henna, Verlobungen und besondere Feiern in NRW, Hessen und deutschlandweit.",
  keywords: [
    "Dakka Nassim",
    "Dakka Marrakschia",
    "Dakka buchen",
    "marokkanische Hochzeit Musik",
    "Henna Abend buchen",
    "Hochzeit NRW",
    "Hochzeit Hessen",
    "Dakka Hochzeit",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    title: "Dakka Nassim buchen | Dakka Marrakschia für Hochzeiten & Henna",
    description:
      "Buchen Sie Dakka Nassim für Hochzeiten, Henna, Verlobungen und festliche Events in NRW, Hessen und deutschlandweit.",
    siteName: "Dakka Nassim",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dakka Nassim Buchungsplattform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakka Nassim buchen | Dakka Marrakschia für Hochzeiten & Henna",
    description:
      "Offizielle Buchungsplattform für Dakka Nassim in NRW, Hessen und deutschlandweit.",
    images: ["/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
