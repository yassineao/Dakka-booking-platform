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
      <div className="relative py-20 container mx-auto px-6 md:px-12 mt-14">
        {/* ✅ Keep row even on small screens so video stays on the right */}
        <div className="flex flex-row items-center gap-6 md:gap-10">
          {/* TEXT SECTION */}
          <div className="w-2/3 md:w-2/3 min-h-[500px]">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
              Willkommen auf der offiziellen Buchungsplattform von{" "}
              <span className="text-amber-400">Dakka Nassim</span>.
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
              Buchen Sie Ihre Dakka für Hochzeiten, Henna, Verlobungen und
              besondere Feiern in NRW und Umgebung.
            </p>

            <div className="flex flex-wrap gap-6">
              {/* Primary Button */}
              <a className="relative" href="#buchung">
                <span className="absolute top-0 left-0 mt-2 ml-2 h-full w-full rounded bg-amber-700"></span>
                <span className="relative inline-block h-full w-full rounded border border-amber-500 bg-black px-6 py-4 text-xl font-bold text-white transition duration-200 hover:bg-amber-500 hover:text-black">
                  Buch ein Event
                </span>
              </a>

              {/* Secondary Button */}
              <a href="#packs" className="relative">
                <span className="absolute top-0 left-0 mt-2 ml-2 h-full w-full rounded bg-amber-700"></span>
                <span className="relative inline-block h-full w-full rounded border border-amber-500 bg-black px-8 py-4 text-xl font-bold text-white transition duration-200 hover:bg-amber-500 hover:text-black">
                  Preise
                </span>
              </a>
            </div>
          </div>

          {/* VIDEO SECTION */}
          <div className="w-1/3 md:w-1/3 flex justify-end">
            <video
              className="rounded-xl shadow-2xl w-full max-w-[120px] sm:max-w-[180px] md:max-w-[320px] lg:max-w-[400px] border border-amber-500"
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