"use client";
import { useState, useEffect } from "react";
import { getBackgroundImages } from "@/lib/services/imageService";
import ProductList from "@/components/molecules/product.module";
import CustomerCard from "@/components/molecules/customer.module";
import Link from "next/link";

export default function Home() {
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
    <div className="bg-white font-[family-name:var(--font-poppins)]">
      <main className="relative w-full h-screen">
        {bgImages.length > 0 ? (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url("${bgImages[0]}")` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="bg-slate-900 opacity-25 p-10 mt-90 h-40 w-80 md:p-20 ml-10 md:ml-20 mt-20 md:mt-100 w-11/12 md:w-200 h-40 md:h-60 relative text-white z-10"></div>
            <div className="absolute opacity-50 inset-0 bg-slate-500 mx-15 mt-100 w-70 h-20 md:ml-40 mt-20 md:mt-110 w-10/12 md:w-160 h-20 md:h-40"></div>
            <div className="absolute inset-0 ml-15 mt-100 md:ml-41 mt-20 md:mt-110">
              <h1 className="text-6xl md:text-9xl font-bold">ArchiHub</h1>
              <p className="text-xl md:text-3xl">Rancang. Bangun. Hidup.</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen">
            <div className="w-16 h-16 border-4 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </main>
      <div className="pt-10 md:pt-26 px-5 md:px-20 pb-10 md:pb-20">
        <div className="flex flex-col md:flex-row gap-x-5 md:gap-x-30">
          <img src={bgImages[1]} className="w-full md:w-144 h-auto" />
          <div className="flex flex-col p-5 text-black gap-y-4">
            <h1 className="text-4xl md:text-6xl">Tentang Kami</h1>
            <p className="text-lg md:text-xl font-[poppins] font-light text-justify">
              ArchiHub lahir dari visi untuk menciptakan ruang yang tidak hanya
              indah, tetapi juga bermakna dan fungsional. Sejak berdiri di 2007,
              kami telah berkembang menjadi firma arsitektur yang menangani
              berbagai proyek hunian, komersial, dan ruang publik.&nbsp;
            </p>
            <p className="text-lg md:text-xl font-[poppins] font-light text-justify">
              Kami percaya bahwa arsitektur bukan hanya soal desain, tetapi juga
              tentang bagaimana sebuah ruang bisa menghadirkan pengalaman
              terbaik bagi penggunanya. Dengan budaya kerja yang kolaboratif dan
              inovatif, tim kami—yang terdiri dari para profesional
              berbakat—selalu berusaha menghadirkan solusi terbaik dalam setiap
              proyek.
            </p>
            <p className="text-lg md:text-xl font-[poppins] font-light text-justify">
              Dengan semangat {`"Rancang. Bangun. Hidup."`} kami siap membantu
              mewujudkan ruang yang sesuai dengan visi dan kebutuhan Anda.&nbsp;
              <span>
                <Link className="underline" href={"/about"}>
                  Selengkapnya
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-200 h-full w-full pl-10 pr-10 md:h-screen px-20 pt-26 pb-10">
        <div className="flex flex-col w-full h-full">
          <div className="bg-slate-500 opacity-90 w-full h-full p-4 rounded-sm md:h-1/3 ">
            <div className="flex flex-col items-center w-full gap-y-5">
              <h1 className="text-4xl ">Layanan Kami</h1>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 gap-x-50">
                {[
                  { img: "/article.svg", title: "Planning" },
                  { img: "/home.svg", title: "Exterior" },
                  { img: "/chair.svg", title: "Interior" },
                ].map((service, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-700 opacity-90 flex justify-center items-center">
                      <img src={service.img} alt="" className="w-12 h-12" />
                    </div>
                    <h2 className="text-lg md:text-xl text-bold font-[poppins]">
                      {service.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-2/3 p-4">
            <div className="flex flex-col items-center w-full gap-y-5">
              <h1 className="text-4xl text-black items-center">Proyek Kami</h1>
              <ProductList limit={4} />

              <Link
                href={"/services"}
                className="w-50 h-10 bg-slate-500 text-white rounded-sm font-[poppins] cursor-pointer flex justify-center items-center"
              >
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full pt-26 px-20 pb-26">
        <div className="flex flex-col w-full h-full items-center gap-y-15">
          <h1 className="text-4xl text-black">Apa Kata Mereka?</h1>
          <CustomerCard />
        </div>
      </div>
    </div>
  );
}
