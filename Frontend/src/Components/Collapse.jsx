import { useState } from "react";
import "./Collapse.css";

export default function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <span className={`collapse__arrow ${open ? "open" : ""}`}>⌃</span>
      </button>

      {open && (
        <div className="collapse__content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
