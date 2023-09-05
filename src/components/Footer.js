import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importa los iconos de react-icons

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex items-center justify-around ${
        darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-neutral-200'
      }`}
    >
      <span className={`text-xs mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
        Hecho por Matias Arroyo
      </span>

      {/* Agrega iconos de GitHub y LinkedIn */}
      <a
        href="https://github.com/matiasarroyo1978/stock-dashboard"
        target="_blank"
        rel="noopener noreferrer"
        className={`mb-2 ${darkMode ? 'text-white' : 'text-black'}`}
      >
        <FaGithub size={20} />
      </a>

      <a
        href="https://www.linkedin.com/in/matias-arroyo19/"
        target="_blank"
        rel="noopener noreferrer"
        className={`mb-2 ${darkMode ? 'text-white' : 'text-black'}`}
      >
        <FaLinkedin size={20} />
      </a>
    </div>
  );
};

export default Footer;
