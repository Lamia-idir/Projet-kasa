import "./Tags.css";

export default function Tags({ tags = [] }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <span className="tags__item" key={`${tag}-${index}`}>
          {tag}
        </span>
      ))}
    </div>
  );
}

