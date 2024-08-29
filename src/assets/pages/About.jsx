import React, { useEffect } from 'react'
import style from '../style/About.module.css'
import AboutImg from '../img/about.jpg'
import Chef from '../img/chef_4638190.png'
import Manger from '../img/groom_5284223.png'
import Flower from '../img/FlowerShape.svg'

export default function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={style.aboutPage}>
            <p className={style.aboutDescription} data-aos="zoom-in">
                Welcome to our venue, where we offer a unique dining experience inspired by the rich culture and history of our city. Our mission is to provide an exceptional experience with a blend of traditional flavors and modern elegance.
            </p>
            {/* Our Team Section */}
            <div className={style.teamSection}>
                <h2 className={style.teamTitle} data-aos="zoom-in">Meet Our Team</h2>
                <div className={style.teamGrid}>
                    <div className={style.teamMember} data-aos="zoom-in">
                        <img src={Flower} alt="Team Member 1" className={style.teamIcon} />
                        <img src={Manger} alt="Team Member 2" className={style.teamImage} />
                        <h3 className={style.teamName}>Mohamed Mohamed</h3>
                        <p className={style.teamRole}>Manager</p>
                        <p className={style.teamBio}>Mohamed ensures that every guest has a memorable experience with impeccable service and attention to detail.</p>
                    </div>
                    <div className={style.teamMember} data-aos="zoom-in">
                        <img src={Chef} alt="Team Member 1" className={style.teamImage} />
                        <h3 className={style.teamName}>Nour Ali</h3>
                        <p className={style.teamRole}>Head Chef</p>
                        <p className={style.teamBio}>Nour has over 20 years of experience in the culinary arts, bringing a unique blend of flavors to our dishes.</p>
                    </div>
                    <div className={style.teamMember} data-aos="zoom-in">
                        <img src={Chef} alt="Team Member 1" className={style.teamImage} />
                        <h3 className={style.teamName}>Nasser Ahmed</h3>
                        <p className={style.teamRole}>Chef</p>
                        <p className={style.teamBio}>Nasser has over 10 years of experience in the culinary arts, bringing a unique blend of flavors to our dishes.</p>
                    </div>
                </div>
            </div>
            {/* Testimonials Section */}
            <div className={style.testimonialsSection}>
                <h2 className={style.testimonialsTitle} data-aos="fade-up">What Our Guests Say</h2>
                <div className={style.testimonials}>
                    <div className={style.testimonial} data-aos="fade-right">
                        <div className={style.rating}>
                            <span className={style.star}>★</span>
                            <span className={style.star}>★</span>
                            <span className={style.star}>★</span>
                            <span className={style.star}>★</span>
                            <span className={style.star}>☆</span>
                        </div>
                        <p>"An unforgettable dining experience with incredible food and ambiance. Highly recommend!"</p>
                        <footer>- Alice Johnson</footer>
                    </div>
                    <div className={style.testimonial} data-aos="fade-right">
                        <div className={style.rating}>
                            <span className={style.star}>★</span>
                            <span className={style.star}>★</span>
                            <span className={style.star}>★</span>
                            <span className={style.star}>★</span>
                            <span className={style.star}>★</span>
                        </div>
                        <p>"The best place to enjoy traditional dishes with a modern twist. The service is top-notch!"</p>
                        <footer>- Bob Williams</footer>
                    </div>
                </div>
            </div >
            {/* Creative Section */}
            <div div className={style.creativeSection} >
                <div className={style.creativeContent}  >
                    <h3 className={style.creativeTitle} data-aos="fade-up">Our Story</h3>
                    <p className={style.creativeText} data-aos="fade-up">
                        Dive into the story behind our establishment and discover the passion that drives us to deliver exceptional dining experiences.
                    </p>
                    <img src={AboutImg} alt="Creative" className={style.creativeImage} data-aos="zoom-in" />
                </div>
            </div >
        </div >
    )
}