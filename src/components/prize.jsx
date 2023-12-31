import { useEffect } from "react";

export default function Prize({
  correctShow,
  currentIndex,
  setCurrentIndex,
  removeTag,
}) {
  const h1Elements = document.querySelectorAll(".prize-text");

  useEffect(() => {
    h1Elements.forEach((h1, index) => {
      if (index === currentIndex && removeTag === true) {
        if (h1.classList.contains("prize-save")) {
          h1.classList.add("prize-running-save");
        } else {
          h1.classList.add("prize-running");
        }
      } else {
        if (h1.classList.contains("prize-save")) {
          h1.classList.remove("prize-running-save");
        } else {
          h1.classList.remove("prize-running");
        }
      }
    });
  }, [currentIndex]);

  useEffect(() => {
    if (correctShow) {
      const lastIndex = h1Elements.length - 1;
      const nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
      setCurrentIndex(nextIndex);
    }
  }, [correctShow]);

  return (
    <div className="prize">
      <div>
        <h1 className="prize-text prize-save">15 $ 1 000 000</h1>
        <h1 className="prize-text">14 $ 500 000</h1>
        <h1 className="prize-text">13 $ 250 000</h1>
        <h1 className="prize-text">12 $ 125 00</h1>
        <h1 className="prize-text">11 $ 64 000</h1>
        <h1 className="prize-text prize-save">10 $ 32 000</h1>
        <h1 className="prize-text">9 &nbsp;&nbsp;$ 16 000</h1>
        <h1 className="prize-text">8 &nbsp;&nbsp;$ 8 000</h1>
        <h1 className="prize-text">7 &nbsp;&nbsp;$ 4 000</h1>
        <h1 className="prize-text">6 &nbsp;&nbsp;$ 2 000</h1>
        <h1 className="prize-text prize-save">5 &nbsp;&nbsp;$ 1 000</h1>
        <h1 className="prize-text">4 &nbsp;&nbsp;$ 500</h1>
        <h1 className="prize-text">3 &nbsp;&nbsp;$ 300</h1>
        <h1 className="prize-text">2 &nbsp;&nbsp;$ 200</h1>
        <h1 className="prize-text ">1 &nbsp;&nbsp;$ 100</h1>
      </div>
    </div>
  );
}
