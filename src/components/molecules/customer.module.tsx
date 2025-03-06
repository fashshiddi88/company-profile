"use client";
import { useState, useEffect } from "react";
import { getCustomers, ICustomer } from "@/lib/services/customer";
import Image from "next/image";

export default function CustomerCard() {
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const data = await getCustomers();
      setCustomers(data);
    };
    fetchCustomers();
  }, []);
  return (
    <div className="flex w-full justify-between items-center gap-x-10">
      {customers.length > 0 ? (
        customers.map((customer, index) => (
          <div
            key={index}
            className="card bg-white flex rounded-md w-105 h-50 items-center shadow-md p-2 gap-x-4"
          >
            <div className="relative w-20 h-20 overflow-hidden aspect-square mb-2">
              <Image
                src={customer.img}
                alt={customer.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col p-2 w-80 h-full justify-center">
              <h3 className="text-l mt-3 text-black font-medium font-[poppins] mb-2">
                {customer.name},
                <span className="text-sm text-gray-500"> {customer.job}</span>
              </h3>
              <p className="text-sm text-gray-500 font-[poppins]">
                "{customer.review}"
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Belum ada testimoni.</p>
      )}
    </div>
  );
}
