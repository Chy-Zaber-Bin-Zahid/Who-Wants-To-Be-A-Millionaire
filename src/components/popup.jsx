import React, { useEffect } from "react";

export default function Popup({
  timer,
  start,
  currentIndex,
  dollar,
  setDollar,
  removeTag,
  leave,
}) {
  const h1Elements = document.querySelectorAll(".prize-text");
  useEffect(() => {
    h1Elements.forEach((h1) => {
      if (
        h1.classList.contains("prize-running") ||
        h1.classList.contains("prize-running-save")
      ) {
        const store = h1.textContent.replace(/.*?\$\s*/, "");
        setDollar(`${store} $`);
        console.log("in");
      }
    });
  }, [leave]);

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
    if (timer === 0 && start === "/sound/wrong.mp3") {
      document.querySelector(".popup").classList.add("display");
    } else if (timer === 0 && start === "/sound/victory.mp3") {
      document.querySelector(".popup").classList.add("display");
    } else {
      document.querySelector(".popup").classList.remove("display");
    }

    if (start === "/sound/leave.mp3") {
      document.querySelector(".popup").classList.add("display");
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
