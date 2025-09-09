"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Services", "Portfolio", "Reviews", "Contact"];

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-purple-600">Leo9</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {links.map((link, i) => (
            <a key={i} href={`#${link.toLowerCase()}`} className="hover:text-purple-600 transition">
              {link}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-3xl font-bold focus:outline-none">
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white flex flex-col items-center pb-4">
          {links.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="py-2 text-gray-700 hover:text-purple-600 transition"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
