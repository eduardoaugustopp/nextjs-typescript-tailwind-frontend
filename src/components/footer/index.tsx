import React from "react";
import { FaWhatsapp, FaInstagram, FaRocket } from "react-icons/fa";

const Rodape: React.FC = () => {
  return (
    <>

      <footer className="w-full py-8 bg-white text-black">

        <div className="max-w-screen-xl mx-auto px-4">
     
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            
      
            <section>
              <div>
          
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <FaRocket className="" /> VEÍCULOS
                </h2>
                <ul className="mt-4">
           
                  <li>
                    <a href="/pages/pages-footer/sobre-nos" className="text-sm hover:text-gray-600">
                      Sobre Nós
                    </a>
                  </li>
                  <li>
                    <a href="/pages/pages-footer/tempo-de-garantia" className="text-sm hover:text-gray-600">
                      Tempo de Garantia
                    </a>
                  </li>
                  <li>
                    <a href="/pages/pages-footer/trocas-e-devolucoes" className="text-sm hover:text-gray-600">
                      Trocas e Devoluções
                    </a>
                  </li>
                </ul>
              </div>
            </section>

          
            <section className="text-left">
              <h2 className="text-lg font-semibold">FALE CONOSCO</h2>
              <ul className="mt-4">
           
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group text-sm flex items-center"
                  >
                    <FaWhatsapp className="mr-2" /> 
                    <span className="group-hover:text-gray-600">
                      (35) 99806-8977
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-500 transform scale-x-100 origin-left transition-transform duration-300 group-hover:scale-x-0"></span>
                  </a>
                </li>
      
                <li>
                  <a
                    className="relative group text-sm hover:text-gray-600"
                  >
                    E-mail: veiculos@hotmail.com
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-500 transform scale-x-100 origin-left transition-transform duration-300 group-hover:scale-x-0"></span>
                  </a>
                </li>
                <li>
                  <span className="text-sm">Segunda a Sexta: 09h às 18h</span>
                </li>
                <li>
                  <span className="text-sm">Sábado: 09h às 13h</span>
                </li>
              </ul>
            </section>

    
            <section>
              <div>
                <h2 className="text-lg font-semibold">REDE SOCIAL</h2>
                <ul className="mt-4">
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group text-sm flex items-center"
                    >
                      <FaInstagram className="mr-2" />
                      <span className="group-hover:text-gray-600">
                        @veiculos
                      </span>
             
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-500 transform scale-x-100 origin-left transition-transform duration-300 group-hover:scale-x-0 "></span>
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>

     
        <div className="mt-8 text-center text-sm">
       
          <p>
            &copy; 2025 - Veículos - Santa Rita do Sapucaí - MG
          </p>
    
          <p>
            Desenvolvido por{" "}
            <a
              href="https://github.com/eduardoaugustopp"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group font-semibold"
            >
              Eduardo Augusto Paiva Pinto
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-500 transform scale-x-100 origin-left transition-transform duration-300 group-hover:scale-x-0"></span>
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Rodape;
