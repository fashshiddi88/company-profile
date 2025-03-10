"use client";
import { useState, useEffect } from "react";
import { getBackgroundImages } from "@/lib/services/imageService";

export default function AboutUs() {
  const [bgImages, setBgImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImage = async () => {
      const imageUrls = await getBackgroundImages();
      //console.log("Background Image URL:", imageUrl);
      setBgImages(imageUrls);
    };

    fetchImage();
  }, []);
  return (
    <div className=" bg-white font-[poppins]">
      <div className="sejarah flex flex-col md:flex-row items-center pt-26 pb-20 px-5 md:px-20 w-full h-full gap-10">
        <img
          src={bgImages[0]}
          alt=""
          className="w-full h-auto md:w-144 h-144 object-cover"
        />
        <div className="flex flex-col text-black gap-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-[playfair]">
            Rancang. Bangun. Hidup.
          </h1>
          <p className="text-base md:text-lg font-light text-gray-800 text-justify">
            Di ArchiHub, kami percaya bahwa setiap desain bukan sekadar bentuk,
            tetapi juga memiliki makna dan fungsi yang nyata dalam kehidupan.
            Dengan semangat {`"Rancang. Bangun. Hidup."`}, kami menghadirkan
            karya arsitektur yang inovatif, berkualitas, dan berdampak positif
            bagi penggunanya.
          </p>
          <p className="text-base md:text-lg font-light text-gray-800 text-justify">
            ArchiHub didirikan oleh Michael Setiawan, seorang arsitek visioner
            yang ingin mengubah cara orang melihat dan merasakan ruang. Dengan
            dukungan tim yang profesional dan berdedikasi, ArchiHub terus
            menghadirkan desain yang mengutamakan keseimbangan antara estetika,
            fungsi, dan keberlanjutan.
          </p>
          <p className="text-base md:text-lg font-light text-gray-800 text-justify">
            ArchiHub didirikan pada tahun 2007 di Jakarta dengan visi untuk
            menghadirkan solusi arsitektur yang tidak hanya estetis tetapi juga
            berkelanjutan. Berawal dari tim kecil dengan passion terhadap desain
            dan konstruksi, kini ArchiHub telah berkembang menjadi firma
            arsitektur yang menangani berbagai proyek, mulai dari hunian pribadi
            hingga bangunan komersial.
          </p>
        </div>
      </div>

      <div className="visi flex flex-col-reverse md:flex-row items-center w-full h-full py-20 px-5 md:px-20 gap-10">
        <div className="flex flex-col text-black gap-3 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-[playfair]">
            Visi dan Misi
          </h1>
          <p className="text-base md:text-lg font-light text-gray-800 text-justify">
            Visi kami adalah menciptakan desain yang menginspirasi, fungsional,
            dan berkelanjutan, selaras dengan kebutuhan serta gaya hidup masa
            kini.
          </p>
          <p className="text-base md:text-lg font-light text-gray-800 text-justify">
            Misi Kami:
          </p>
          <ul className="text-base md:text-lg font-light text-gray-800 list-disc list-inside">
            <li className="text-left">
              <strong>Rancang</strong> – Menyediakan solusi desain yang inovatif
              dan responsif terhadap kebutuhan klien.
            </li>
            <li className="text-left">
              <strong>Bangun</strong> – Mewujudkan konsep menjadi realitas
              dengan perencanaan yang matang dan eksekusi berkualitas tinggi.
            </li>
            <li className="text-left">
              <strong>Hidup</strong> – Menciptakan ruang yang tidak hanya indah,
              tetapi juga nyaman dan berdampak positif bagi penghuninya.
            </li>
          </ul>
        </div>
        <img
          src={bgImages[1]}
          alt=""
          className="w-full h-auto md:w-144 h-144 object-cover"
        />
      </div>

      <div className="nilai flex flex-col md:flex-row items-center w-full h-full py-20 px-5 md:px-20 gap-10">
        <img
          src={bgImages[2]}
          alt=""
          className="w-full h-auto md:w-144 h-144 object-cover"
        />
        <div className="flex flex-col text-black gap-3 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-[playfair]">
            Nilai Perusahaan
          </h1>
          <p className="text-base md:text-lg font-light text-gray-800 text-justify">
            Di ArchiHub, kami menjunjung tinggi budaya kerja yang kolaboratif,
            inovatif, dan berorientasi pada kualitas. Kami percaya bahwa desain
            terbaik lahir dari sinergi antara kreativitas, teknologi, dan
            kebutuhan manusia. Nilai-nilai yang kami pegang teguh:
          </p>

          <ul className="text-base md:text-lg font-light text-gray-800 list-disc list-inside">
            <li className="text-left">
              <strong>Inovasi</strong> – Selalu mencari solusi desain yang
              kreatif dan efektif.
            </li>
            <li className="text-left">
              <strong>Kualitas</strong> – Mengutamakan detail dan standar tinggi
              dalam setiap proyek.
            </li>
            <li className="text-left">
              <strong>Keberlanjutan</strong> – Mendesain dengan mempertimbangkan
              dampak terhadap lingkungan.
            </li>
            <li className="text-left">
              <strong>Kolaborasi</strong> – Bekerja bersama klien untuk
              mewujudkan visi mereka.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
