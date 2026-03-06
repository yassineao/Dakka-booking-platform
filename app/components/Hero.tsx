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
                  <a href="#buchung" className="relative w-full sm:w-auto">
                    <span className="absolute top-0 left-0 mt-2 ml-2 h-full w-full rounded bg-amber-700"></span>
                    <span className="relative block text-center rounded border border-amber-500 bg-black px-6 py-4 text-base sm:text-lg md:text-xl font-bold text-white transition duration-200 hover:bg-amber-500 hover:text-black">
                      Buch ein Event
                    </span>
                  </a>

                  {/* Secondary Button */}
                  <a href="#packs" className="relative w-full sm:w-auto">
                    <span className="absolute top-0 left-0 mt-2 ml-2 h-full w-full rounded bg-amber-700"></span>
                    <span className="relative block text-center rounded border border-amber-500 bg-black px-6 py-4 text-base sm:text-lg md:text-xl font-bold text-white transition duration-200 hover:bg-amber-500 hover:text-black">
                      Preise
                    </span>
                  </a>
                  
                </div>
                
                <div className="mt-8 ">
                  <ul className="mb-10 flex items-center gap-2">

  {/* Instagram */}
  <li>
    <a
      href="https://www.instagram.com/dakka_marrakechia_nassim/"
      target="_blank"
      rel="noreferrer"
      className="mb-2 inline-block rounded bg-amber-500 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
      aria-label="Instagram"
      title="Instagram"
    >
      <span className="[&>svg]:h-4 [&>svg]:w-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </span>
    </a>
  </li>

  
  {/* TikTok */}
  <li>
    <a
      href="https://www.tiktok.com/@dakka_marrakechia_nassim"
      target="_blank"
      rel="noreferrer"
      className="mb-2 inline-block rounded bg-amber-700 px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
      aria-label="TikTok"
      title="TikTok"
    >
      <span className="[&>svg]:h-4 [&>svg]:w-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
          <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
        </svg>
      </span>
    </a>
  </li>

</ul>
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