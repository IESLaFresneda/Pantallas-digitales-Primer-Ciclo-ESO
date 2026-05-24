export interface StatItem {
  id: string;
  percentage: string;
  title: string;
  description: string;
  badge: "alerta" | "riesgo" | "informacion" | "positivo";
}

export interface PautaItem {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  iconName: string;
  keyPoints: string[];
  recommendation: string;
  colorClass: string;
}

export interface ScheduleEvent {
  id: string;
  timeSlot: string;
  title: string;
  recommendation: string;
  iconName: string;
  status: "sin-pantallas" | "restringido" | "libre";
  details: string;
}

export interface CaseStudy {
  id: string;
  problem: string;
  scenario: string;
  options: {
    text: string;
    feedback: string;
    isRecommended: boolean;
  }[];
  expertAdvice: string;
}

export interface ReflectionQuestion {
  id: string;
  question: string;
  options: string[];
  expertCommentary: string[];
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}
