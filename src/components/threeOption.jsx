import { useEffect } from "react";

export default function ThreeOption({
  fiftyFiftyDisabled,
  setFiftyFiftyDisabled,
  setFiftyFifty,
  setDeadFiftyFifty,
  deadFiftyFifty,
  setAudienceDisabled,
  setDeadAudience,
  setAudience,
  deadAudience,
  audienceDisabled,
  setPercentages,
  answer,
  phoneDisabled,
  setPhone,
  setPhoneDisabled,
  setDeadPhone,
  deadPhone,
}) {
  const percent = [];
  useEffect(() => {
    let remaining = 100;
    if (answer.length === 4) {
      for (let i = 0; i < 3; i++) {
        const randomPercentage =
          Math.floor(Math.random() * (remaining - 1)) + 1;
        percent.push(randomPercentage);
        remaining -= randomPercentage;
      }
    } else {
      for (let i = 0; i < 1; i++) {
        const randomPercentage =
          Math.floor(Math.random() * (remaining - 1)) + 1;
        percent.push(randomPercentage);
        remaining -= randomPercentage;
      }
    }
    percent.push(remaining);
    setPercentages(percent);
  }, [answer]);

  function clickedFiftyFifty() {
    setFiftyFiftyDisabled(true);
    setFiftyFifty(true);
    setDeadFiftyFifty(true);
  }

  function clickedAudience() {
    setAudienceDisabled(true);
    setDeadAudience(true);
    setAudience(true);
  }

  function clickedPhone() {
    setPhoneDisabled(true);
    setDeadPhone(true);
    setPhone(true);
  }

  return (
    <div className="option-three">
      <button
        disabled={fiftyFiftyDisabled}
        onClick={clickedFiftyFifty}
        title="50:50"
        className={`${deadFiftyFifty === true && "disabled"}`}
      >
        50:50
      </button>
      <button
        disabled={audienceDisabled}
        onClick={clickedAudience}
        title="Audience"
        className={`${deadAudience === true && "disabled"}`}
      >
        👨‍👧‍👦
      </button>
      <button
        disabled={phoneDisabled}
        onClick={clickedPhone}
        title="Call"
        className={`${deadPhone === true && "disabled"}`}
      >
        📞
      </button>
    </div>
  );
}
