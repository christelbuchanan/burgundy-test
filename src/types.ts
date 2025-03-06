export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  funFact?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  showResult: boolean;
  answers: number[];
  quizStarted: boolean;
  quizCompleted: boolean;
}
