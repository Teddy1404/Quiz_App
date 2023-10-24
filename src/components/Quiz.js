import React, { useState } from "react";
import { QuizData } from "./QuizData.js";
import Result from "./Result.js";
const Quiz = () => {
  const [currentque, setCurrentQue] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [showresult, setShowresult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentque < QuizData.length - 1) {
      setCurrentQue(currentque + 1);
      setClicked(0);
    } else {
      setShowresult(true);
    }
  };
  const updateScore = () => {
    if (clicked === QuizData[currentque].answer) {
      setScore(score + 1);
    }
  };
  const resetAll = () => {
    setCurrentQue(0);
    setClicked(0);
    setScore(0);
    setShowresult(0);
  };
  return (
    <div>
      <p className="heading-txt">Quiz APP</p>
      <div className="container">
        {showresult ? (
          <Result
            score={score}
            totalscore={QuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">
                {currentque + 1}/{QuizData.length}.
              </span>
              <span id="question-txt">{QuizData[currentque].question}</span>
            </div>
            <div className="option-container">
              {QuizData[currentque].options.map((option, i) => {
                return (
                  <button
                    className={`option-btn ${
                      clicked === i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => setClicked(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
