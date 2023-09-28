import { useEffect, useState } from "react";

export default function Audience({
  answer,
  audience,
  setAudience,
  percentages,
}) {
  const [newArray, setNewArray] = useState([0, 0, 0, 0]);

  useEffect(() => {
    if (audience === true) {
      document.querySelector(".audience").classList.add("audience-on");
    } else {
      document.querySelector(".audience").classList.remove("audience-on");
    }
  }, [audience]);

  

  useEffect(() => {
    if (percentages) {
      setNewArray(percentages);
    }
  }, [percentages]);

  function close() {
    setAudience(false);
  }

  return (
    <div className="audience">
      <button onClick={close} className="audience-close">
        X
      </button>
      <div>
        {answer.map((value, index) => (
          <div key={index} className="bar-container">
            <span className="label">
              {String.fromCharCode(65 + index).toUpperCase()} :{" "}
            </span>
            <div
              className="filled-bar"
              style={{ width: `${newArray[index]}%` }}
            >
              {`${newArray[index]}%`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
