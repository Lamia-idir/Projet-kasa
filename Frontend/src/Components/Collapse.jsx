import { useState } from "react";
import "./Collapse.css";

export default function Collapse({ title, children, content}) {
  const [open, setOpen] = useState(false);
   const body = children ?? content;

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={() => setOpen(!open)}>
        <span className="colLapse__title">{title}</span>
        <span className={`collapse__arrow ${open ? "open" : ""}`}><i className="fa-solid fa-chevron-up"></i></span>
      </button>
    
  
      <div className={`collapse__content ${open ? "open" : ""}`}>
       <div className="collapse__contentInner">{body}</div>
       </div>
    </div>
  );
}
