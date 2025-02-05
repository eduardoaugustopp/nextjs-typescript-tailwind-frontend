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
      name: "FILTRO DE AR ESPORTIVO",
      link: "",
      image: "/imagens/cards-home-filtros/filtro-de-ar-esportivo-duplo-fluxo.png",
      description: "FILTRO DE AR ESPORTIVO",
      promotionalPrice: "R$ 299,90",
      normalPrice: "R$ 310,90",
      installment: "5x de R$ 59,98",
    },
    {
      name: "FILTRO DE AR INBOX AUDI",
      link: "",
      image: "/imagens/cards-home-filtros/filtro-de-ar-inbox-audi.png",
      description: "FILTRO DE AR INBOX AUDI",
      promotionalPrice: "R$ 249,90",
      normalPrice: "R$ 279,90",
      installment: "4x de R$ 62,48",
    },
    {
      name: "FILTRO DE AR GOLF",
      link: "",
      image: "/imagens/cards-home-filtros/fitro-de-ar-golf.png",
      description: "FILTRO DE AR GOLF",
      promotionalPrice: "R$ 419,90",
      normalPrice: "R$ 429,90",
      installment: "8x de R$ 52,49",
    },
  ];

  res.status(200).json(categories);
}
