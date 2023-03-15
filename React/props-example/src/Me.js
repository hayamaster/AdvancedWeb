import "./Me.css";

function formatDate(date) {
  return date.toLocaleString();
}

function Me({ date, text, author }) {
  return (
    <div className="Me">
      <div className="MyInfo">
        <img src={author.logo} alt={author.name} />
        <div className="MyInfo-name">{author.name}</div>
      </div>
      <div className="Me-text">{text}</div>
      <div className="Me-date">{formatDate(date)}</div>
    </div>
  );
}

export default Me;
