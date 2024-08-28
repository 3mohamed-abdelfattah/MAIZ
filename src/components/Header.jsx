import React from 'react'
import style from '../assets/style/Header.module.css'
import Logo from '../assets/img/Logo.png'
import ButtonIcon from '../assets/img/ColorButtonIcon.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className={style.container}>
            <Link to="/MAIZ" data-aos="zoom-in">
                <img className={style.logoImg} src={Logo} alt='Logo' />
            </Link>
            <ul className={style.list}>
                <li data-aos="fade-right"><Link to="/about" className={style.navLink}>About</Link></li>
                <li data-aos="fade-right"><Link to="/menu" className={style.navLink}>Menu</Link></li>
                <li data-aos="fade-right"><Link to="/venue" className={style.navLink}>Venue</Link></li>
                <li data-aos="fade-right"><Link to="/events" className={style.navLink}>Events</Link></li>
            </ul>
            <span className={style.navButton} data-aos="zoom-in">
                <button className={style.buttonText}>Book Now</button>
                <img src={ButtonIcon} alt='Button Icon' />
            </span>
        </nav>
    )
}