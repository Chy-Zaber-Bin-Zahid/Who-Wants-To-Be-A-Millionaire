import React, { useState, useEffect } from "react";
import Icon from "./components/icon";
import Question from "./components/question";
import Prize from "./components/prize";
import Timer from "./components/timer";
import Start from "./components/start";
import ThreeOption from "./components/threeOption";
import Popup from "./components/popup";
import Audience from "./components/audience";
import Phone from "./components/phone";

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
  const [dollar, setDollar] = useState("0 $");
  const [leave, setLeave] = useState(false);
  const [fiftyFiftyDisabled, setFiftyFiftyDisabled] = useState(true);
  const [fiftyFifty, setFiftyFifty] = useState(false);
  const [deadFiftyFifty, setDeadFiftyFifty] = useState(null);
  const [percentages, setPercentages] = useState([]);
  const [audienceDisabled, setAudienceDisabled] = useState(true);
  const [audience, setAudience] = useState(false);
  const [deadAudience, setDeadAudience] = useState(null);
  const [phoneDisabled, setPhoneDisabled] = useState(true);
  const [phone, setPhone] = useState(false);
  const [deadPhone, setDeadPhone] = useState(null);

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
      const buttons = document.querySelectorAll(".default");
      buttons.forEach((button, index) => {
        if (answer[index] === question[random].correct_answer) {
          button.classList.add("correct");
        }
      });
    } else {
      const buttons = document.querySelectorAll(".answer");
      buttons.forEach((button) => {
        button.classList.remove("correct");
      });
    }
  }, [addClass, question, answer, random]);

  return (
    <>
      <div className="app">
        <div className="left-column">
          <Phone setPhone={setPhone} phone={phone} answer={answer} />
          <Audience
            answer={answer}
            audience={audience}
            setAudience={setAudience}
            percentages={percentages}
          />
          <Popup
            timer={timer}
            start={start}
            currentIndex={currentIndex}
            setDollar={setDollar}
            dollar={dollar}
            removeTag={removeTag}
            leave={leave}
          />
          <Icon />
          <Timer
            timer={timer}
            setTimer={setTimer}
            start={start}
            setStart={setStart}
            question={question}
            random={random}
            clickedBtn={clickedBtn}
            setRightWrong={setRightWrong}
            answer={answer}
            setCorrectShow={setCorrectShow}
            setRemoveTag={setRemoveTag}
            setDisabled={setDisabled}
            setAddClass={setAddClass}
            setFiftyFiftyDisabled={setFiftyFiftyDisabled}
            currentIndex={currentIndex}
            removeTag={removeTag}
            leave={leave}
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
            fiftyFifty={fiftyFifty}
            setFiftyFiftyDisabled={setFiftyFiftyDisabled}
            setAudienceDisabled={setAudienceDisabled}
            setPhoneDisabled={setPhoneDisabled}
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
            <ThreeOption
              setFiftyFiftyDisabled={setFiftyFiftyDisabled}
              fiftyFiftyDisabled={fiftyFiftyDisabled}
              setFiftyFifty={setFiftyFifty}
              deadFiftyFifty={deadFiftyFifty}
              setDeadFiftyFifty={setDeadFiftyFifty}
              setAudienceDisabled={setAudienceDisabled}
              setDeadAudience={setDeadAudience}
              setAudience={setAudience}
              deadAudience={deadAudience}
              timer={timer}
              setTimer={setTimer}
              audienceDisabled={audienceDisabled}
              setPercentages={setPercentages}
              answer={answer}
              phoneDisabled={phoneDisabled}
              setPhoneDisabled={setPhoneDisabled}
              setDeadPhone={setDeadPhone}
              setPhone={setPhone}
              deadPhone={deadPhone}
            />
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
              setFiftyFiftyDisabled={setFiftyFiftyDisabled}
              setFiftyFifty={setFiftyFifty}
              deadFiftyFifty={deadFiftyFifty}
              setDeadFiftyFifty={setDeadFiftyFifty}
              setDollar={setDollar}
              setLeave={setLeave}
              setAudience={setAudience}
              setDeadAudience={setDeadAudience}
              setAudienceDisabled={setAudienceDisabled}
              setPhoneDisabled={setPhoneDisabled}
              setPhone={setPhone}
              setDeadPhone={setDeadPhone}
              deadAudience={deadAudience}
              deadPhone={deadPhone}
            />
            <p className="creator">Made By Chowdhury Zaber Bin Zahid | 2023</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
