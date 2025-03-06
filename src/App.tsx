import React, { useState, useEffect } from 'react';
import { Wine } from 'lucide-react';
import { quizData } from './data/quizData';
import { QuizState } from './types';
import QuizCard from './components/QuizCard';
import ProgressBar from './components/ProgressBar';
import QuizNavigation from './components/QuizNavigation';
import QuizResult from './components/QuizResult';
import QuizIntro from './components/QuizIntro';

function App() {
  const initialState: QuizState = {
    currentQuestionIndex: 0,
    score: 0,
    showResult: false,
    answers: Array(quizData.length).fill(-1),
    quizStarted: false,
    quizCompleted: false
  };

  const [state, setState] = useState<QuizState>(initialState);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [fadeIn, setFadeIn] = useState<boolean>(true);

  const handleStartQuiz = () => {
    setState(prev => ({ ...prev, quizStarted: true }));
  };

  const handleSelectAnswer = (answerIndex: number) => {
    if (showAnswer) return;
    
    const newAnswers = [...state.answers];
    newAnswers[state.currentQuestionIndex] = answerIndex;
    
    setState(prev => ({
      ...prev,
      answers: newAnswers
    }));

    // Show answer explanation after selection
    setShowAnswer(true);

    // Update score if answer is correct
    if (answerIndex === quizData[state.currentQuestionIndex].correctAnswer) {
      setState(prev => ({
        ...prev,
        score: prev.score + 1
      }));
    }
  };

  const handleNextQuestion = () => {
    if (state.currentQuestionIndex < quizData.length - 1) {
      setFadeIn(false);
      setTimeout(() => {
        setState(prev => ({
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1
        }));
        setShowAnswer(false);
        setFadeIn(true);
      }, 300);
    }
  };

  const handlePrevQuestion = () => {
    if (state.currentQuestionIndex > 0) {
      setFadeIn(false);
      setTimeout(() => {
        setState(prev => ({
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex - 1
        }));
        setShowAnswer(state.answers[state.currentQuestionIndex - 1] !== -1);
        setFadeIn(true);
      }, 300);
    }
  };

  const handleSubmitQuiz = () => {
    setState(prev => ({
      ...prev,
      showResult: true,
      quizCompleted: true
    }));
  };

  const handleRestartQuiz = () => {
    setState(initialState);
    setState(prev => ({ ...prev, quizStarted: true }));
    setShowAnswer(false);
  };

  useEffect(() => {
    // Check if this question has already been answered
    if (state.answers[state.currentQuestionIndex] !== -1) {
      setShowAnswer(true);
    } else {
      setShowAnswer(false);
    }
  }, [state.currentQuestionIndex, state.answers]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-red-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <div className="flex justify-center items-center mb-4">
            <Wine className="text-red-700 mr-2" size={28} />
            <h1 className="text-3xl font-bold text-gray-800">Burgundy Wine Quiz</h1>
          </div>
          <p className="text-gray-600 italic">Test your knowledge of legendary vintages from 1948-1990</p>
        </header>

        <main>
          {!state.quizStarted ? (
            <QuizIntro onStartQuiz={handleStartQuiz} />
          ) : state.showResult ? (
            <QuizResult 
              score={state.score}
              totalQuestions={quizData.length}
              questions={quizData}
              userAnswers={state.answers}
              onRestart={handleRestartQuiz}
            />
          ) : (
            <div className={`transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
              <ProgressBar 
                currentQuestion={state.currentQuestionIndex + 1} 
                totalQuestions={quizData.length} 
              />
              
              <QuizCard 
                question={quizData[state.currentQuestionIndex]}
                selectedAnswer={state.answers[state.currentQuestionIndex] !== -1 ? state.answers[state.currentQuestionIndex] : null}
                onSelectAnswer={handleSelectAnswer}
                showAnswer={showAnswer}
              />
              
              <QuizNavigation 
                currentQuestion={state.currentQuestionIndex}
                totalQuestions={quizData.length}
                onNext={handleNextQuestion}
                onPrev={handlePrevQuestion}
                onSubmit={handleSubmitQuiz}
                selectedAnswer={state.answers[state.currentQuestionIndex] !== -1 ? state.answers[state.currentQuestionIndex] : null}
                showAnswer={showAnswer}
              />
            </div>
          )}
        </main>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Burgundy Wine Enthusiasts</p>
          <p className="mt-1 italic">"In vino veritas, in aqua sanitas"</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
