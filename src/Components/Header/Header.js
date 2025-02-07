import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
// import Button from '../Button/Button';
import "./Header.css";
import Logo from '../Logo/Logo';
import SubHeader from './SubHeader';
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    const handleClickOutside = useCallback((event) => {
        const sidebar = document.querySelector('.other-links');
        const menuButton = document.querySelector('.menu-list');

        if (menuOpen && !sidebar.contains(event.target) && !menuButton.contains(event.target)) {
            setMenuOpen(false);
        }
    }, [menuOpen]); 

    useEffect(() => {
        const shadow = document.querySelector('.shadow');
        if (menuOpen) {
            shadow.classList.add('over-shadow');
            window.addEventListener('click', handleClickOutside); 
        } else {
            shadow.classList.remove('over-shadow'); 
            window.removeEventListener('click', handleClickOutside); 
        }

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen, handleClickOutside]); 

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);


    const handleResize = () => {
        setIsMobile(window.innerWidth <= 767);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize); 
        return () => {
            window.removeEventListener('resize', handleResize); 
        };
    }, []);

    return (
        <>
        <div className="header">
            <SubHeader/>
            <div className="container">
                <Logo to='/'/>
                <ul className={`other-links ${menuOpen ? 'open' : ''}`}>
                    <li className="menu" ><i className="ri-menu-line menu-bar"></i> القائمة</li>
                    <li className="link"><Link to="/products">منتجات</Link></li>
                    <li className="link"><Link to="/sections">الاقسام</Link></li>
                    <li className="link"><Link to="/stores">المتاجر</Link></li>
                    <li className="link"><Link to="/track">تتبع الطلب</Link></li>
                    <li className="link"><Link to="/traders">التجار</Link></li>
                    <li className="favourite"><Link to="/fav"> المفضلة <i className="ri-heart-line fav"></i> </Link></li>
                    {/* <li className="link"><Button to='/login' className="login" title={<>سجل كمسوق <i className="ri-user-add-line"></i></>}/></li> */}
                </ul>
                {!isMobile && (
                            <SearchBar />
                    )}
                <div className='features'>
                    <p className="title">المفضلة<i className="ri-heart-line fav"></i></p>
                    <p className="title"><i className="ri-shopping-cart-2-line cart"></i></p>
                </div>
                {/* <div className='account'>
                    <li className="link"><Button to='/login' className="login" title={<><i className="ri-user-add-line"></i> سجل كمسوق</>}/></li>
                </div> */}
                <div className='menu-list' onClick={toggleMenu}>
                    <i className="ri-menu-line menu-bar"></i>
                </div>
            </div>
            <div className="shadow"></div>
        </div>
        {isMobile && (
                <div className="search-bar-wrapper">
                    <SearchBar />
                </div>
            )}
        </>
    );

}
