import React from 'react'
import style from '../assets/style/Header.module.css'
import Logo from '../assets/img/Logo.png'
import ButtonIcon from '../assets/img/ColorButtonIcon.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className={style.container}>
            <img className={style.logoImg} src={Logo} alt='Logo' />
            <ul className={style.list}>
                <li><Link to="/about" className={style.navLink}>About</Link></li>
                <li><Link to="/menu" className={style.navLink}>Menu</Link></li>
                <li><Link to="/venue" className={style.navLink}>Venue</Link></li>
                <li><Link to="/events" className={style.navLink}>Events</Link></li>
            </ul>
            <span className={style.navButton}>
                <button className={style.buttonText}>Book Now</button>
                <img src={ButtonIcon} alt='Button Icon' />
            </span>
        </nav>
    )
}
