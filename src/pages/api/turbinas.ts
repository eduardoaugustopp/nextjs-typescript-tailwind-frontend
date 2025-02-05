import { NextApiRequest, NextApiResponse } from "next";

interface Category {
  name: string;
  link: string;
  image: string;
  description: string;
  promotionalPrice: string;
  normalPrice: string;
  installment: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const categories: Category[] = [
    {
      name: "turbina-50-70-pulsativa",
      link: "",
      image: "/imagens/cards-home-turbinas/turbinas-50-70.png",
      description: "TURBINA 50/70 PULSATIVA",
      promotionalPrice: "R$ 2.310,18",
      normalPrice: "R$ 2.431,77",
      installment: "12x de R$ 229,81",
    },
    {
      name: "TURBINA 60/80 PULSATIVA",
      link: "",
      image: "/imagens/cards-home-turbinas/turbinas-60-80.png",
      description: "TURBINA 60/80 PULSATIVA",
      promotionalPrice: "R$ 2.810,45",
      normalPrice: "R$ 2.950,99",
      installment: "12x de R$ 279,99",
    },
    {
      name: "TURBINA 74/84 PULSATIVA",
      link: "",
      image: "/imagens/cards-home-turbinas/turbinas-74-84.png",
      description: "TURBINA 74/84 PULSATIVA",
      promotionalPrice: "R$ 3.210,75",
      normalPrice: "R$ 3.400,00",
      installment: "12x de R$ 319,99",
    },
   
  ];

  res.status(200).json(categories);
}