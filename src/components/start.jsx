export default function Start({ start, setStart, setQuestionStart, setTimer }) {
  function handleStart() {
    setStart("/sound/background.mp3");
    setQuestionStart((q) => !q);
  }

  function handleAgain() {
    setStart("/sound/background.mp3");
    setQuestionStart((q) => !q);
    setTimer(60);
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
        <button onClick={handleStart}>Next Question</button>
      )}
      {start === "/sound/wrong.mp3" && (
        <button onClick={handleAgain}>Play Again</button>
      )}
    </div>
  );
}
