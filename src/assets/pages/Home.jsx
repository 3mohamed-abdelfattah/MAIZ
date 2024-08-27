import React, { Fragment } from 'react'
import style from '../style/Home.module.css'
import MainDish from '../img/imageHead.png'
import Circle from '../img/CircleIcon.png'
import Star from '../img/ImgIcon.png'
import ImgOne from '../img/imageOne.png'
import ImgTwo from '../img/imageTwo.png'
import ImgThree from '../img/imageThree.png'
import ImgFour from '../img/imageFour.png'
import Diamond from '../img/DiamondShape.png'
import Circles from '../img/Circles.png'

export default function Home() {
    return (
        <Fragment>
            {/* First Section */}
            <img src={Star} alt='Main' className={style.floweIcon} />
            <div className={style.imageContainer}>
                <img src={MainDish} alt='Main' className={style.Image} />
                <div className={style.headText}>
                    <div className={style.headBackground}>
                        Taste the authentic <br /> Saudi cuisine
                    </div>
                    <span>Among the best Saudi chefs in the world,<br /> serving you something beyond flavor.</span>
                    <button className={style.headButton}>Our Menu</button>
                </div>
            </div>
            <img src={Circle} alt='Main' className={style.circleIcon} />
            {/* Second Section */}
            <div className={style.secSection}>
                <span>
                    <img src={ImgOne} alt='Main' className={style.imgOne} />
                    <img src={Circles} alt='Main' className={style.circlesShape} />
                </span>
                <div className={style.subContainer}>
                    <span className={style.firstText}>A distinctive dining destination<br /> inspired by the culture.</span>
                    <div className={style.secText}>Experience Al Balad old town of Jeddah vibes. </div>
                    <button className={style.buttonVenue}>Our Venue</button>
                    <div className={style.imgesContainer}>
                        <img src={ImgTwo} alt='Main' />
                        <img src={ImgThree} alt='Main' />
                        <img src={ImgFour} alt='Main' />
                    </div>
                    <hr className={style.breakLine} />
                </div>
                <div className={style.diamondShape}>
                    <img src={Diamond} alt='Main' />
                </div>
            </div>
            {/* Third Section */}
            {/* Fourth Section */}
        </Fragment>
    )
}