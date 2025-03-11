"use client";
import React from "react";
import { useState, useEffect } from "react";
import { getTeams, ITeam } from "@/lib/services/teams";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Teams() {
  const [people, setPeople] = useState<ITeam[]>([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const data = await getTeams();
      setPeople(data);
    };
    fetchPeople();
  }, []);

  return (
    <div className=" bg-white">
      {people.length > 0 ? (
        <div className="container flex flex-col px-10 pt-25 pb-20 md:px-20 w-full min-h-screen gap-x-10">
          <div className="flex flex-col md:flex-row">
            <div className=" p-2 flex flex-col gap-y-5 md:w-2/3 mb-10">
              <h1 className="text-4xl text-black font-[playfair] md:text-6xl">
                Tim Kami
              </h1>
              <p className="text-lg font-medium text-gray-800 font-[poppins]">
                Di ArchiHub, kami percaya bahwa tim hebat menciptakan desain
                luar biasa. Dengan kolaborasi, inovasi, dan semangat berkembang,
                kami menghadirkan solusi arsitektur terbaik.
              </p>
              <p className="text-lg font-medium text-gray-800 font-[poppins]">
                Kenali para pemimpin di balik setiap karya kami.
              </p>
            </div>
            <div className="flex p-2 shadow-md rounded-md md:w-1/3">
              <div className="text-center md:text-left w-full flex flex-col gap-y-2 ">
                <h1 className="text-4xl text-black font-[playfair] md:text-6xl">
                  Kontak Kami
                </h1>
                <p className="text-lg font-light text-gray-800 font-[poppins]">
                  Jl. Arsitektur No. 123, Jakarta, Indonesia
                </p>
                <p className="text-lg font-light text-gray-800 font-[poppins]">
                  Email: contact@archihub.com
                </p>
                <p className="text-lg font-light text-gray-800 font-[poppins]">
                  Tel: +62 812-3456-7890
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="w-6 h-6 text-gray-900 hover:text-gray-500 transition" />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="w-6 h-6 text-gray-900 hover:text-gray-500 transition" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {people.map((member, index) => (
            <div
              key={index}
              className="card h-full flex flex-col rounded-md w-full md:h-70 "
            >
              <div className="flex items-center p-2 gap-x-5">
                <img
                  className="w-24 h-24 md:w-50 md:h-50 rounded-full object-cover"
                  src={member.img}
                  alt={member.nama}
                />
                <div className="content flex flex-col p-2 w-100 md:w-150 h-full">
                  <h3 className="text-l mt-3 text-black font-medium font-[poppins] mb-2">
                    {member.nama} |{" "}
                    <span className="text-sm text-gray-500">
                      {member.jabatan}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500 font-[poppins] text-justify">
                    {member.experience}
                  </p>
                </div>
              </div>

              <div className="w-full h-1 rounded-full bg-zinc-200"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="w-16 h-16 border-4 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
