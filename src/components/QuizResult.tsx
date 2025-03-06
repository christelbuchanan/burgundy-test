import React from 'react';
import { Question } from '../types';
import { GlassWater, Award, RefreshCw } from 'lucide-react';

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  questions: Question[];
  userAnswers: number[];
  onRestart: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ 
  score, 
  totalQuestions, 
  questions, 
  userAnswers,
  onRestart
}) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getWineExpertTitle = (percentage: number) => {
    if (percentage >= 90) return "Grand Cru Connoisseur";
    if (percentage >= 80) return "Premier Cru Enthusiast";
    if (percentage >= 70) return "Village Level Expert";
    if (percentage >= 60) return "Regional Specialist";
    if (percentage >= 50) return "Burgundy Apprentice";
    return "Wine Novice";
  };

  const getWineMessage = (percentage: number) => {
    if (percentage >= 90) return "You have an exceptional palate and knowledge of Burgundy's finest vintages!";
    if (percentage >= 80) return "Your understanding of Burgundy wines is impressive - almost sommelier level!";
    if (percentage >= 70) return "You clearly know your Burgundy wines better than most enthusiasts!";
    if (percentage >= 60) return "You have a solid foundation of Burgundy wine knowledge!";
    if (percentage >= 50) return "You're on your way to becoming a true Burgundy aficionado!";
    return "There's a world of Burgundy wines waiting for you to discover!";
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full mx-auto animate-fadeIn">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-red-50 rounded-full mb-4">
          {percentage >= 70 ? (
            <Award className="text-red-600" size={40} />
          ) : (
            <GlassWater className="text-red-600" size={40} />
          )}
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
        <p className="text-gray-600">Your Burgundy wine knowledge score:</p>
        <div className="mt-4 mb-2">
          <span className="text-4xl font-bold text-red-700">{score}</span>
          <span className="text-xl text-gray-700">/{totalQuestions}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div 
            className="bg-gradient-to-r from-red-500 to-purple-600 h-4 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <h3 className="text-xl font-semibold text-purple-800 mb-2">
          {getWineExpertTitle(percentage)}
        </h3>
        <p className="text-gray-700">{getWineMessage(percentage)}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Question Summary</h3>
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div key={index} className="flex items-start">
              <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                userAnswers[index] === question.correctAnswer 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}>
                {userAnswers[index] === question.correctAnswer ? '✓' : '✗'}
              </div>
              <div>
                <p className="text-gray-800 font-medium">{question.question}</p>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-medium">Your answer:</span> {question.options[userAnswers[index]]}
                </p>
                {userAnswers[index] !== question.correctAnswer && (
                  <p className="text-sm text-green-600 mt-1">
                    <span className="font-medium">Correct answer:</span> {question.options[question.correctAnswer]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onRestart}
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300"
        >
          <RefreshCw size={18} className="mr-2" />
          Try Again
        </button>
      </div>
    </div>
  );
};

export default QuizResult;
