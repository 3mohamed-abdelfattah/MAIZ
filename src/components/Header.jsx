import React, { useState } from 'react';
import style from '../assets/style/Header.module.css';
import Logo from '../assets/img/Logo.png';
import ButtonIcon from '../assets/img/ColorButtonIcon.svg';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={style.container}>
            <Link to="/MAIZ/" data-aos="zoom-in">
                <img className={style.logoImg} src={Logo} alt='Logo' />
            </Link>
            <div className={style.burgerMenu} onClick={toggleMenu}>
                <div className={style.burgerBar}></div>
                <div className={style.burgerBar}></div>
                <div className={style.burgerBar}></div>
            </div>
            <ul className={`${style.list} ${isOpen ? style.showMenu : ''}`}>
                <li data-aos="fade-right"><Link to="/MAIZ/about" className={style.navLink}>About</Link></li>
                <li data-aos="fade-right"><Link to="/MAIZ/menu" className={style.navLink}>Menu</Link></li>
                <li data-aos="fade-right"><Link to="/MAIZ/venue" className={style.navLink}>Venue</Link></li>
                <li data-aos="fade-right"><Link to="/MAIZ/events" className={style.navLink}>Events</Link></li>
            </ul>
            <span className={style.navButton} data-aos="zoom-in">
                <button className={style.buttonText}>Book Now</button>
                <img src={ButtonIcon} alt='Button Icon' />
            </span>
        </nav>
    );
}