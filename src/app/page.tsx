import Filtros from "@/components/cards-home/cards-home-filtros";
import MaisVendidos from "@/components/cards-home/cards-home-mais-vendidos";
import Turbinas from "@/components/cards-home/cards-home-turbinas";
import Feedback from "@/components/feedback-dos-clientes";
import FooterImage from "@/components/footer-image";
import HomeImage from "@/components/home-image";
import Banner from "@/components/home-image-banner";
import Categoria from "@/components/navegue-por-categoria";

export default function Home() {
  return (
    <>
     <Banner/>
     <Categoria />
     <MaisVendidos/>
     <HomeImage/>
     <Turbinas />
     <Filtros />
     < FooterImage />
     <Feedback />
    </>

  );
}
