import '../../Pages/Profile/MarketerProfile.css'
import { Link } from "react-router-dom";
// import { useState, useEffect } from 'react';
export default function Sidebar({activeSection}) {

    // const [activeSection, setActiveSection] = useState(() => {
    //     return localStorage.getItem("activeSection") || "my-acc";
    // });

    // useEffect(() => {
    //     // عند تحميل صفحة الحساب، نعيد تعيين activeSection لـ "my-acc"
    //     setActiveSection("my-acc");
    //     localStorage.setItem("activeSection", "my-acc");
    //   }, []);

    // const handleClick = (section, e) => {
    //     e.preventDefault();
    //     localStorage.setItem("activeSection", section)
    //     setActiveSection(section)
    // }

    return (
        <ul className="sidebar">
        <li
            className={activeSection === "my-acc" ? "active" : ""}
            onClick={(e) => e.preventDefault()}
        >
            <Link to="/profile">حسابي</Link>
        </li>
        <li
            className={activeSection === "following" ? "active" : ""}
            onClick={(e) => e.preventDefault()}
        >
            <Link to="/following">المتاجر المتابعة</Link>

        </li>
        <li
            className={activeSection === "addresses" ? "active" : ""}
            onClick={(e) => e.preventDefault()}
        >
            <Link to="/addresses">دليل عناويني</Link>
        </li>
        <li
            className={activeSection === "vouchers" ? "active" : ""}
            onClick={(e) => e.preventDefault()}
        >
            <Link to="/vouchers">القسائم</Link>
            
        </li>
        </ul>
    );
    }
