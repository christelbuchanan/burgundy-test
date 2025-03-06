import React from 'react';
import { Question } from '../types';
import { Wine } from 'lucide-react';

interface QuizCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
  showAnswer: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  question, 
  selectedAnswer, 
  onSelectAnswer,
  showAnswer
}) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full mx-auto transition-all duration-500 ease-in-out transform hover:shadow-2xl">
      <div className="flex items-center mb-4">
        <Wine className="text-red-700 mr-2" size={24} />
        <h2 className="text-xl font-semibold text-gray-800">{question.question}</h2>
      </div>
      
      <div className="space-y-3 mt-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showAnswer && onSelectAnswer(index)}
            disabled={showAnswer}
            className={`w-full text-left p-4 rounded-md transition-all duration-300 border ${
              showAnswer
                ? index === question.correctAnswer
                  ? 'bg-green-100 border-green-500 text-green-800'
                  : selectedAnswer === index
                  ? 'bg-red-100 border-red-500 text-red-800'
                  : 'bg-gray-50 border-gray-200 text-gray-700'
                : selectedAnswer === index
                ? 'bg-purple-100 border-purple-500 text-purple-800'
                : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-purple-50 hover:border-purple-300'
            }`}
          >
            <div className="flex items-center">
              <span className={`inline-flex items-center justify-center h-6 w-6 rounded-full mr-3 ${
                showAnswer
                  ? index === question.correctAnswer
                    ? 'bg-green-500 text-white'
                    : selectedAnswer === index
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-300 text-gray-700'
                  : selectedAnswer === index
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-300 text-gray-700'
              }`}>
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </div>
          </button>
        ))}
      </div>

      {showAnswer && (
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
          <h3 className="font-medium text-amber-800 mb-2">Explanation:</h3>
          <p className="text-amber-700">{question.explanation}</p>
          
          {question.funFact && (
            <div className="mt-3 pt-3 border-t border-amber-200">
              <p className="text-amber-800 italic">
                <span className="font-medium">Fun Fact:</span> {question.funFact}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizCard;
