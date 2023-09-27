export default function ThreeOption({
  fiftyFiftyDisabled,
  setFiftyFiftyDisabled,
  setFiftyFifty,
  setDeadFiftyFifty,
}) {
  function clickedFiftyFifty() {
    setFiftyFiftyDisabled(true);
    setFiftyFifty(true);
    setDeadFiftyFifty(true);
  }

  return (
    <div className="option-three">
      <button
        disabled={fiftyFiftyDisabled}
        onClick={clickedFiftyFifty}
        title="50:50"
      >
        50:50
      </button>
      <button
        disabled={fiftyFiftyDisabled}
        onClick={clickedFiftyFifty}
        title="Audience"
      >
        👨‍👧‍👦
      </button>
      <button
        disabled={fiftyFiftyDisabled}
        onClick={clickedFiftyFifty}
        title="Call"
      >
        📞
      </button>
    </div>
  );
}
