// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Button.css';
export default function Button ({type,to, className,title, onClick, disabled}) {
    const navigate = useNavigate();
    const handleClick = () => {
        if (onClick) onClick();
        if (to) navigate(to);
    }
    return (
            <button type={type} className={`button ${className}`}
            onClick = {handleClick} disabled = {disabled}>{title}</button>
    );
}