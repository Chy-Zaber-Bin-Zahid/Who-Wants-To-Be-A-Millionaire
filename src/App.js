import React, { useState, useEffect } from "react";
import Icon from "./components/icon";
import Question from "./components/question";
import Prize from "./components/prize";
import Timer from "./components/timer";
import Option from "./components/option";

function App() {
  const [start, setStart] = useState("/sound/intro.mp3");

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
          <Timer start={start} setStart={setStart}/>
          <Question />
        </div>
        <div className="right-column">
          <Prize />
          <Option setStart={setStart} />
        </div>
      </div>
    </>
  );
}

export default App;
