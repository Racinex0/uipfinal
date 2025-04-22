
import React, { useState, useEffect } from 'react';
import { Toaster } from "sonner";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CareerForm from '@/components/CareerForm';
import ResultCard from '@/components/ResultCard';
import { CareerRecommendation, FormValues } from '@/types';
import { getCareerRecommendations } from '@/lib/openai';
import { BookOpen, GraduationCap, BarChart3 } from 'lucide-react';

const Index = () => {
  const [recommendations, setRecommendations] = useState<CareerRecommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
  const handleSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setHasSubmitted(true);
    
    try {
      const results = await getCareerRecommendations(data);
      setRecommendations(results);
      
      // Scroll to results after a short delay
      setTimeout(() => {
        const resultsSection = document.getElementById('results-section');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } catch (error) {
      console.error("Error getting recommendations:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-uip-lightblue to-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Descubre Tu Futuro Profesional
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Te ayudamos a encontrar la carrera perfecta en la Universidad Interamericana de Panamá
              que se alinee con tus intereses, habilidades y metas.
            </p>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="mx-auto w-16 h-16 bg-uip-blue/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-uip-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-uip-navy">Amplia Oferta Académica</h3>
                <p className="text-gray-600">
                  La UIP ofrece una variedad de programas académicos diseñados para satisfacer las demandas del mercado laboral.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="mx-auto w-16 h-16 bg-uip-blue/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-uip-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-uip-navy">Formación de Calidad</h3>
                <p className="text-gray-600">
                  Profesores experimentados y un enfoque práctico que te prepara para enfrentar los desafíos profesionales.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="mx-auto w-16 h-16 bg-uip-blue/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-uip-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-uip-navy">Oportunidades Laborales</h3>
                <p className="text-gray-600">
                  Conexiones con empresas y organizaciones que facilitan tu inserción en el mundo laboral después de graduarte.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-3 text-uip-navy">Encuentra Tu Carrera Ideal</h2>
            <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
              Completa el formulario a continuación para recibir recomendaciones personalizadas basadas en tu perfil.
            </p>
            
            <div className="flex justify-center">
              <CareerForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        {hasSubmitted && (
          <section id="results-section" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-3 text-center text-uip-navy">
                {isLoading ? 'Analizando tu perfil...' : 'Carreras Recomendadas para Ti'}
              </h2>
              <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
                {isLoading 
                  ? 'Estamos evaluando tus intereses, habilidades y metas para ofrecerte las mejores opciones...' 
                  : 'Basado en la información que proporcionaste, estas son las carreras que mejor se ajustan a tu perfil.'}
              </p>
              
              {isLoading ? (
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full border-4 border-uip-blue border-t-transparent animate-spin"></div>
                </div>
              ) : (
                <div className="space-y-8 max-w-4xl mx-auto">
                  {recommendations.map((recommendation, index) => (
                    <ResultCard 
                      key={`${recommendation.name}-${index}`} 
                      recommendation={recommendation} 
                      index={index} 
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="py-16 bg-uip-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para dar el siguiente paso?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Programa una visita al campus o habla con un asesor académico para obtener más información sobre nuestros programas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-uip-blue font-medium rounded-md hover:bg-gray-100 transition-colors">
                Agendar una Visita
              </button>
              <button className="px-6 py-3 bg-uip-navy text-white font-medium rounded-md hover:bg-uip-navy/90 transition-colors">
                Contactar a un Asesor
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
