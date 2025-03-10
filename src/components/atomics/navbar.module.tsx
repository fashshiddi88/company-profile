"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi"; // Icon menu dari react-icons

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 px-6 md:px-20 bg-white text-black flex justify-between items-center fixed top-0 shadow-md z-50">
      {/* Logo */}
      <div className="flex gap-x-2 items-center">
        <img src="/AH.png" className="w-9 h-9" />
        <h1 className="text-2xl md:text-3xl font-extrabold font-[playfair]">
          ArchiHub
        </h1>
      </div>

      {/* Menu untuk Desktop */}
      <div className="hidden md:flex gap-x-8 font-light">
        {[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Projects", path: "/projects" },
          { name: "Teams", path: "/teams" },
        ].map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`hover:text-gray-500 transition ${
              pathname === item.path ? "font-bold" : "font-normal"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Hamburger Menu untuk Mobile */}
      <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-6 py-4">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Teams", path: "/teams" },
          ].map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-lg hover:text-gray-500 transition"
              onClick={() => setIsOpen(false)} // Tutup menu setelah klik
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
