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
  if (req.method === "GET") {
    if (req.query.type === "turbinas") {
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
      return res.status(200).json(categories);
    }

    if (req.query.type === "filtros") {
      const categories: Category[] = [
        {
          name: "FILTRO DE AR ESPORTIVO",
          link: "",
          image:
            "/imagens/cards-home-filtros/filtro-de-ar-esportivo-duplo-fluxo.png",
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
      return res.status(200).json(categories);
    }

    if (req.query.type === "velas") {
      const categories: Category[] = [
        {
          name: "vela-de-ignicao",
          link: "",
          image: "/imagens/cards-velas/vela-de-ignicao.png",
          description: "VELA DE IGNIÇÃO",
          promotionalPrice: "R$ 138,86",
          normalPrice: "R$ 146,59",
          installment: "6x de R$ 23,14",
        },
        {
          name: "vela-de-aquecimento",
          link: "",
          image: "/imagens/cards-velas/vela-de-aquecimento.png",
          description: "VELA DE AQUECIMENTO",
          promotionalPrice: "R$ 31,28",
          normalPrice: "R$ 32,93",
          installment: "6x de R$ 5,21",
        },
      ];
      return res.status(200).json(categories);
    }

    if (req.query.type === "amortecedores") {
      const categories: Category[] = [
        {
          name: "amortecedor-dianteiro-turbogas",
          link: "",
          image:
            "/imagens/cards-amortecedores/amortecedor-dianteiro-turbogas.png",
          description: "AMORTECEDOR SUSPENSÃO DIANTEIRO",
          promotionalPrice: "R$ 432,65",
          normalPrice: "R$ 455,42",
          installment: "6x de R$ 72,11",
        },
        {
          name: "amortecedor-traseiro-super",
          link: "",
          image: "/imagens/cards-amortecedores/amortecedor-traseiro-super.png",
          description: "AMORTECEDOR TRASEIRO SUPER",
          promotionalPrice: "R$ 242,11",
          normalPrice: "R$ 254,85",
          installment: "6x de R$ 40,35",
        },
      ];
      return res.status(200).json(categories);
    }

    if (req.query.type === "molas") {
      const categories: Category[] = [
        {
          name: "mola-dianteira-helicoidal",
          link: "",
          image: "/imagens/cards-molas/mola-dianteira-helicoidal.png",
          description: "MOLA DE SUSPENSÃO DIANTEIRA",
          promotionalPrice: "R$ 214,55",
          normalPrice: "R$ 225,84",
          installment: "6x de R$ 35,76",
        },
        {
          name: "mola-helicoidal",
          link: "",
          image: "/imagens/cards-molas/mola-helicoidal.png",
          description: "MOLA SUSPENSÃO TRASEIRA",
          promotionalPrice: "R$ 287,77",
          normalPrice: "R$ 302,92",
          installment: "6x de R$ 47,96",
        },
      ];
      return res.status(200).json(categories);
    }

    if (req.query.type === "pivos") {
      const categories: Category[] = [
        {
          name: "pivo-dianteiro-direito",
          link: "",
          image: "/imagens/cards-pivos/pivo-dianteiro-direito.png",
          description: "PIVÔ DIANTEIRO DIREITO",
          promotionalPrice: "R$ 47,79",
          normalPrice: "R$ 50,31",
          installment: "6x de R$ 8,39",
        },
        {
          name: "pivo-inferior-direito",
          link: "",
          image: "/imagens/cards-pivos/pivo-inferior-direito.png",
          description: "PIVÔ INFERIOR DIREITO",
          promotionalPrice: "R$ 66,14",
          normalPrice: "R$ 69,62",
          installment: "6x de R$ 11,60",
        },
      ];
      return res.status(200).json(categories);
    }

    if (req.query.type === "bieletas") {
      const categories: Category[] = [
        {
          name: "bieleta-dianteira",
          link: "",
          image: "/imagens/cards-bieletas/bieleta-dianteira.png",
          description: "BIELETA DIANTEIRA",
          promotionalPrice: "R$ 37,90",
          normalPrice: "R$ 39,89",
          installment: "6x de R$ 6,32",
        },
        {
          name: "bieleta-traseira",
          link: "",
          image: "/imagens/cards-bieletas/bieleta-traseira.png",
          description: "PIVÔ INFERIOR DIREITO",
          promotionalPrice: "R$ 41,07",
          normalPrice: "R$ 43,23",
          installment: "6x de R$ 6,85",
        },
      ];
      return res.status(200).json(categories);
    }

    return res
      .status(404)
      .json({ message: "Tipo de categoria não encontrada" });
  }

  return res.status(405).json({ message: "Método não permitido" });
}
