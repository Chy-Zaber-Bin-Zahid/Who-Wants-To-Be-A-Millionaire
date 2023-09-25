import { useEffect, useState } from "react";

export default function Question() {
  const [question, setQuestion] = useState("");

  useEffect(function () {
    async function fetchQuestion() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple"
      );
      const data = await res.json();
      console.log(data.results);
    }
    fetchQuestion();
  }, []);

  return (
    <div className="question">
      <h1 className="main-question">
        {question === ""
          ? "Welcome To Who Wants To Be A Millionaire!"
          : question}
      </h1>
      <button className="answer"><span className="answer-span">A:&nbsp;</span><span className="fetch-ans">{question === "" ? "$$$$$": "Hello"}</span></button>
      <button className="answer"><span className="answer-span">B:&nbsp;</span><span className="fetch-ans">{question === "" ? "$$$$$": "Hello"}</span></button>
      <button className="answer"><span className="answer-span">C:&nbsp;</span><span className="fetch-ans">{question === "" ? "$$$$$": "Hello"}</span></button>
      <button className="answer"><span className="answer-span">D:&nbsp;</span><span className="fetch-ans">{question === "" ? "$$$$$": "Hello"}</span></button>
    </div>
  );
}
