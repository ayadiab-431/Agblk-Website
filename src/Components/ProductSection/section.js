import { Link } from 'react-router-dom';
import './ProductSection.css';

export default function Product (props) {
    return (
        <div className="card sec-card" id={props.id}>
        <Link to={props.to}>
        <img src={process.env.PUBLIC_URL + props.url} alt={props.alt} />
        <h2>{props.name}</h2>
        </Link>
        </div>
    );
}