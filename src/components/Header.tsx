
import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-uip-blue" />
          <div>
            <h1 className="text-xl font-bold text-uip-blue">UIP Career Navigator</h1>
            <p className="text-xs text-gray-600">Universidad Interamericana de Panamá</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-uip-blue transition-colors">
            Inicio
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-uip-blue transition-colors">
            Carreras
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-uip-blue transition-colors">
            Sobre UIP
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-uip-blue transition-colors">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
