import ThreeOption from "./threeOption";
import Start from "./start";

export default function Option({setStart}) {
  return (
    <div className="option">
      <ThreeOption />
      <Start setStart={setStart} />
      <p className="creator">Made By Chowdhury Zaber Bin Zahid | 2023</p>
    </div>
  );
}
