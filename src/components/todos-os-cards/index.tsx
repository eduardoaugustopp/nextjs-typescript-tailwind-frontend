import React, { useState } from "react";

interface Category {
  name: string;
  image: string;
  description: string;
  promotionalPrice: string;
  normalPrice: string;
  installment: string;
}

interface TodosOsCardsProps {
  categories: Category[];
  title: string;
}

const TodosOsCards: React.FC<TodosOsCardsProps> = ({ categories, title }) => {
  const [selectedImage, setSelectedImage] = useState<Category | null>(null);
  const [zoom, setZoom] = useState<number>(1);

  const closeModal = () => setSelectedImage(null);

  const handleMouseEnter = () => {
    setZoom(1.5);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    const { top, left, width, height } = (
      event.currentTarget as HTMLElement
    ).getBoundingClientRect();

    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;

    (
      event.currentTarget as HTMLElement
    ).style.backgroundPosition = `${x}% ${y}%`;
  };

  const handleMouseLeave = () => {
    setZoom(1);
  };

  return (
    <div className="text-center p-10 bg-black pb-20">
      <h1 className="text-white text-xl font-light mb-20">{title}</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="block bg-black rounded-lg shadow-md overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gray-800"
            onClick={() => setSelectedImage(category)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80"
            />
            <p className="my-2 text-white text-sm">{category.description}</p>
            <div className="my-2 text-white text-sm">
              <span className="text-lg font-medium">
                {category.promotionalPrice}
              </span>
              <span className="line-through text-gray-400 mx-2">
                {category.normalPrice}
              </span>
              <span>{category.installment}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-96 h-96 flex flex-col">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl text-gray-600"
            >
              X
            </button>

            <div
              className="w-full h-64 bg-center bg-no-repeat bg-contain mb-4"
              style={{
                backgroundImage: `url(${selectedImage.image})`,
                backgroundSize: `${zoom * 100}%`,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />

            <div className="text-center">
              <h2 className="text-xl">{selectedImage.name}</h2>
              <p className="text-gray-700 mt-2">{selectedImage.description}</p>
              <div className="mt-2">
                <span className="text-lg font-medium">
                  {selectedImage.promotionalPrice}
                </span>
                <span className="line-through text-gray-400 mx-2">
                  {selectedImage.normalPrice}
                </span>
                <span>{selectedImage.installment}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodosOsCards;
