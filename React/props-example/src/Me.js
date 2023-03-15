import "./Me.css";

function formatDate(date) {
  return date.toLocaleString();
}

function Me(props) {
  return (
    <div className="Me">
      <div className="MyInfo">
        <img src={props.author.logo} alt={props.author.name} />
        <div className="MyInfo-name">{props.author.name}</div>
      </div>
      <div className="Me-text">{props.text}</div>
      <div className="Me-date">{formatDate(props.date)}</div>
    </div>
  );
}

export default Me;
