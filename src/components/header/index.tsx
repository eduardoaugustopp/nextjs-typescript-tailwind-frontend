'use client'
import { useState, useEffect } from "react";
import { FiShoppingCart, FiSearch, FiUser } from "react-icons/fi";

export default function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const categories = [
    { name: "PÁGINA INICIAL", link: "/" },
    { name: "TURBINAS", link: "/pages/cards-turbinas"},
    { name: "FILTROS", link: "/pages/cards-filtros" },
    { name: "VELAS", link: "/pages/cards-velas" },
    { name: "AMORTECEDORES", link: "/pages/cards-amortecedores" },
    { name: "MOLAS", link: "/pages/cards-molas" },
    { name: "PIVÔS", link: "/pages/cards-pivos" },
    { name: "BIELETAS", link: "/pages/cards-bieletas" },
  ];
  

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMenu]);

  return (
    <div>

      <header className="bg-black text-white shadow-md">
        <div className="container mx-auto p-4 relative flex items-center">

          <div className="lg:hidden absolute left-4">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-white text-lg focus:outline-none"
            >
              ☰
            </button>
          </div>
          <img
            src="/imagens/header/logo.png"
            alt="Logo"
            className="h-16 mx-auto block sm:w-auto"
          />

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex items-center space-x-4 sm:space-x-6 sm:right-8 sm:top-1/2 sm:translate-y-0">
            <div className="hidden sm:flex items-center space-x-6">
              <FiUser
                size={24}
                className="cursor-pointer text-white hover:text-gray-600"
              />
              <FiSearch
                size={24}
                className="cursor-pointer text-white hover:text-gray-600"
                onClick={() => setIsSearchActive(!isSearchActive)}
              />
              <FiShoppingCart
                size={24}
                className="cursor-pointer text-white hover:text-gray-600"
              />
            </div>
            <div className="flex sm:hidden items-center space-x-4">
              <FiSearch
                size={24}
                className="cursor-pointer text-white hover:text-gray-600"
                onClick={() => setIsSearchActive(!isSearchActive)}
              />
              <FiShoppingCart
                size={24}
                className="cursor-pointer text-white hover:text-gray-600"
              />
            </div>
          </div>
        </div>
        {isSearchActive && (
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <FiSearch size={24} className="text-white" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="bg-transparent text-white focus:outline-none w-full"
                placeholder="PESQUISAR POR..."
              />
            </div>
          </div>
        )}
      </header>

      <nav className={`bg-black ${showMenu ? "p-4" : "p-0"} relative`}>
        <ul className="hidden lg:flex justify-center gap-6">
          {categories.map((category, index) => (
            <li key={index}>
              <a
                href={category.link}
                className="text-white text-sm transition-colors duration-300 ease-in-out hover:text-gray-600"
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50 transition-all duration-300 ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <button
            onClick={() => setShowMenu(false)}
            className="absolute top-4 right-4 text-3xl focus:outline-none"
          >
            x
          </button>
          <ul className="list-none text-center space-y-4">
            {categories.map((category, index) => (
              <li key={index}>
                <a
                  href={category.link}
                  className="text-xl hover:text-gray-300 transition-colors duration-300"
                  onClick={() => setShowMenu(false)}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
