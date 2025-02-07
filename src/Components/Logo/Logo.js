import './Logo.css'
import { Link } from 'react-router-dom';
export default function Logo({to}) {
    return(
        <>
            <h2 className="logo" id="home">
                <Link to={to}>AGBLK</Link>
            </h2>
        </>
    );
}