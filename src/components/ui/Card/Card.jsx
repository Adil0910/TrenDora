import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ icon, title, description, to }) => {
  return (
    <Link to={to} className="feature-card">
      <div className="feature-card-icon">{icon}</div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-description">{description}</p>
    </Link>
  );
};

export default Card;
