"use client";

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

  return <TodosOsCards categories={categories} title="TURBINAS" />;
};

export default CardsTurbinas;
