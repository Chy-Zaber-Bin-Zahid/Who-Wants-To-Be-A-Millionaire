import React, { useEffect, useState } from "react";

export default function Popup({ timer, start }) {
  const [dollar, setDollar] = useState("0 $");

  useEffect(() => {
    const prizeRunningElement = document.querySelector(".prize-running");
    if (timer === 0 && start === "/sound/wrong.mp3") {
      document.querySelector(".popup").classList.add("display");
      if (
        prizeRunningElement &&
        prizeRunningElement.classList.contains("prize-save")
      ) {
        const textContent = prizeRunningElement.textContent;
        setDollar(textContent);
      }
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
