import React, { useEffect } from "react";
import { useQuiz } from "../QuizContext";

export default function Timer() {
  const{dispatch,timeRemain} = useQuiz()
  const min = Math.floor(timeRemain / 60);
  const sec = timeRemain % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => {
        clearInterval(id);
        console.log('clean up')
      };
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {" "}
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}
