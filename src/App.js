import React from "react";
import Icon from "./components/icon";
import Question from "./components/question";
import Prize from "./components/prize";
import Timer from "./components/timer";

function App() {
  let audio = new Audio("/sound/intro.mp3")
  audio.play()

  return (
    <>
      <div className="app">
        <div className="left-column">
          <Icon />
          <Timer />
          <Question />
        </div>
        <div className="right-column">
          <Prize />
        </div>
      </div>
    </>
  );
}

export default App;
