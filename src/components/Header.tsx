// src/components/Header.tsx
import React from "react";

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const handleNavigationClick = (section: string) => {
    scrollToSection(section);
  };

  return (
    <header className="fixed top-0 w-full bg-blue-500 text-white py-2 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="broom.png" alt="Logo" className="h-6 w-6 mr-2" />
          <h1 className="text-lg font-semibold">Cleaning Business</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => handleNavigationClick("booking")}
                className="hover:text-blue-300"
              >
                Book now
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigationClick("how-it-works")}
                className="hover:text-blue-300"
              >
                How it works
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigationClick("about-us")}
                className="hover:text-blue-300"
              >
                About us
              </button>
            </li>
          </ul>
        </nav>
        <button className="bg-white text-blue-500 px-4 py-1 rounded hover:bg-blue-300 hover:text-white">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Header;
