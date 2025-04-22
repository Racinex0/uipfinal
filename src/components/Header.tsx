
import React from 'react';
import { GraduationCap } from 'lucide-react';

const carreras = [
  "Licenciatura en Administración de Empresas",
  "Licenciatura en Contabilidad",
  "Licenciatura en Mercadeo y Publicidad",
  "Licenciatura en Hotelería y Turismo",
  "Licenciatura en Enfermería",
  "Licenciatura en Derecho y Ciencias Políticas",
  "Ingeniería en Sistemas Computacionales",
];

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-uip-blue" />
          <div>
            <h1 className="text-xl font-bold text-uip-blue">UIP</h1>
            <p className="text-xs text-gray-600">Universidad Interamericana de Panamá</p>
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          {carreras.map((carrera) => (
            <a
              key={carrera}
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-uip-blue transition-colors"
            >
              {carrera}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

