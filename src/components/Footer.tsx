
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-uip-navy text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Universidad Interamericana de Panamá</h3>
            <p className="text-sm text-gray-300">
              La UIP es una universidad comprometida con la formación integral de profesionales
              capaces de contribuir al desarrollo de Panamá y la región.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://uip.edu.pa/admision/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Admisiones
                </a>
              </li>
              <li>
                <a href="https://uip.edu.pa/carreras/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Programas Académicos
                </a>
              </li>
              <li>
                <a href="https://campusvirtual.uip.edu.pa/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Campus Virtual
                </a>
              </li>
              <li>
                <a href="https://biblioteca.uip.edu.pa/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Biblioteca
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <address className="text-sm text-gray-300 not-italic">
              <p>Avenida Ricardo J. Alfaro</p>
              <p>Ciudad de Panamá, Panamá</p>
              <p className="mt-2">Teléfono: <a href="tel:+5072408-5100" className="hover:text-white transition-colors">+507 2408-5100</a></p>
              <p>Email: <a href="mailto:info@uip.edu.pa" className="hover:text-white transition-colors">info@uip.edu.pa</a></p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Universidad Interamericana de Panamá. Todos los derechos reservados.</p>
          <p className="mt-1">Desarrollado como proyecto académico.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
