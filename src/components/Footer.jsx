import React, { Fragment } from 'react'
import style from '../assets/style/Footer.module.css'
import { Link } from 'react-router-dom'
import FooterLogo from '../assets/img/FooterLogo.png'
import Facebook from '../assets/img/facebook.png'
import Twitter from '../assets/img/twitter.png'
import Instagram from '../assets/img/instagram.png'
import Linkedin from '../assets/img/linkedin.png'

export default function Footer() {
    return (
        <div className={style.container}>
            <div className={style.logo} data-aos="zoom-in">
                <img src={FooterLogo} alt='Footer Logo' />
            </div>
            <div className={style.subContainer}>
                <ul className={style.list}>
                    <li data-aos="fade-right"><Link to="/MAIZ/" className={style.navLink}>Home</Link></li>
                    <li data-aos="fade-right"><Link to="/MAIZ/about" className={style.navLink}>About</Link></li>
                    <li data-aos="fade-right" className={style.navLink}>Menu</li>
                    <li data-aos="fade-right" className={style.navLink}>Venue</li>
                    <li data-aos="fade-right" className={style.navLink}>Events</li>
                    <li data-aos="fade-right" className={style.navLink}>Contact us</li>
                </ul>
            </div>
            <hr className={style.breakLine} />
            <div className={style.iconsSection}>
                <span className={style.footerText}>© 2021 | All rights reserved.</span>
                <div className={style.icons}>
                    <Link to="https://www.facebook.com/">
                        <img src={Facebook} alt='Footer icons' />
                    </Link>
                    <Link to="https://x.com/?lang=ar">
                        <img src={Twitter} alt='Footer icons' />
                    </Link>
                    <Link to="https://www.instagram.com/">
                        <img src={Instagram} alt='Footer icons' />
                    </Link>
                    <Link to="https://www.linkedin.com/in/3mohamed-abdelfattah/">
                        <img src={Linkedin} alt='Footer icons' />
                    </Link>
                </div>
            </div>
        </div>
    )
}