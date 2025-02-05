import React from "react";

const Garantia = () => {
  return (
    <div className="bg-black text-white p-5 text-center">
      <h1 className="font-normal text-2xl mb-8 sm:text-xl xs:text-lg">GARANTIA DOS PRODUTOS</h1>
      <div className="max-w-2xl mx-auto text-left">
        <p className="text-base leading-7 mb-5">
          Todos os produtos são novos e têm garantia contra defeitos de fabricação. Eles são testados ou revisados antes de serem enviados.
        </p>
        <p className="text-base leading-7 mb-5">
          A garantia não cobre produtos amassados, cortados ou danificados devido à instalação incorreta ou uso inadequado. Nestes casos, a garantia será perdida.
        </p>
      </div>
    </div>
  );
};

export default Garantia;
