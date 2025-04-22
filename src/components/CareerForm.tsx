
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from '@/types';

interface CareerFormProps {
  onSubmit: (data: FormValues) => void;
  isLoading: boolean;
}

const CareerForm: React.FC<CareerFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<FormValues>({
    interests: '',
    skills: '',
    goals: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-3xl card-shadow">
      <CardHeader className="bg-gradient-to-r from-uip-blue/90 to-uip-navy text-white rounded-t-lg">
        <CardTitle className="text-xl md:text-2xl">Descubre tu Carrera Ideal</CardTitle>
        <CardDescription className="text-white/80">
          Cuéntanos sobre ti y te ayudaremos a encontrar tu camino académico en la UIP
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="interests" className="text-base font-medium">
              ¿Qué temas, actividades o áreas te interesan?
            </Label>
            <Textarea
              id="interests"
              name="interests"
              placeholder="Ej: Me gusta la tecnología, el diseño gráfico y la literatura..."
              className="min-h-24 input-focus"
              required
              value={formData.interests}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills" className="text-base font-medium">
              ¿Cuáles son tus principales habilidades o fortalezas?
            </Label>
            <Textarea
              id="skills"
              name="skills"
              placeholder="Ej: Soy bueno en matemáticas, tengo facilidad para los idiomas..."
              className="min-h-24 input-focus"
              required
              value={formData.skills}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="goals" className="text-base font-medium">
              ¿Cuáles son tus metas profesionales o aspiraciones?
            </Label>
            <Textarea
              id="goals"
              name="goals"
              placeholder="Ej: Quiero crear mi propia empresa, trabajar en proyectos internacionales..."
              className="min-h-24 input-focus"
              required
              value={formData.goals}
              onChange={handleChange}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-uip-blue hover:bg-uip-blue/90 text-white font-medium py-2.5 rounded-md"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analizando...
              </>
            ) : (
              'Recibir Recomendaciones'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CareerForm;
