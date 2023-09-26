import React, { useEffect } from "react";

export default function Popup({ timer, start }) {
  useEffect(() => {
    if (timer === 0 && start === "/sound/wrong.mp3") {
      document.querySelector(".popup").classList.add("display");
    } else{
      document.querySelector(".popup").classList.remove("display");
    }
  }, [timer, start]);

  return (
    <div className="popup">
      <h1>
        You Won <span className="dollar">X</span>!
      </h1>
    </div>
  );
}
