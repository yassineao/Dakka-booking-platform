"use client";

import { useState } from "react";

export default function Caroussel() {
  const [activeVideo, setActiveVideo] = useState(null);

  const items = [
    {
      title: "Brautabholung",
      desc: "Traditioneller Start mit Dakka-Rhythmen – wir begleiten die Braut festlich bis zur Location.",
      type: "image",
      src: "/Dp5.jpeg",
    },
    {
      title: "Saalempfang",
      desc: "Spektakulärer Einzug mit Trommeln & Gesang – echtes Marrakesch-Feeling im Saal.",
      type: "video",
      src: "/D5.mp4",
    },
    {
      title: "Gästeempfang",
      desc: "Begrüßung Ihrer Gäste mit Musik & Show – der perfekte Start für Stimmung und Fotos.",
      type: "image",
      src: "/Dp3.jpeg",
    },
    {
      title: "Ganzer Abend",
      desc: "Begleitung über den Abend – starke Momente bei jedem Programmpunkt.",
      type: "video",
      src: "/D4.mp4",
    },
    {
      title: "Henna & Verlobung",
      desc: "Perfekt für Henna-Abende, Verlobungen & Familienfeiern.",
      type: "video",
      src: "/D2.mp4",
    },
    {
      title: "Show-Highlights",
      desc: "Extra-Shows wie Bola Bola oder Dabke – für wow-Momente.",
      type: "video",
      src: "/D3.mp4",
    },
  ];

  return (
    <section className="">
      <div className="container">
        <div className="relative px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
{/* Logo + Headings */}
            <div className="flex justify-center mb-8">
              <img
                src="/Logo.png"
                alt="Dakka Marrakechia Nassim"
                width={90}
                height={90}
                className="object-contain"
              />
            </div>

            <h1 className="text-center text-4xl font-semibold lg:text-6xl">
              Was wir bieten
            </h1>
            <h1 className="text-center text-4xl font-semibold lg:text-6xl">
              Dakka Marrakechia Nassim
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-center text-zinc-600">
              Wir bringen die authentische marokkanische Hochzeitsstimmung nach
              Deutschland – mit traditionellen Trommeln, Gesang und einem
              unvergesslichen Empfang für Braut & Gäste.
            </p>
            {/* Cards */}
            <div className="mx-auto mt-10 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  onClick={() =>
                    item.type === "video" ? setActiveVideo(item.src) : null
                  }
                >
                  <div className="shrink-0">
                    {item.type === "video" ? (
                      <video
                        className="h-48 w-full object-cover"
                        src={item.src}
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                    ) : (
                      <img
                        className="h-48 w-full object-cover"
                        src={item.src}
                        alt={item.title}
                      />
                    )}
                  </div>

                  <div className=" p-6">
                    <p className="text-xl font-semibold text-gray-600">
                      {item.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setActiveVideo(null)}
        >
          <video
            src={activeVideo}
            controls
            autoPlay
            className="max-h-[90vh] max-w-[90vw] rounded-xl"
          />
        </div>
      )}
    </section>
  );
}