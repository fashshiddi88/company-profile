import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 px-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold font-[playfair]">ArchiHub</h2>
          <p className="text-sm text-gray-400">Rancang. Bangun. Hidup.</p>
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400">
            Jl. Arsitektur No. 123, Jakarta, Indonesia
          </p>
          <p className="text-sm text-gray-400">Email: contact@archihub.com</p>
          <p className="text-sm text-gray-400">Tel: +62 812-3456-7890</p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 text-gray-400 hover:text-white transition" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6 text-gray-400 hover:text-white transition" />
          </a>
        </div>
      </div>

      <p className="text-gray-500 text-sm text-center mt-6">
        &copy; {new Date().getFullYear()} ArchiHub. All rights reserved.
      </p>
    </footer>
  );
}
