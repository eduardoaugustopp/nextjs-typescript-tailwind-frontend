'use client'

import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa'; 

const categories = [
  { name: "feedback10", image: "/imagens/feedback-dos-clientes/feedback10.png" },
  { name: "feedback9", image: "/imagens/feedback-dos-clientes/feedback9.png" },
  { name: "feedback8", image: "/imagens/feedback-dos-clientes/feedback8.png" },
  { name: "feedback7", image: "/imagens/feedback-dos-clientes/feedback7.png" },
  { name: "feedback6", image: "/imagens/feedback-dos-clientes/feedback6.png" },
  { name: "feedback5", image: "/imagens/feedback-dos-clientes/feedback5.png" },
  { name: "feedback4", image: "/imagens/feedback-dos-clientes/feedback4.png" },
  { name: "feedback3", image: "/imagens/feedback-dos-clientes/feedback3.png" },
  { name: "feedback2", image: "/imagens/feedback-dos-clientes/feedback2.png" },
  { name: "feedback1", image: "/imagens/feedback-dos-clientes/feedback1.png" },
];


const Feedback = () => {
  const [visibleImages, setVisibleImages] = useState(categories.slice(0, 3));

  const rotateImages = () => {
    setVisibleImages((prevImages) => {
      const nextIndex = (categories.indexOf(prevImages[2]) + 1) % categories.length; 
      return [prevImages[1], prevImages[2], categories[nextIndex]]; 
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rotateImages();
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black overflow-hidden p-8 text-center">
      <div className="mb-12">
        <p className="text-white text-xl font-medium mb-6">FEEDBACK DOS CLIENTES ★★★★★</p>
        <div className="flex justify-center items-center text-white mb-3">
        </div>
        <p className="text-white text-base mt-4">
          + de 500 clientes satisfeitos!
        </p>
      </div>
      <div className="flex gap-4 transition-transform duration-1000 ease-in-out justify-center">
        {visibleImages.map((category, index) => (
          <div
            key={index}
            className="w-1/3 flex-shrink-0 h-48 relative"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
