
export interface FormValues {
  interests: string;
  skills: string;
  goals: string;
}

export interface CareerRecommendation {
  name: string;
  description: string;
  reasons: string[];
  match?: number;
}

export interface ApiResponse {
  recommendations: CareerRecommendation[];
  error?: string;
}
