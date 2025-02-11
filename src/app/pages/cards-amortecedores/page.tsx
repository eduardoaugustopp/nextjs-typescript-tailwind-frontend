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

const Amortecedores: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/api/pecas?type=amortecedores")
      .then((response) => response.json())
      .then((data: Category[]) => setCategories(data.slice(0, 8)))
      .catch((error) => console.error("Erro ao carregar categorias:", error));
  }, []);

  return (
    <div className="text-center p-10 bg-black pb-20">
      <h1 className="text-white text-xl font-light mb-20">
        AMORTECEDORES
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.link || "/default-link"}
            className="block bg-black rounded-lg shadow-md overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gray-800"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80"
            />
            <p className="my-2 text-white text-sm">{category.description}</p>
            <div className="my-2 text-white text-sm">
              <span className="text-lg font-medium">
                {category.promotionalPrice}
              </span>
              <span className="line-through text-gray-400 mx-2">
                {category.normalPrice}
              </span>
              <span>{category.installment}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Amortecedores;
