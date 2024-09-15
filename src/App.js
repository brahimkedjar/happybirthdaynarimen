import React, { useState } from "react";
import "./App.css"; // Import custom CSS for animations
import Question from "./Question";
import HappyBirthday from "./HappyBirthday";

const App = () => {
  const questions = [
    {
      question: "Marhbaaa bikk doctora ta3naa! First question: Where did we have our first meet? If you don’t get it right, you won't continue.",
      correctAnswer: "facebook"
    },
    {
      question: "Chatora ay sa7a in which year?",
      correctAnswer: "2018"
    },
    {
      question: "Braavvooooooo! Sa7a golili what is the name of our favorite book?",
      correctAnswer: "it starts with us"
    },
    {
      question: "Harba harba hhhhhh! Saha, golili tcho what is my birthday? Write it as day/month/year.",
      correctAnswer: "18/08/1999"
    },
    {
      question: "Kont hasbek nsitiii hhhh chatoraaa! Okii, golili place les tfahemna natlagaw fiha in the future inchallah.",
      correctAnswer: "germany"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null); // To show heart status
  const [finished, setFinished] = useState(false);

  const handleAnswer = (userAnswer) => {
    if (userAnswer.toLowerCase() === questions[currentQuestion].correctAnswer.toLowerCase()) {
      setIsCorrect(true);
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setIsCorrect(null);
        } else {
          setFinished(true);
        }
      }, 3000); // 3-second delay before moving to the next question
    } else {
      setIsCorrect(false);
    }
  };

  if (finished) {
    return <HappyBirthday />;
  }

  return (
    <div className="App">
      <h1 className="quiz-title">Test Of Dr. Narimen</h1>
      <Question
        question={questions[currentQuestion].question}
        handleAnswer={handleAnswer}
      />
      {isCorrect !== null && (
        <div className="feedback">
          {isCorrect ? (
            <div className="correct-feedback">
              <img src="/happy-heart.png" alt="Happy Heart" className="heart happy-heart" />
              <p className="correct-text">Correct! Moving to next question...</p>
            </div>
          ) : (
            <div className="wrong-feedback">
              <img src="/broken-heart.png" alt="Broken Heart" className="heart broken-heart" />
              <p className="wrong-text">wrongg answeerrrr dabaa -_-.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
