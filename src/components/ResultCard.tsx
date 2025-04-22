
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ExternalLink } from 'lucide-react';
import { CareerRecommendation } from '@/types';

interface ResultCardProps {
  recommendation: CareerRecommendation;
  index: number;
}

const getCareerLink = (careerName: string) => {
  // Map specific career names to their correct URLs on the UIP website
  const careerUrlMap: Record<string, string> = {
    "Licenciatura en Administración de Empresas": "administracion-de-empresas",
    "Licenciatura en Contabilidad": "contabilidad", 
    "Licenciatura en Mercadeo y Publicidad": "mercadeo-y-publicidad",
    "Licenciatura en Hotelería y Turismo": "hoteleria-y-turismo", 
    "Licenciatura en Enfermería": "enfermeria",
    "Licenciatura en Derecho y Ciencias Políticas": "derecho-y-ciencias-politicas",
    "Ingeniería en Sistemas Computacionales": "ingenieria-en-sistemas-computacionales",
    "Licenciatura en Psicología": "psicologia",
    "Licenciatura en Relaciones Públicas": "relaciones-publicas",
    "Licenciatura en Comunicación y Periodismo": "comunicacion-y-periodismo",
    "Licenciatura en Diseño Gráfico": "diseno-grafico",
    "Licenciatura en Ciencias de la Educación": "ciencias-de-la-educacion",
    "Licenciatura en Gestión Bancaria y Financiera": "gestion-bancaria-y-financiera",
    "Ingeniería Industrial": "ingenieria-industrial",
    "Licenciatura en Comercio Internacional": "comercio-internacional",
    "Ingeniería de Sistemas": "ingenieria-de-sistemas",
    "Licenciatura en Recursos Humanos": "recursos-humanos",
    "Licenciatura en Gastronomía": "gastronomia",
    "Licenciatura en Seguridad Ocupacional": "seguridad-ocupacional",
    "Programa de Orientación Vocacional Personalizado": "admisiones"
  };

  // Use the mapped URL if it exists, otherwise fall back to the default URL
  const slug = careerUrlMap[careerName] || "carreras";
  return `https://uip.edu.pa/carreras/${slug}/`;
};

const ResultCard: React.FC<ResultCardProps> = ({ recommendation, index }) => {
  const { name, description, reasons, match } = recommendation;
  const isTopMatch = index === 0;
  
  // For the apply link, use the admissions page for all careers
  const applyLink = "https://uip.edu.pa/admisiones/";

  return (
    <Card className={`w-full overflow-hidden card-shadow ${isTopMatch ? 'border-uip-blue border-2' : ''}`}>
      <CardHeader className={`${isTopMatch ? 'bg-gradient-to-r from-uip-blue to-uip-navy text-white' : 'bg-gray-50'}`}>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className={`text-xl ${!isTopMatch ? 'text-uip-navy' : ''}`}>{name}</CardTitle>
            <CardDescription className={isTopMatch ? 'text-white/80' : 'text-gray-600'}>
              Universidad Interamericana de Panamá
            </CardDescription>
          </div>
          {match && (
            <Badge className={`${isTopMatch ? 'bg-white text-uip-blue' : 'bg-uip-blue text-white'} text-sm font-semibold`}>
              {match}% de coincidencia
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="mt-6">
          <h4 className="font-medium text-uip-blue mb-2">¿Por qué esta carrera es para ti?</h4>
          <ul className="space-y-2">
            {reasons.map((reason, idx) => (
              <li key={idx} className="flex gap-2 items-start">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4 pb-4 bg-gray-50">
        <a
          href={getCareerLink(name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 mr-2"
        >
          <Button variant="outline" className="w-full flex items-center justify-center gap-2 text-uip-blue border-uip-blue hover:bg-uip-blue/10">
            Más Información
            <ExternalLink className="h-4 w-4" />
          </Button>
        </a>
        <a
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 ml-2"
        >
          <Button className="w-full flex items-center justify-center gap-2 bg-uip-blue hover:bg-uip-blue/90">
            Aplicar a esta Carrera
            <ExternalLink className="h-4 w-4" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
