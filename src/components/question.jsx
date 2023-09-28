import { useEffect } from "react";

export default function Question({
  questionStart,
  random,
  setRandom,
  setTimer,
  setStart,
  disabled,
  setDisabled,
  clickedBtn,
  setClickedBtn,
  question,
  setQuestion,
  answer,
  setAnswer,
  rightWrong,
  correctShow,
  fiftyFifty,
  setFiftyFifty,
  setDeadFiftyFifty,
  setFiftyFiftyDisabled,
}) {
  useEffect(function () {
    async function fetchQuestion() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple"
      );
      const data = await res.json();
      // setQuestion(data.results)
      setQuestion(data.results);
    }
    fetchQuestion();
  }, []);

  useEffect(
    function () {
      setRandom(Math.floor(Math.random() * question.length));
    },
    [questionStart, question.length]
  );

  useEffect(() => {
    if (question[random]) {
      console.log(question[random].correct_answer);
      setAnswer(
        [
          question[random].correct_answer,
          question[random].incorrect_answers[0],
          question[random].incorrect_answers[1],
          question[random].incorrect_answers[2],
        ].sort(() => Math.random() - 0.5)
      );
    }
  }, [questionStart, question, random]);

  useEffect(() => {
    if (question[random]) {
      const twoIndex = [];
      const searchString = question[random].correct_answer;
      twoIndex.push(searchString);
      answer.pop(searchString);
      const randomIndex = Math.floor(Math.random() * answer.length);
      twoIndex.push(answer[randomIndex]);
      twoIndex.sort(() => Math.random() - 0.5);
      setAnswer(twoIndex);
    }
  }, [fiftyFifty]);

  function checkAns(idx) {
    setClickedBtn(idx);
    setTimer(1);
    setStart("/sound/clicked.mp3");
    setDisabled((d) => !d);
    // setDeadFiftyFifty(true);
    setFiftyFiftyDisabled(true);
  }

  return (
    <div className="question">
      <h1 className="main-question">
        {questionStart === null
          ? "Welcome To Who Wants To Be A Millionaire!"
          : question[random].question.replace(/&[^&;]*;/g, "")}
      </h1>
      {answer.map((answer, index) => (
        <button
          disabled={
            document.querySelector(".main-question").textContent ===
            "Welcome To Who Wants To Be A Millionaire!"
              ? true
              : disabled
          }
          onClick={() => checkAns(index)}
          key={index}
          className={`default ${
            clickedBtn === index
              ? rightWrong === true
                ? "correct"
                : rightWrong === false
                ? "wrong"
                : "selected"
              : "answer"
          }`}
        >
          <span
            className={
              clickedBtn === index ? "answer-span-clicked" : "answer-span"
            }
          >
            {String.fromCharCode(65 + index)}:&nbsp;
          </span>
          <span
            className={clickedBtn === index ? "fetch-ans-clicked" : "fetch-ans"}
          >
            {questionStart === null ? "$$$$$" : answer.replace(/&[^&;]*;/g, "")}
          </span>
        </button>
      ))}
    </div>
  );
}
