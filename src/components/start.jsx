export default function Start({
  start,
  setStart,
  setQuestionStart,
  setTimer,
  setDisabled,
  setClickedBtn,
  setRightWrong,
  setCorrectShow,
  setCurrentIndex,
  setRemoveTag,
  setAddClass,
  setFiftyFiftyDisabled,
  setFiftyFifty,
  deadFiftyFifty,
  setDeadFiftyFifty,
  setDollar,
  setLeave,
  setAudience,
  setDeadAudience,
  setAudienceDisabled,
  setPhoneDisabled,
  setPhone,
  setDeadPhone,
  deadAudience,
  deadPhone,
  setUsedRandomNumbers,
}) {
  function handleStart() {
    setStart("/sound/background.mp3");
    setQuestionStart((q) => !q);
    setFiftyFiftyDisabled(false);
    setAudienceDisabled(false);
    setPhoneDisabled(false);
  }

  function handleAgain() {
    setStart("/sound/background.mp3");
    setQuestionStart((q) => !q);
    setTimer(60);
    setDisabled(false);
    setClickedBtn(null);
    setRightWrong(null);
    setCorrectShow(false);
    setCurrentIndex(0);
    setRemoveTag(null);
    setAddClass("");
    setFiftyFiftyDisabled(false);
    setFiftyFifty(false);
    setAudience(false);
    setPhone(false);
    setDeadFiftyFifty(null);
    setDeadAudience(null);
    setDeadPhone(null);
    setDollar("0 $");
    setLeave(false);
    setAudienceDisabled(false);
    setPhoneDisabled(false);
    setUsedRandomNumbers([]);
  }

  function handleNext() {
    setStart("/sound/background.mp3");
    setQuestionStart((q) => !q);
    setTimer(60);
    setDisabled(false);
    setClickedBtn(null);
    setRightWrong(null);
    setCorrectShow(false);
    setAddClass("");
    setAudience(false);
    setPhone(false);
    console.log("hello");
    if (deadFiftyFifty === null) {
      console.log("helloF");
      setFiftyFiftyDisabled(false);
    } else if (deadFiftyFifty === false) {
      setFiftyFiftyDisabled(true);
      console.log("helloT");
    }
    if (deadAudience === null) {
      console.log("helloF");
      setAudienceDisabled(false);
    } else if (deadAudience === false) {
      setAudienceDisabled(true);
      console.log("helloT");
    }
    if (deadPhone === null) {
      console.log("helloF");
      setPhoneDisabled(false);
    } else if (deadPhone === false) {
      setPhoneDisabled(true);
      console.log("helloT");
    }
  }

  function handleLeave() {
    setTimer(0);
    setLeave(true);
    setAudienceDisabled(true);
    setPhoneDisabled(true);
  }

  return (
    <div className="option-three">
      {start === "/sound/intro.mp3" && (
        <button onClick={handleStart}>Start</button>
      )}
      {start === "/sound/background.mp3" && (
        <button onClick={handleLeave}>Leave</button>
      )}
      {start === "/sound/right.mp3" && (
        <button onClick={handleNext}>Next Question</button>
      )}
      {start === "/sound/victory.mp3" && (
        <button onClick={handleAgain}>Play Again</button>
      )}
      {start === "/sound/wrong.mp3" && (
        <button onClick={handleAgain}>Play Again</button>
      )}
      {start === "/sound/leave.mp3" && (
        <button onClick={handleAgain}>Play Again</button>
      )}
    </div>
  );
}
