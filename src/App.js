import React, { useState, useEffect } from "react";
import Icon from "./components/icon";
import Question from "./components/question";
import Prize from "./components/prize";
import Timer from "./components/timer";
import Start from "./components/start";
import ThreeOption from "./components/threeOption";

function App() {
  const [start, setStart] = useState("/sound/intro.mp3");
  const [questionStart, setQuestionStart] = useState(null);
  const [timer, setTimer] = useState(60);
  const [random, setRandom] = useState(null);
  console.log(questionStart);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audio.play();
        setTimeout(() => {
          audio.pause();
          audio.currentTime = 0;
        }, 62000);
      } catch (error) {
        // console.error("An error occurred while playing audio:", error);
      }
    };

    const audio = new Audio(start);
    playAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [start]);

  return (
    <>
      <div className="app">
        <div className="left-column">
          <Icon />
          <Timer
            timer={timer}
            setTimer={setTimer}
            start={start}
            setStart={setStart}
          />
          <Question
            questionStart={questionStart}
            setQuestionStart={setQuestionStart}
            random={random}
            setRandom={setRandom}
          />
        </div>
        <div className="right-column">
          <Prize />
          <div className="option">
            <ThreeOption />
            <Start
              start={start}
              setStart={setStart}
              setQuestionStart={setQuestionStart}
              setTimer={setTimer}
            />
            <p className="creator">Made By Chowdhury Zaber Bin Zahid | 2023</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
