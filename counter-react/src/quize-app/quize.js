import React, { useState } from 'react';

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which language is used in React?",
    options: ["Python", "JavaScript", "Java", "C++"],
    answer: "JavaScript",
  },
  {
    question: "Who developed React?",
    options: ["Google", "Microsoft", "Facebook", "Amazon"],
    answer: "Facebook",
  },
];

function Quize() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(quizData.length).fill(null));
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (option) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = option;
    setSelectedAnswers(updatedAnswers);
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        score += 1;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setShowScore(true);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Quiz App</h2>

      {!showScore ? (
        <>
          <div>
            <h3>Question {currentQuestion + 1}:</h3>
            <p>{quizData[currentQuestion].question}</p>

            {quizData[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedAnswers[currentQuestion] === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px' }}>
            <button onClick={handlePrev} disabled={currentQuestion === 0}>Previous</button>
            <button onClick={handleNext} disabled={currentQuestion === quizData.length - 1}>Next</button>
            <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>Submit</button>
          </div>
        </>
      ) : (
        <div>
          <h3>Your Score: {calculateScore()} / {quizData.length}</h3>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}

export default Quize;
