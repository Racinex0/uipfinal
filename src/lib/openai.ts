
import { CareerRecommendation, FormValues } from "@/types";
import { toast } from "sonner";

// This is a mock implementation that would be replaced with actual OpenAI API calls
// In a production environment, this would be an API call to your backend

export async function getCareerRecommendations(
  formData: FormValues
): Promise<CareerRecommendation[]> {
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // In production, you would make a POST request to the backend like:
    // const response = await fetch('/api/career-advice', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    // return await response.json();
    
    // For demo purposes, we'll return mock data based on interests
    const interests = formData.interests.toLowerCase();
    const skills = formData.skills.toLowerCase();
    
    const recommendations: CareerRecommendation[] = [];
    
    if (interests.includes("tecnología") || 
        interests.includes("computadoras") || 
        interests.includes("programación") ||
        skills.includes("programación") ||
        skills.includes("lógica")) {
      recommendations.push({
        name: "Ingeniería en Sistemas Computacionales",
        description: "Forma profesionales capaces de desarrollar sistemas de información y software para resolver problemas en diferentes áreas de la organización.",
        reasons: [
          "Tu interés por la tecnología y la programación",
          "Tus habilidades analíticas y lógicas",
          "Oportunidades laborales crecientes en el sector tecnológico"
        ],
        match: 95
      });
    }
    
    if (interests.includes("negocios") || 
        interests.includes("empresa") || 
        interests.includes("administración") ||
        skills.includes("organización") ||
        skills.includes("liderazgo")) {
      recommendations.push({
        name: "Licenciatura en Administración de Empresas",
        description: "Prepara profesionales con conocimientos y habilidades para la gestión efectiva de organizaciones en un entorno global y competitivo.",
        reasons: [
          "Tu interés en los negocios y la administración",
          "Tus habilidades de liderazgo y organización",
          "Versatilidad para trabajar en diversos sectores empresariales"
        ],
        match: 88
      });
    }
    
    if (interests.includes("marketing") || 
        interests.includes("publicidad") || 
        interests.includes("redes sociales") ||
        skills.includes("creatividad") ||
        skills.includes("comunicación")) {
      recommendations.push({
        name: "Licenciatura en Mercadeo y Publicidad",
        description: "Forma profesionales capaces de crear, implementar y evaluar estrategias de marketing y campañas publicitarias efectivas.",
        reasons: [
          "Tu interés en marketing y medios digitales",
          "Tus habilidades creativas y comunicativas",
          "La creciente demanda de especialistas en marketing digital"
        ],
        match: 85
      });
    }
    
    if (interests.includes("salud") || 
        interests.includes("medicina") || 
        interests.includes("ayudar a personas") ||
        skills.includes("empatía") ||
        skills.includes("ciencias")) {
      recommendations.push({
        name: "Licenciatura en Enfermería",
        description: "Prepara profesionales de la salud comprometidos con el cuidado integral del paciente y la promoción de la salud en la comunidad.",
        reasons: [
          "Tu interés en el área de la salud",
          "Tus habilidades de empatía y vocación de servicio",
          "Alta demanda de profesionales de enfermería"
        ],
        match: 78
      });
    }
    
    if (interests.includes("leyes") || 
        interests.includes("derecho") || 
        interests.includes("justicia") ||
        skills.includes("argumentación") ||
        skills.includes("análisis")) {
      recommendations.push({
        name: "Licenciatura en Derecho y Ciencias Políticas",
        description: "Forma profesionales con sólidos conocimientos jurídicos y competencias para el ejercicio ético de la abogacía.",
        reasons: [
          "Tu interés en la justicia y el marco legal",
          "Tus habilidades de argumentación y análisis",
          "Amplias posibilidades de especialización"
        ],
        match: 82
      });
    }
    
    if (interests.includes("turismo") || 
        interests.includes("viajes") || 
        interests.includes("idiomas") ||
        skills.includes("idiomas") ||
        skills.includes("atención al cliente")) {
      recommendations.push({
        name: "Licenciatura en Hotelería y Turismo",
        description: "Prepara profesionales capaces de gestionar empresas turísticas y hoteleras con un enfoque en la calidad del servicio y la sostenibilidad.",
        reasons: [
          "Tu interés en viajes y conocer diferentes culturas",
          "Tus habilidades en idiomas y atención al cliente",
          "Panamá es un importante destino turístico con oportunidades laborales"
        ],
        match: 90
      });
    }
    
    // Default recommendation if no matches or empty form
    if (recommendations.length === 0) {
      recommendations.push({
        name: "Programa de Orientación Vocacional Personalizado",
        description: "Basado en tu perfil, te recomendamos solicitar una orientación vocacional personalizada en la Universidad Interamericana de Panamá.",
        reasons: [
          "Necesitamos más información sobre tus intereses y habilidades",
          "Una evaluación personalizada te ayudará a descubrir tu vocación",
          "La UIP ofrece asesoramiento especializado para futuros estudiantes"
        ],
        match: 65
      });
    }
    
    // Sort by match percentage
    return recommendations.sort((a, b) => (b.match || 0) - (a.match || 0));
    
  } catch (error) {
    console.error("Error fetching career recommendations:", error);
    toast.error("Error al obtener recomendaciones. Por favor intenta nuevamente.");
    return [];
  }
}
