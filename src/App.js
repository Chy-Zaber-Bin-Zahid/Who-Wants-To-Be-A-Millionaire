import React, { useState, useEffect } from "react";
import Icon from "./components/icon";
import Question from "./components/question";
import Prize from "./components/prize";
import Timer from "./components/timer";
import Start from "./components/start";
import ThreeOption from "./components/threeOption";
import Popup from "./components/popup";

function App() {
  const [start, setStart] = useState("/sound/intro.mp3");
  const [questionStart, setQuestionStart] = useState(null);
  const [timer, setTimer] = useState(60);
  const [random, setRandom] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [clickedBtn, setClickedBtn] = useState(null);
  const [question, setQuestion] = useState({});
  const [rightWrong, setRightWrong] = useState(null);
  const [answer, setAnswer] = useState([]);
  const [correctShow, setCorrectShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [removeTag, setRemoveTag] = useState(null);
  const [addClass, setAddClass] = useState("");
  const [threeDisabled, setThreeDisabled] = useState(false);

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

  useEffect(() => {
    if (addClass !== "") {
      const buttons = document.querySelectorAll(".answer");
      buttons.forEach((button, index) => {
        if (index === answer.indexOf(question[random].correct_answer)) {
          console.log(index, answer.indexOf(question[random].correct_answer));
          button.classList.add("correct");
        }
      });
    } else {
      const buttons = document.querySelectorAll(".answer");
      buttons.forEach((button) => {
        button.classList.remove("correct");
      });
    }
  }, [addClass,question,answer]);

  return (
    <>
      <div className="app">
        <div className="left-column">
          <Popup timer={timer} start={start} />
          <Icon />
          <Timer
            timer={timer}
            setTimer={setTimer}
            start={start}
            setStart={setStart}
            question={question}
            setQuestion={setQuestion}
            random={random}
            clickedBtn={clickedBtn}
            setRightWrong={setRightWrong}
            answer={answer}
            setCorrectShow={setCorrectShow}
            setRemoveTag={setRemoveTag}
            setDisabled={setDisabled}
            setAddClass={setAddClass}
          />
          <Question
            questionStart={questionStart}
            setQuestionStart={setQuestionStart}
            random={random}
            setRandom={setRandom}
            setTimer={setTimer}
            setStart={setStart}
            disabled={disabled}
            setDisabled={setDisabled}
            clickedBtn={clickedBtn}
            setClickedBtn={setClickedBtn}
            question={question}
            setQuestion={setQuestion}
            answer={answer}
            setAnswer={setAnswer}
            rightWrong={rightWrong}
            correctShow={correctShow}
          />
        </div>
        <div className="right-column">
          <Prize
            correctShow={correctShow}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            removeTag={removeTag}
          />
          <div className="option">
            <ThreeOption setThreeDisabled={setThreeDisabled} threeDisabled={threeDisabled} />
            <Start
              start={start}
              setStart={setStart}
              setQuestionStart={setQuestionStart}
              setTimer={setTimer}
              setDisabled={setDisabled}
              setClickedBtn={setClickedBtn}
              setRightWrong={setRightWrong}
              setCorrectShow={setCorrectShow}
              setCurrentIndex={setCurrentIndex}
              setRemoveTag={setRemoveTag}
              setAddClass={setAddClass}
            />
            <p className="creator">Made By Chowdhury Zaber Bin Zahid | 2023</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
