import { useEffect, useState } from "react";

export default function Timer({
  timer,
  setTimer,
  start,
  setStart,
  question,
  setQuestion,
  random,
  clickedBtn,
  setRightWrong,
  answer,
  setCorrectShow,
  setRemoveTag,
  setDisabled,
}) {
  useEffect(() => {
    if (start !== "/sound/intro.mp3" && timer !== 0) {
      const timerInterval = setInterval(() => {
        setTimer((prevCountdown) => prevCountdown - 1);
      }, 1000);

      // Clean up the interval when the component unmounts
      return () => {
        clearInterval(timerInterval);
      };
    } else if (timer === 0 && start === "/sound/background.mp3") {
      setDisabled((d) => !d);
      setStart("/sound/wrong.mp3");
    } else if (timer === 0 && start === "/sound/clicked.mp3") {
      if (question[random].correct_answer === answer[clickedBtn]) {
        setRightWrong(true);
        setStart("/sound/right.mp3");
        setCorrectShow(true);
        setRemoveTag(true);
      } else {
        
        setRightWrong(false);
        setStart("/sound/wrong.mp3");
      }
    }
  }, [timer, start]);

  return (
    <div className="timer">
      <span className={timer > 9 ? "count-down" : "count-down count-bellow"}>
        {timer}
      </span>
    </div>
  );
}
