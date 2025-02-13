import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export default function SubHeader() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const userData = localStorage.getItem("userData")
        if (userData) setIsLoggedIn(true)
    },[])
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
                <span>|</span>
                <li className="phone">
                    <i className="ri-phone-line"></i>
                    <a href="tel:+20156454516">
                    <span className="hide">الدعم الفني</span>
                        +20156454516</a>
                </li>
            </ul>
            {!isLoggedIn && <ul className="left-side">
                <li>
                    <Link to="/my-stores">متاجري</Link>
                </li>
                <span>|</span>
                <li>
                    <Link to="/create-store">انشاء متجر</Link>
                </li>
                <span>|</span>
                <li>
                    <Link to="/admin-panel">
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    لوحة المسوق</Link>
                </li>
                <span>|</span>
                <li>
                    <Link to="/login">
                        <i className="ri-user-add-line"></i>
                        سجل كمسوق
                    </Link>
                </li>
            </ul>}
            {isLoggedIn && <div className="my-acc">
                <Link to="/profile">
                <i className="fa-regular fa-user"></i>
                حسابي
                </Link>
            </div>}
        </div>
    );
}