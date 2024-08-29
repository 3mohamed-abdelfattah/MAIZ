import React, { Fragment, useEffect } from 'react'
import style from '../assets/style/Home.module.css'
import MainDish from '../assets/img/imageHead.png'
import Circle from '../assets/img/CircleIcon.png'
import Star from '../assets/img/ImgIcon.png'
import ImgOne from '../assets/img/imageOne.png'
import ImgTwo from '../assets/img/imageTwo.png'
import ImgThree from '../assets/img/imageThree.png'
import ImgFour from '../assets/img/imageFour.png'
import Diamond from '../assets/img/DiamondShape.png'
import Circles from '../assets/img/Circles.png'
import VideoImg from '../assets/img/Video.png'
import Person from '../assets/img/PersonPhoto.png'
import Flower from '../assets/img/FlowerShape.svg'
import BottomFlower from '../assets/img/BottomFlower.png'
import { Link } from 'react-router-dom';

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            {/* First Section */}
            <img src={Star} alt='Main' className={style.floweIcon} data-aos="fade-left" />
            <div className={style.imageContainer}>
                <img src={MainDish} alt='Main' className={style.Image} data-aos="zoom-in" />
                <div className={style.headText}>
                    <div className={style.headBackground} data-aos="fade-right">
                        Taste the authentic <br /> Saudi cuisine
                    </div>
                    <span>Among the best Saudi chefs in the world,<br /> serving you something beyond flavor.</span>
                    <Link to="/MAIZ/menu">
                        <button className={style.headButton}>Our Menu</button>
                    </Link>
                </div>
            </div>
            <img src={Circle} alt='Main' className={style.circleIcon} data-aos="zoom-in" />
            {/* Second Section */}
            <div className={style.secSection}>
                <span>
                    <img src={ImgOne} alt='Main' className={style.imgOne} data-aos="fade-up" />
                    <img src={Circles} alt='Main' className={style.circlesShape} />
                </span>
                <div className={style.subContainer}>
                    <span className={style.firstText} data-aos="fade-up">A distinctive dining destination<br /> inspired by the culture.</span>
                    <div className={style.secText} data-aos="fade-up">Experience Al Balad old town of Jeddah vibes. </div>
                    <Link to="/MAIZ/venue">
                        <button className={style.buttonVenue} data-aos="zoom-in">Our Venue</button>
                    </Link>
                    <div className={style.imgesContainer}>
                        <img src={ImgTwo} alt='Main' data-aos="fade-left" className={style.ImgScreen} />
                        <img src={ImgThree} alt='Main' data-aos="fade-left" className={style.ImgScreen} />
                        <img src={ImgFour} alt='Main' data-aos="fade-left" className={style.ImgScreen} />
                    </div>
                    <hr className={style.breakLine} data-aos="fade-left" />
                </div>
                <div className={style.diamondShape}>
                    <img src={Diamond} alt='Main' />
                </div>
            </div>
            {/* Third Section */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className={style.thirdSection}>
                    <div className={style.textDiv}>
                        <span className={style.platText} data-aos="fade-right">
                            <span style={{ fontSize: '59.93px', color: '#243054', position: 'absolute', fontFamily: 'Cotoris' }}>
                                “
                            </span>
                            <br />
                            You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                        </span>
                        <div className={style.personDetail} data-aos="fade-right">
                            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13.32px', fontWeight: '500', lineHeight: '19.98px', color: 'rgba(36, 48, 84, 0.87)' }}>
                                Khalid Al Dawsry
                                <br />
                                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '9.99px', fontWeight: '500', lineHeight: '13.32px', color: 'rgba(36, 48, 84, 0.60)' }}>
                                    Jeddah, Saudi
                                </span>
                            </p>
                            <img src={Person} style={{ width: '39.95px', height: '39.95px' }} alt='person' />
                        </div>
                        {/* Line Under Person Details */}
                        <div data-aos="fade-right" style={{ display: 'flex', alignItems: 'center', height: '10px', backgroundColor: '#D4A02B' }}>
                            <div style={{ height: '2px', width: '90%', backgroundColor: '#B39319' }}></div>
                            <div style={{ height: '3px', width: '10%', backgroundColor: '#07224D' }}></div>
                        </div>
                        <img src={Flower} alt='Flower' className={style.flower} />
                    </div>
                    <img src={VideoImg} alt='Kabsa' className={style.thirdSectionImage} />
                </div>
            </div>
            {/* Fourth Section */}
            <div className={style.fourthSection}>
                <div className={style.background_top}></div>
                <div className={style.background_bottom}></div>
                <div className={style.center}>
                    <img src={BottomFlower} alt='Flower' data-aos="zoom-in" />
                    <div className={style.textBottom} data-aos="zoom-in">A unique menu that reflects the true essence of the Saudi cuisine</div>
                    <Link to="/MAIZ/menu">
                        <button className={style.buttonMenue} data-aos="zoom-in">Our Menu</button>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}
