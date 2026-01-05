import { useState } from "react";
import "./Slidshow.css";

export default function Slidshow({pictures}) {
  const [index, setIndex] = useState(0);
  const total = pictures.length;

  if (total === 0) return null;

  const prev = () => {
  if (index === 0) {
    setIndex(total - 1);
  } else {
    setIndex(index - 1);
  }
};

const next = () => {
  if (index === total - 1) {
    setIndex(0);
  } else {
    setIndex(index + 1);
  }
};

  return (
    <div className="slidshow">
      <img className="slidshow__img" src={pictures[index]} alt="Logement" />

      {total > 1 && (
        <>
          <button className="slidshow__arrow left" onClick={prev}><i className="fa-solid fa-chevron-left"></i>
         </button>
          <button className="slidshow__arrow right" onClick={next}><i className="fa-solid fa-chevron-right"></i>
          </button>
          <p className="slidshow__count">{index + 1}/{total}</p>
        </>
      )}
    </div>
  );
}
