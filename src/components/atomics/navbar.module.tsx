"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="w-screen h-20 px-20 bg-white text-black flex justify-between items-center fixed top-0 shadow-md ">
      <div>
        <h1 className="text-3xl text-extrabold font-[playfair]">ArchiHub</h1>
      </div>
      <div className="flex gap-x-5 font-light">
        {[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Services", path: "/services" },
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
    </div>
  );
}
