import "./Banner.css";

export default function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="bannière" className="banner__img" />
      {text ? <h1 className="banner__text">{text}</h1> : null}

    </div>
  );
}
