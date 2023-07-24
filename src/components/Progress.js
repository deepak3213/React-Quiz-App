import React from "react";
import { useQuiz } from "../QuizContext";

export default function Progress() {
  const { numQuestions, index, points, maxPossiblePoint, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>
          {points}/{maxPossiblePoint}
        </strong>
      </p>
    </header>
  );
}
