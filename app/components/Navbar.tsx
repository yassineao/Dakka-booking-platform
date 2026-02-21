import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 
                    bg-black/30 backdrop-blur-lg 
                    border-b border-white/10 
                    transition-all duration-300">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 py-3 mx-auto">
        
        <a href="#" className="flex items-center">
          <img src="/Logo.png" className="h-6 mr-3 sm:h-9" alt="Dakka Nassim Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Dakka Nassim
          </span>
        </a>

        <div className="flex items-center lg:order-2">
          <a
            href="#"
            className="text-white bg-purple-700 hover:bg-purple-800 
                       focus:ring-4 focus:ring-purple-300 
                       font-medium rounded-lg text-sm 
                       px-4 lg:px-5 py-2 lg:py-2.5 
                       sm:mr-2 lg:mr-0 transition"
          >
            Kontaktieren
          </a>
        </div>

        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a className="block py-2 text-white lg:p-0 hover:text-purple-400 transition">
                Home
              </a>
            </li>
            <li>
              <a className="block py-2 text-gray-300 lg:p-0 hover:text-purple-400 transition">
                Buchung
              </a>
            </li>
            <li>
              <a className="block py-2 text-gray-300 lg:p-0 hover:text-purple-400 transition">
                Preis
              </a>
            </li>
            <li>
              <a className="block py-2 text-gray-300 lg:p-0 hover:text-purple-400 transition">
                Video
              </a>
            </li>
            <li>
              <a className="block py-2 text-gray-300 lg:p-0 hover:text-purple-400 transition">
                Packs
              </a>
            </li>
            <li>
              <a className="block py-2 text-gray-300 lg:p-0 hover:text-purple-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}