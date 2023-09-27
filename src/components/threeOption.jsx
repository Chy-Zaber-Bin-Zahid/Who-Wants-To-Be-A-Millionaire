export default function ThreeOption({ threeDisabled,setThreeDisabled }) {
  return (
    <div disabled={threeDisabled} className="option-three">
      <button title="50:50">50:50</button>
      <button title="Audience">👨‍👧‍👦</button>
      <button title="Call">📞</button>
    </div>
  );
}
