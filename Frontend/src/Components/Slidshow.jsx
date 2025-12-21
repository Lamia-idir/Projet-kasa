import { useState } from "react";
import "./Slidshow.css";

export default function Slidshow({pictures}) {
  const [index, setIndex] = useState(0);
  const total = pictures.length;

  if (total === 0) return null;

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <div className="slidshow">
      <img className="slidshow__img" src={pictures[index]} alt="Logement" />

      {total > 1 && (
        <>
          <button className="slidshow__arrow left" onClick={prev}>‹</button>
          <button className="slidshow__arrow right" onClick={next}>›</button>
          <p className="slidshow__count">{index + 1}/{total}</p>
        </>
      )}
    </div>
  );
}
