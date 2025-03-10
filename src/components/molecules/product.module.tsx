"use client";
import { useState, useEffect } from "react";
import { getProducts, IProduct } from "@/lib/services/productService";

interface ProductListProps {
  limit?: number;
  category?: string;
}

export default function ProductList({ limit, category }: ProductListProps) {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(limit, category);
      setProducts(data);
    };

    fetchProducts();
  }, [limit, category]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div
            key={index}
            className="card bg-white flex flex-col rounded-md w-full h-70 items-center shadow-md p-2"
          >
            <img
              className="w-full h-40 object-cover rounded-t-md mb-2"
              src={product.img}
              alt={product.title}
            />
            <h3 className="text-l mt-3 text-black font-medium font-[poppins] mb-2">
              {product.title}
            </h3>
            <p className="text-md text-gray-500 font-[poppins]">
              {product.category}
            </p>
          </div>
        ))
      ) : (
        <p className="text-xl text-gray-500 font-[poppins]">
          No products available
        </p>
      )}
    </div>
  );
}
