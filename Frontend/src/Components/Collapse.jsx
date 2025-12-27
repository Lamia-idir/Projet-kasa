import { useState } from "react";
import "./Collapse.css";

export default function Collapse({ title, children, content}) {
  const [open, setOpen] = useState(false);
   const body = children ?? content;

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={() => setOpen(!open)}>
        <span className="colapse__title">{title}</span>
        <span className={`collapse__arrow ${open ? "open" : ""}`}><i className="fa-solid fa-chevron-up"></i></span>
      </button>

      {open ? (<div className="collapse__content"> {body}</div>) : null}
    </div>
  );
}
