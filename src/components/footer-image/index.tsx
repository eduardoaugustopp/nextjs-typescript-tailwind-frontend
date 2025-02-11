"use client";

import React from "react";

const FooterImage = () => {
  return (
    <div className="flex flex-col items-center text-center p-12 bg-black text-white">
      <h1 className="text-white text-xl font-light mb-20">
        PARTE FRIA DO TUBORCOMPRESSOR
      </h1>
      <div className="w-full h-auto max-w-[500px] aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src="/imagens/footer-image/turbo.png"
          alt="Tabela de tamanhos"
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-base mt-10">
        A função principal é comprimir o ar admitido, utilizando a energia dos
        gases de escape captada pela turbina.
      </p>
    </div>
  );
};

export default FooterImage;
