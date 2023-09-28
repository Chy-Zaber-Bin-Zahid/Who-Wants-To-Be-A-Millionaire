import { useEffect, useState } from "react";

export default function Phone({ answer, setPhone, phone }) {
  const [phoneAns, setPhoneAns] = useState("");

  useEffect(() => {
    if (phone === true) {
      document.querySelector(".phone").classList.add("phone-on");
    } else {
      document.querySelector(".phone").classList.remove("phone-on");
    }
  }, [phone]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * answer.length);
    const randomAnswer = answer[randomIndex];

    if (typeof randomAnswer === "string") {
      // Replace HTML entities if the item is a string
      setPhoneAns(randomAnswer.replace(/&[^&;]*;/g, ""));
    } else {
      // Handle other types gracefully (e.g., set to an empty string)
      setPhoneAns("");
    }
  }, [answer]);

  function close() {
    setPhone(false);
  }
  return (
    <div className="phone">
      <button onClick={close} className="phone-close">
        X
      </button>
      <div>
        Your Friend Kuddus Miah Thinks It Might be{" "}
        {<span className="ans">{phoneAns.replace(/&[^&;]*;/g, "")}</span>}
      </div>
    </div>
  );
}
