import React from 'react';
import { Wine, GlassWater, Grape } from 'lucide-react';

interface QuizIntroProps {
  onStartQuiz: () => void;
}

const QuizIntro: React.FC<QuizIntroProps> = ({ onStartQuiz }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full mx-auto animate-fadeIn">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-full blur opacity-70"></div>
            <div className="relative bg-white rounded-full p-4">
              <Wine className="text-red-700" size={48} />
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Burgundy Wine Quiz</h1>
        <p className="text-xl text-purple-700 italic mb-4">Vintage Exploration: 1948-1990</p>
        <p className="text-gray-600 mb-6">Test your knowledge of the legendary Burgundy wines from the golden era of 1948 to 1990.</p>
      </div>

      <div className="bg-red-50 rounded-lg p-6 mb-8">
        <h2 className="flex items-center text-xl font-semibold text-red-800 mb-4">
          <GlassWater className="mr-2" size={20} />
          What to Expect
        </h2>
        <ul className="space-y-3 text-red-700">
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-200 text-red-800 mr-2 mt-0.5 text-xs">✓</span>
            10 challenging questions about legendary Burgundy vintages
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-200 text-red-800 mr-2 mt-0.5 text-xs">✓</span>
            Fascinating wine facts and historical context
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-200 text-red-800 mr-2 mt-0.5 text-xs">✓</span>
            Discover what makes these vintages so special
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-200 text-red-800 mr-2 mt-0.5 text-xs">✓</span>
            Find out your Burgundy expertise level
          </li>
        </ul>
      </div>

      <div className="bg-purple-50 rounded-lg p-6 mb-8">
        <h2 className="flex items-center text-xl font-semibold text-purple-800 mb-3">
          <Grape className="mr-2" size={20} />
          Did You Know?
        </h2>
        <p className="text-purple-700 italic">
          "In Burgundy, one does not simply drink a vintage; one experiences a moment in history captured in a bottle."
        </p>
        <p className="text-purple-600 text-sm mt-2 text-right">— Ancient Burgundian Proverb (that we may have just made up)</p>
      </div>

      <div className="text-center">
        <button
          onClick={onStartQuiz}
          className="px-8 py-4 bg-gradient-to-r from-red-600 to-purple-600 text-white text-lg font-medium rounded-lg shadow-lg hover:from-red-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          Start the Wine Journey
        </button>
      </div>
    </div>
  );
};

export default QuizIntro;
