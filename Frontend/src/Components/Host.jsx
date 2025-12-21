import "./Host.css";
export default function Host({ host }) {
  return (
    <div className="host">
      <p className="host-name">{host.name}</p>
      <img
        className="host-picture"
        src={host.picture}
        alt={host.name}
      />
    </div>
  );
}
