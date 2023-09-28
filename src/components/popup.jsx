import React, { useEffect } from "react";

export default function Popup({
  timer,
  start,
  currentIndex,
  dollar,
  setDollar,
  removeTag,
}) {
  useEffect(() => {
    if (currentIndex > 10) {
      setDollar("0 $");
    } else if (currentIndex <= 10 && currentIndex > 5) {
      setDollar("1 000 $");
    } else if (currentIndex <= 5 && currentIndex > 0) {
      setDollar("32 000 $");
    } else if (currentIndex === 0 && removeTag === true) {
      setDollar("1 000 000 $");
    }
  }, [currentIndex, setDollar]);

  useEffect(() => {
    // const prizeRunningElement = document.querySelector(".prize-running");
    if (timer === 0 && start === "/sound/wrong.mp3") {
      document.querySelector(".popup").classList.add("display");
      // if (
      //   prizeRunningElement &&
      //   prizeRunningElement.classList.contains("prize-save")
      // ) {
      //   const textContent = prizeRunningElement.textContent;
      //   setDollar(textContent);
      // }
    } else if (timer === 0 && start === "/sound/victory.mp3") {
      document.querySelector(".popup").classList.add("display");
    } else {
      document.querySelector(".popup").classList.remove("display");
    }
  }, [timer, start]);

  return (
    <div className="popup">
      <h1>
        You Won <span className="dollar">{dollar}</span>!
      </h1>
    </div>
  );
}
