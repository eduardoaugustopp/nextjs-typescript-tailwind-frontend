'use client'

import React, { useEffect, useState } from "react";
import TodosOsCards from "@/components/todos-os-cards";

interface Category {
  name: string;
  image: string;
  description: string;
  promotionalPrice: string;
  normalPrice: string;
  installment: string;
}

const Velas: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/api/pecas?type=velas")
      .then((response) => response.json())
      .then((data: Category[]) => setCategories(data.slice(0, 8)))
      .catch((error) => console.error("Erro ao carregar categorias:", error));
  }, []);

  return <TodosOsCards categories={categories} title="VELAS" />;
};

export default Velas;
