import Link from "next/link";
import TextType from "./TextType";

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat grayscale" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative py-16 container mx-auto px-6 md:px-12 mt-14">
        {/* 
          Mobile: grid with 2 columns
            - Title spans both columns
            - Video spans 2 rows (text+buttons) on the right
          Desktop: normal flex row (2/3 text, 1/3 video)
        */}
        <div className="grid grid-cols-2 gap-6 md:flex md:flex-row md:items-center md:gap-10">
          {/* TITLE (spans full width on phone) + TEXT + BUTTONS */}
          <div className="col-span-2 md:col-span-1 md:w-2/3">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
              Willkommen auf der offiziellen Buchungsplattform von{" "}
              <span className="text-amber-400">Dakka Nassim</span>.
            </h1>

            {/* This row becomes the LEFT column under the title on phone */}
            <div className="grid grid-cols-2 gap-6 md:block">
              {/* LEFT COLUMN: paragraph + buttons */}
              <div className="col-span-1">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
                  Buchen Sie Ihre Dakka für Hochzeiten, Henna, Verlobungen und
                  besondere Feiern in NRW und Umgebung.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
                  {/* Primary Button */}
                  <a href="#buchung" className="relative">
                    <span className="absolute top-0 left-0 mt-2 ml-2 h-full w-full rounded bg-amber-600"></span>
                    <span className="relative inline-block h-full w-full rounded border border-amber-500 bg-black px-6 py-4 text-lg md:text-xl font-bold text-white transition duration-200 hover:bg-amber-500 hover:text-black">
                      Buch ein Event
                    </span>
                  </a>

                  {/* Secondary Button */}
                  <a href="#packs" className="relative">
                    <span className="absolute top-0 left-0 mt-2 ml-2 h-full w-full rounded bg-amber-600"></span>
                    <span className="relative inline-block h-full w-full rounded border border-amber-500 bg-black px-8 py-4 text-lg md:text-xl font-bold text-white transition duration-200 hover:bg-amber-500 hover:text-black">
                      Preise
                    </span>
                  </a>
                </div>
              </div>

              {/* RIGHT COLUMN (phone only): video spans 2 rows */}
              <div className="col-span-1 row-span-2 flex justify-end md:hidden py-24">
                <video
                  className="rounded-xl shadow-2xl w-full max-w-[220px] border border-amber-500"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/Dakka.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* VIDEO (desktop only) */}
          <div className="hidden md:flex md:w-1/3 justify-end">
            <video
              className="rounded-xl shadow-2xl w-full max-w-[160px] sm:max-w-[220px] md:max-w-[320px] lg:max-w-[400px] border border-amber-500"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/Dakka.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}