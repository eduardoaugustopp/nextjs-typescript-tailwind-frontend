import React from "react";

const Trocas = () => {
  return (
    <div className="bg-black text-white p-5 text-center">
      <h1 className="font-normal text-2xl mb-8 sm:text-xl xs:text-lg">CONDIÇÕES GERAIS</h1>
      <div className="max-w-2xl mx-auto text-left">
        <p className="text-base leading-7 mb-5">
          A Veículos é uma loja online de peças de carro, conectando fornecedores e clientes em todo o Brasil. Nosso objetivo é garantir sua satisfação, por isso nossa política de trocas e devoluções segue as regras do Código de Defesa do Consumidor.
        </p>
        <h2 className="font-normal text-xl mb-4">RECEBIMENTO DO PRODUTO</h2>
        <p className="text-base leading-7 mb-5">
          Quando o produto for entregue, você pode recusar caso perceba algum dos seguintes problemas:
        </p>
        <ul className="text-base leading-7 mb-5 list-disc ml-5">
          <li>Embalagem aberta;</li>
          <li>Produto quebrado;</li>
          <li>Produto errado;</li>
          <li>Faltando peças.</li>
        </ul>
        <p className="text-base leading-7 mb-5">
          Se perceber algum desses problemas, recuse o produto e escreva o motivo na nota fiscal. Se o problema for encontrado depois, entre em contato com o nosso Suporte ao Cliente em até 72 horas.
        </p>

        <h2 className="font-normal text-xl mb-4">TROCA OU DEVOLUÇÃO</h2>
        <p className="text-base leading-7 mb-5">
          Você tem 7 dias após a entrega para pedir a troca ou devolução do produto. Se o produto estiver com defeito ou se você não estiver satisfeito, entre em contato com nosso Suporte ao Cliente. O produto deve ser devolvido na embalagem original ou similar.
        </p>

        <h2 className="font-normal text-xl mb-4">DEVOLUÇÃO POR DESISTÊNCIA</h2>
        <p className="text-base leading-7 mb-5">
          Você pode desistir da compra em até 7 dias após receber o produto, comunicando ao vendedor. A devolução por desistência será aceita se atender aos seguintes requisitos:
        </p>
        <ul className="text-base leading-7 mb-5 list-disc ml-5">
          <li>Informar a desistência dentro de 7 dias;</li>
          <li>Produto e embalagem sem uso ou danos;</li>
          <li>Devolver o produto com a Nota Fiscal;</li>
          <li>Embalagem bem fechada para evitar danos durante o envio.</li>
        </ul>
        <p className="text-base leading-7 mb-5">
          A loja que vende o produto vai pagar o custo da devolução. A Veículos ajudará no processo para garantir que tudo esteja conforme a lei.
        </p>

        <h2 className="font-normal text-xl mb-4">COMO SOLICITAR TROCA OU CANCELAMENTO?</h2>
        <p className="text-base leading-7 mb-5">
          Para pedir a troca ou cancelar a compra, entre em contato com nosso Suporte ao Cliente:
        </p>
        <ul className="text-base leading-7 mb-5 list-disc ml-5">
          <li>Telefone: (35) 99806-8977</li>
          <li>E-mail: suporte@veiculos.com.br</li>
        </ul>
      </div>
    </div>
  );
};

export default Trocas;
