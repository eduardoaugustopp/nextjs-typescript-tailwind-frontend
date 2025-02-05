"use client";

import React, { useState } from "react";

const FooterImage = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = (
      e.target as HTMLDivElement
    ).getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setScale(1.25);
  };

  const handleMouseLeave = () => {
    setScale(1);
  };

  return (
    <div className="flex flex-col items-center text-center p-12 bg-black text-white">
      <h1 className="text-white text-xl font-light mb-20">
        PARTE FRIA DO TUBORCOMPRESSOR
      </h1>
      <div
        className="w-100 h-80 overflow-hidden relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "zoom-in" }}
      >
        <div className="w-full max-w-[500px] aspect-w-16 aspect-h-9 overflow-hidden relative">
          <img
            src="/imagens/footer-image/turbo.png"
            alt="Tabela de tamanhos"
            className="w-full h-full object-contain transition-transform duration-300 ease-in-out"
            style={{
              transform: `scale(${scale}) translate(-${
                position.x * (scale - 1)
              }px, -${position.y * (scale - 1)}px)`,
            }}
          />
        </div>
      </div>
      <p className="text-base mt-10">
        A função principal é comprimir o ar admitido, utilizando a energia dos
        gases de escape captada pela turbina.
      </p>
    </div>
  );
};

export default FooterImage;
