"use client";

import React, { useState } from "react";

const categories = [
  { name: "Turbinas", link: "/pages/cards-turbinas" },
  { name: "Filtros", link: "" },
  { name: "Velas", link: "" },
  { name: "Amortecedores", link: "#" },
  { name: "Molas", link: "#" },
  { name: "Pivô", link: "#" },
  { name: "Bieletas", link: "#" },
];

const categoryImages: Record<string, string> = {
  Turbinas: "/imagens/navegue-por-categoria/turbina.png",
  Filtros: "/imagens/navegue-por-categoria/filtros.png",
  Velas: "/imagens/navegue-por-categoria/velas.png",
  Amortecedores: "/imagens/navegue-por-categoria/amortecedores.png",
  Molas: "/imagens/navegue-por-categoria/molas.png",
  Pivô: "/imagens/navegue-por-categoria/pivo.png",
  Bieletas: "/imagens/navegue-por-categoria/bieletas.png",
};

const Categoria: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage = 4;

  const nextCategory = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + itemsPerPage;
      return newIndex >= categories.length ? prevIndex : newIndex;
    });
  };

  const prevCategory = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - itemsPerPage;
      return newIndex < 0 ? prevIndex : newIndex;
    });
  };

  const visibleCategories = categories.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="bg-black p-6 flex flex-col items-center">
      <h1 className="text-white text-xl font-light mb-12">
        NAVEGUE POR CATEGORIA
      </h1>

      <div className="flex flex-wrap justify-center gap-5 transition-transform duration-300 mb-2">
        {visibleCategories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <a href={category.link} className="block text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden transform transition-all duration-300 hover:scale-110 hover:rotate-3">
                <img
                  src={categoryImages[category.name]}
                  alt={`Imagem de ${category.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <p className="mt-5 text-sm text-white font-roboto capitalize transition-colors duration-300 hover:text-gray-600">
                {category.name}
              </p>
            </a>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          onClick={prevCategory}
          className="bg-black text-white rounded-full p-2 cursor-pointer transition-transform duration-200 transform hover:scale-150 focus:outline-none mr-10"
        >
          ←
        </button>
        <button
          onClick={nextCategory}
          className="bg-black text-white rounded-full p-2 cursor-pointer transition-transform duration-200 transform hover:scale-150 focus:outline-none ml-10"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Categoria;
