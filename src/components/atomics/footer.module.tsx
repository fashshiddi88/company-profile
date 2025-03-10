import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-40 bg-gray-900 text-white py-6 mt-auto px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold font-[playfair]">ArchiHub</h2>
          <p className="text-sm text-gray-400">Rancang. Bangun. Hidup.</p>
        </div>

        <p className="text-gray-500 text-sm mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} ArchiHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
