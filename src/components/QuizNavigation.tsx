import React from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface QuizNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
  selectedAnswer: number | null;
  showAnswer: boolean;
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({
  currentQuestion,
  totalQuestions,
  onNext,
  onPrev,
  onSubmit,
  selectedAnswer,
  showAnswer
}) => {
  const isLastQuestion = currentQuestion === totalQuestions - 1;
  
  return (
    <div className="flex justify-between items-center mt-8">
      <button
        onClick={onPrev}
        disabled={currentQuestion === 0}
        className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${
          currentQuestion === 0
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        <ArrowLeft size={18} className="mr-1" />
        Previous
      </button>
      
      <div className="text-gray-600 font-medium">
        Question {currentQuestion + 1} of {totalQuestions}
      </div>
      
      {!isLastQuestion ? (
        <button
          onClick={onNext}
          disabled={selectedAnswer === null || !showAnswer}
          className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${
            selectedAnswer === null || !showAnswer
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          Next
          <ArrowRight size={18} className="ml-1" />
        </button>
      ) : (
        <button
          onClick={onSubmit}
          disabled={selectedAnswer === null || !showAnswer}
          className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${
            selectedAnswer === null || !showAnswer
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          Finish Quiz
          <Check size={18} className="ml-1" />
        </button>
      )}
    </div>
  );
};

export default QuizNavigation;
