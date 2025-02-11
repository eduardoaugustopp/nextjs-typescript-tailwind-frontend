'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Category {
  name: string;
  link: string;
  image: string;
  description: string;
  promotionalPrice: string;
  normalPrice: string;
  installment: string;
}

const CardsTurbinas: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/pecas?type=turbinas"); 
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div className="text-center p-10 bg-black pb-20">
      <h1 className="text-white text-xl font-light mb-20">
        TURBINAS
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/cards-turbinas-por-peca/${category.link}`}
            className="block bg-black rounded-lg shadow-md overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gray-800"
          >
            <img
              src={category.image} 
              alt={category.name}
              className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80"
            />
            <div className="text-white mt-4">
              <p className="text-sm">{category.description}</p>
              <p className="text-lg font-bold">{category.promotionalPrice}</p>
              <p className="text-xs text-gray-400">{category.installment}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardsTurbinas;
