"use client";
import React, { useState, useEffect } from "react";
import ProductList from "@/components/molecules/product.module";
import { getCategories } from "@/lib/services/productService"; // Fungsi untuk mengambil kategori dari Backendless

export default function Projects() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-white">
      <div className="container flex flex-col pl-10 pr-10 w-full md:min-h-screen pt-25 pb-20 px-20">
        <div className="select flex justify-items-end">
          <select
            className="w-100 border p-2 rounded-md text-black"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Semua Kategori</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex w-full h-full p-4">
          <ProductList category={selectedCategory} />
        </div>
      </div>
    </div>
  );
}
