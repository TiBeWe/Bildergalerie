import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo oder Titel der Webseite */}
        <Link to="/" className="text-2xl font-bold">
          Bildergalerie
        </Link>
        
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-400 transition duration-300">
                Startseite
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link to="/gallery" className="hover:text-gray-400 transition duration-300">
=======
              <Link to="/modelle" className="hover:text-gray-400 transition duration-300">
                Modelle
              </Link>
            </li>
            <li>
              <Link to="/galerie" className="hover:text-gray-400 transition duration-300">
>>>>>>> 6fb85b6947f3cbcd51a6b25f926991fd78b38d48
                Galerie
              </Link>
            </li>
            <li>
              <Link to="/videos" className="hover:text-gray-400 transition duration-300">
                Videos
              </Link>
            </li>
            <li>
<<<<<<< HEAD
              <Link to="/animations" className="hover:text-gray-400 transition duration-300">
                Animationen
=======
              <Link to="/kontakt" className="hover:text-gray-400 transition duration-300">
                Kontakt
>>>>>>> 6fb85b6947f3cbcd51a6b25f926991fd78b38d48
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
