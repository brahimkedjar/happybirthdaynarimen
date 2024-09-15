import React, { useState } from "react";

const Question = ({ question, handleAnswer }) => {
  const [answer, setAnswer] = useState("");

  const submitAnswer = (e) => {
    e.preventDefault();
    handleAnswer(answer);
    setAnswer("");
  };

  return (
    <div className="question-container">
      <p>{question}</p>
      <form onSubmit={submitAnswer}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your answer"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Question;
