'use client';

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
                    bg-black/30 backdrop-blur-lg 
                    border-b border-white/10 
                    transition-all duration-300">

      <div className="flex items-center justify-between max-w-screen-xl px-4 py-3 mx-auto">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/Logo.png" className="h-6 mr-3 sm:h-9" alt="Dakka Nassim Logo" />
          <span className="text-xl font-semibold text-white">
            Dakka Nassim
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-between w-full lg:w-auto lg:order-1">
          <ul className="flex font-medium lg:flex-row lg:space-x-8">
            <li>
              <a className="text-white hover:text-amber-600 transition" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-amber-600 transition" href="#buchung">
                Buchung
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-amber-600 transition" href="#packs">
                Preis
              </a>
            </li>
            {/* <li>
              <a className="text-gray-300 hover:text-amber-600 transition" href="#video">
                Video
              </a>
            </li> */}
           
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:flex items-center lg:order-2 mr-4">
          <a className="relative" href="https://www.instagram.com/direct/t/17843664710789124/">
                    <span className="absolute top-0 left-0 mt-2 ml-2 h-full w-full rounded bg-black"></span>
                    <span className="relative inline-block h-full w-full rounded border-2 border-black bg-amber-400 px-2 py-1 text-xl font-bold text-black transition duration-150 hover:bg-black hover:text-white">
                        Kontaktieren Instagram
                    </span>
                    </a>
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          onClick={() => setIsOpen(v => !v)}
          className="lg:hidden text-white text-2xl focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden 
                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col px-4 pb-4 space-y-3 text-white bg-black/40 backdrop-blur-md">
          <li><a href="#" className="block py-2 hover:text-amber-600">Home</a></li>
          <li> <a className="block py-2 hover:text-amber-600" href="#buchung">
                Buchung
              </a></li>
          <li><a className="block py-2 hover:text-amber-600" href="#packs">Preis</a></li>
          <li>
            <a
              href="https://www.instagram.com/dakka_marrakechia_nassim/"
              className=""
            >
                    <span className="relative inline-block h-full w-1/1.5 rounded border-2 border-black bg-amber-400 px-2 py-1 text-xl font-bold text-black transition duration-150 hover:bg-black hover:text-white">
                  
              Kontaktieren Instagram
            
            </span></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}