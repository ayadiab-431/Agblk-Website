import { Link } from "react-router-dom";
export default function SubHeader() {
    return (
        <div className="sub-header">
            <ul className="right-side">
                <li className="email">
                    <i className="fa-regular fa-envelope"></i>
                    <a href="mailto:example@agblk.com">
                        <span className="hide">البريد الإلكتروني</span>
                        example@agblk.com
                        </a>
                </li>
                <li className="phone">
                    <i className="ri-phone-line"></i>
                    <a href="tel:+20156454516">
                    <span className="hide">الدعم الفني</span>
                        +20156454516</a>
                </li>
            </ul>
            <ul className="left-side">
                <li>
                    <Link to="/my-stores">متاجري</Link>
                </li>
                <li>
                    <Link to="/create-store">انشاء متجر</Link>
                </li>
                <li>
                    <Link to="/admin-panel">انشاء متجر</Link>
                </li>
                <li>
                    <Link to="/login">
                        <i className="ri-user-add-line"></i>
                        سجل كمسوق
                    </Link>
                </li>
            </ul>
        </div>
    );
}