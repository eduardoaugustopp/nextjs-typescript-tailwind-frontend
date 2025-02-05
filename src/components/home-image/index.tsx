import React from "react";

const HomeImage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start bg-black text-white p-0">
      <img
        src="/imagens/home-image/motor-do-carro.png"
        alt="Tabela de tamanhos" 
        className="w-full h-auto max-h-[90vh] object-contain mb-4 md:mb-0 md:w-[60vw] md:h-auto"
      />
      <div className="p-5 text-sm text-center md:text-left md:p-4 md:w-[40vw]">
        <h1 className="text-white text-xl font-light mb-6">VARIEDADES EM PEÇAS</h1>
        <p className="text-base md:text-base">Confira qual turbina é a melhor.</p>
      </div>
    </div>
  );
};

export default HomeImage;