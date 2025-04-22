
import React from 'react';
import { GraduationCap } from 'lucide-react';
import { carreras } from '@/lib/carreras';

const navLinks = [
  { label: "Inicio", url: "https://uip.edu.pa/" },
  { label: "Carreras", url: "https://uip.edu.pa/carreras/" },
  { label: "Sobre UIP", url: "https://uip.edu.pa/sobre-nosotros/" },
  { label: "Contacto", url: "https://uip.edu.pa/contacto/" },
];

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="https://uip.edu.pa/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-uip-blue" />
            <div>
              <h1 className="text-xl font-bold text-uip-blue">UIP</h1>
              <p className="text-xs text-gray-600">Universidad Interamericana de Panamá</p>
            </div>
          </a>
        </div>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.url}
              className="text-sm font-medium text-gray-700 hover:text-uip-blue transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
          {/* Menú desplegable de carreras (muestra hasta 4, el resto en "Ver más...") */}
          <div className="relative group">
            <button className="text-sm font-medium text-gray-700 hover:text-uip-blue transition-colors focus:outline-none">
              Carreras Ideales
            </button>
            <div className="absolute z-50 left-0 mt-2 bg-white border rounded-md shadow-lg min-w-[16rem] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-150">
              <ul className="py-2">
                {carreras.slice(0, 6).map((carrera) => (
                  <li key={carrera.nombre}>
                    <a 
                      href={carrera.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:bg-uip-blue/10 hover:text-uip-blue text-sm"
                    >
                      {carrera.nombre}
                    </a>
                  </li>
                ))}
                {carreras.length > 6 && (
                  <li>
                    <a 
                      href="https://uip.edu.pa/carreras/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block px-4 py-2 text-gray-700 font-semibold hover:bg-uip-blue/20 text-center"
                    >
                      Ver todas las carreras...
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
