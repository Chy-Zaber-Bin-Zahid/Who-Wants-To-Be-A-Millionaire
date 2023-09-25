export default function Start({ setStart }) {
  function handleStart() {
    setStart("/sound/background.mp3");
  }

  return (
    <div className="option-three">
      <button onClick={handleStart}>Start</button>
    </div>
  );
}
