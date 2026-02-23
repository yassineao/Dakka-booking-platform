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
              <a className="text-white hover:text-purple-400 transition">
                Home
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-purple-400 transition">
                Buchung
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-purple-400 transition">
                Preis
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-purple-400 transition">
                Video
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-purple-400 transition">
                Packs
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-purple-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:flex items-center lg:order-2">
          <a
            href="#"
            className="text-white bg-purple-700 hover:bg-purple-800 
                       focus:ring-4 focus:ring-purple-300 
                       font-medium rounded-lg text-sm 
                       px-4 lg:px-5 py-2 lg:py-2.5 
                       transition"
          >
            Kontaktieren
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
          <li><a href="#" className="block py-2 hover:text-purple-400">Home</a></li>
          <li><a href="#" className="block py-2 hover:text-purple-400">Buchung</a></li>
          <li><a href="#" className="block py-2 hover:text-purple-400">Preis</a></li>
          <li><a href="#" className="block py-2 hover:text-purple-400">Video</a></li>
          <li><a href="#" className="block py-2 hover:text-purple-400">Packs</a></li>
          <li><a href="#" className="block py-2 hover:text-purple-400">Contact</a></li>
          <li>
            <a
              href="#"
              className="block mt-2 text-center bg-purple-700 hover:bg-purple-800 
                         rounded-lg py-2 transition"
            >
              Kontaktieren
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}