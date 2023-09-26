import { useEffect, useState } from "react";

export default function Question({ questionStart, random, setRandom }) {
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState([]);

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


  return (
    <div className="question">
      <h1 className="main-question">
        {questionStart === null
          ? "Welcome To Who Wants To Be A Millionaire!"
          : question[random].question}
      </h1>
      <button className="answer">
        <span className="answer-span">A:&nbsp;</span>
        <span className="fetch-ans">
          {questionStart === null ? "$$$$$" : answer[0]}
        </span>
      </button>
      <button className="answer">
        <span className="answer-span">B:&nbsp;</span>
        <span className="fetch-ans">
          {questionStart === null ? "$$$$$" : answer[1]}
        </span>
      </button>
      <button className="answer">
        <span className="answer-span">C:&nbsp;</span>
        <span className="fetch-ans">
          {questionStart === null ? "$$$$$" : answer[2]}
        </span>
      </button>
      <button className="answer">
        <span className="answer-span">D:&nbsp;</span>
        <span className="fetch-ans">
          {questionStart === null ? "$$$$$" : answer[3]}
        </span>
      </button>
    </div>
  );
}
