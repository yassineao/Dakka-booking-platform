import Link from "next/link";
import TextType from "./TextType";

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      
      {/* Background Image (Black & White) */}
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat grayscale"></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative py-20 container mx-auto px-6 md:px-12 mt-14">
        <div className="flex flex-col md:flex-row items-center">
          
          <div className="md:w-1/2 lg:w-2/3 min-h-[500px]">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
              Welcome to Official Dakka Nassim Booking Platform!
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8">
              Best Dakka in the NRW for your weddings and all the parties!
            </p>

           <div className="flex gap-4">
                <div className="flex flex-wrap justify-center gap-8">
                    
                    <a className="relative" href="#">
                    <span className="absolute top-0 left-0 mt-2 ml-2 h-full w-full rounded bg-red-600 "></span>
                    <span className="relative inline-block h-full w-full rounded border-2  bg-white px-6 py-4 text-xl font-bold text-black transition duration-150 hover:bg-red-600 hover:text-white">
                        Buch ein Event
                    </span>
                    </a>

                    <a href="#" className="relative">
                    <span className="absolute top-0 left-0 mt-2 ml-2 h-full w-full rounded bg-gray-700"></span>
                    <span className="relative inline-block h-full w-full rounded border-2 border-black bg-black px-8 py-4 text-xl font-bold text-white transition duration-150 hover:bg-gray-900 hover:text-yellow-500">
                        Elevated Button Filled
                    </span>
                    </a>

                </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0 md:ml-12">
            <video
              className="rounded-xl shadow-2xl w-full"
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