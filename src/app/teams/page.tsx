"use client";
import React from "react";
import { useState, useEffect } from "react";
import { getTeams, ITeam } from "@/lib/services/teams";

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
      <div className="container flex flex-col pt-25 pb-20 px-20 w-full h-full gap-x-10">
        <div className="mb-10 p-2 flex flex-col gap-y-5">
          <h1 className="text-6xl text-black font-[playfair]">Tim Kami</h1>
          <p className="text-l font-medium text-gray-800 font-[poppins]">
            Di ArchiHub, kami percaya bahwa tim hebat menciptakan desain luar
            biasa. Dengan kolaborasi, inovasi, dan semangat berkembang, kami
            menghadirkan solusi arsitektur terbaik.
          </p>
          <p className="text-l font-medium text-gray-800 font-[poppins]">
            Kenali para pemimpin di balik setiap karya kami.
          </p>
        </div>
        {people.map((member, index) => (
          <div
            key={index}
            className="card flex flex-col rounded-md w-full h-70 "
          >
            <div className="flex items-center p-2 gap-x-5">
              <img
                className="w-50 h-50 rounded-full object-cover"
                src={member.img}
                alt={member.nama}
              />
              <div className="content flex flex-col p-2 w-150 h-full">
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
    </div>
  );
}
