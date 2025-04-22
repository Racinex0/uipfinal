
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from 'lucide-react';
import { CareerRecommendation } from '@/types';

interface ResultCardProps {
  recommendation: CareerRecommendation;
  index: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ recommendation, index }) => {
  const { name, description, reasons, match } = recommendation;
  
  const isTopMatch = index === 0;
  
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
        <Button variant="outline" className="text-uip-blue border-uip-blue hover:bg-uip-blue/10">
          Más Información
        </Button>
        <Button className="bg-uip-blue hover:bg-uip-blue/90">
          Aplicar a esta Carrera
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
