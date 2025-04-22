
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
  "Licenciatura en Psicología",
  "Licenciatura en Relaciones Públicas",
  "Licenciatura en Comunicación y Periodismo",
  "Licenciatura en Diseño Gráfico",
  "Licenciatura en Ciencias de la Educación",
  "Licenciatura en Gestión Bancaria y Financiera",
  "Ingeniería Industrial",
  "Licenciatura en Comercio Internacional",
  "Ingeniería de Sistemas",
  "Licenciatura en Recursos Humanos",
  "Licenciatura en Gastronomía",
  "Licenciatura en Seguridad Ocupacional"
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
          <a href="https://uip.edu.pa/" className="text-sm font-medium text-gray-700 hover:text-uip-blue transition-colors">
            Inicio
          </a>
          <a href="https://uip.edu.pa/carreras/" className="text-sm font-medium text-gray-700 hover:text-uip-blue transition-colors">
            Carreras
          </a>
          <a href="https://uip.edu.pa/sobre-uip/" className="text-sm font-medium text-gray-700 hover:text-uip-blue transition-colors">
            Sobre UIP
          </a>
          <a href="https://uip.edu.pa/contacto/" className="text-sm font-medium text-gray-700 hover:text-uip-blue transition-colors">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
