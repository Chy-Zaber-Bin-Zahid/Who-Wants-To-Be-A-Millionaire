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
  setAddClass
}) {
  function handleStart() {
    setStart("/sound/background.mp3");
    setQuestionStart((q) => !q);
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
    setRemoveTag(null)
    setAddClass("")
  }

  function handleNext() {
    setStart("/sound/background.mp3");
    setQuestionStart((q) => !q);
    setTimer(60);
    setDisabled(false);
    setClickedBtn(null);
    setRightWrong(null);
    setCorrectShow(false);
    setAddClass("")
  }

  return (
    <div className="option-three">
      {start === "/sound/intro.mp3" && (
        <button onClick={handleStart}>Start</button>
      )}
      {start === "/sound/background.mp3" && (
        <button disabled>Answer Question</button>
      )}
      {start === "/sound/right.mp3" && (
        <button onClick={handleNext}>Next Question</button>
      )}
      {start === "/sound/wrong.mp3" && (
        <button onClick={handleAgain}>Play Again</button>
      )}
    </div>
  );
}
