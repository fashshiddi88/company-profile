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
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url("${bgImages[0]}")` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="bg-slate-900 opacity-25 p-20 ml-20 mt-100 w-200 h-60 relative text-white z-10"></div>
          <div className="absolute opacity-50 inset-0 bg-slate-500 ml-40 mt-110 w-160 h-40"></div>
          <div className="absolute inset-0 ml-41 mt-110">
            <h1 className="text-9xl font-bold">ArchiHub</h1>
            <p className="mt-1 text-3xl">Rancang. Bangun. Hidup.</p>
          </div>
        </div>
      </main>
      <div className=" h-screen w screen pt-26 px-20 pb-20">
        <div className="flex gap-x-30">
          <img src={bgImages[1]} className="w-144 h-144" />
          <div className="flex flex-col p-5 text-black gap-y-4">
            <h1 className=" text-6xl">Tentang Kami</h1>
            <p className="text-xl font-[poppins] font-light text-justify">
              ArchiHub didirikan pada tahun 2007 di Jakarta dengan visi untuk
              menghadirkan solusi arsitektur yang tidak hanya estetis tetapi
              juga berkelanjutan.
              <span className="underline">
                <Link href={"/about"}>Selengkapnya</Link>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-200 h-screen w-full pt-26 px-20 pb-10">
        <div className="flex flex-col w-full h-full">
          <div className="bg-slate-500 opacity-90 w-full h-1/3 p-4 rounded-sm">
            <div className="flex flex-col items-center w-full gap-y-5">
              <h1 className="text-4xl ">Layanan Kami</h1>
              <div className="flex justify-center w-full h-full">
                <div className="w-1/3 h-full flex flex-col justify-center items-center">
                  <div className="w-20 h-20 rounded-full bg-slate-700 opacity-90 flex justify-center items-center">
                    <img src="/article.svg" alt="" className="w-15 h-15" />
                  </div>
                  <h2 className="text-xl text-bold font-[poppins]">Planning</h2>
                </div>
                <div className="w-1/3 h-full  flex flex-col justify-center items-center">
                  <div className="w-20 h-20 rounded-full bg-slate-700 opacity-90 flex justify-center items-center">
                    <img src="/home.svg" alt="" className="w-15 h-15" />
                  </div>
                  <h2 className="text-xl text-bold font-[poppins]">Exterior</h2>
                </div>
                <div className="w-1/3 h-full  flex flex-col justify-center items-center">
                  <div className="w-20 h-20 rounded-full bg-slate-700 opacity-90 flex justify-center items-center">
                    <img src="/chair.svg" alt="" className="w-15 h-15" />
                  </div>
                  <h2 className="text-xl text-bold font-[poppins]">Interior</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-2/3 p-4">
            <div className="flex flex-col items-center w-full gap-y-5">
              <h1 className="text-4xl text-black">Proyek Kami</h1>
              <ProductList limit={3} />

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
