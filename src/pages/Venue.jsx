import React, { useEffect } from 'react';
import styles from '../assets/style/Venue.module.css';

const Venue = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={styles.venueSection}>
            <div className={styles.container}>
                <div className={styles.description} data-aos="fade-up">
                    <h1 className={styles.title}>Our Venue</h1>
                    <p className={styles.text}>
                        Welcome to our venue, where traditional charm meets modern elegance. Experience an atmosphere
                        that reflects our commitment to quality and hospitality. Whether you’re here for a special
                        occasion or a casual meal, our venue offers a unique setting that will make your visit memorable.
                    </p>
                </div>

                {/* Map Section */}
                <div className={styles.mapContainer} data-aos="fade-up">
                    <h2 className={styles.subtitle}>Find Us Here</h2>
                    <div className={styles.mapWrapper}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29697.01754588506!2d39.23647053157746!3d21.502737334247144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3ce50e248fca5%3A0x84e6a081dfd03fc!2z2YXYt9in2LnZhSDYp9mE2YPYqNiz2Kkg2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2seg!4v1724902230401!5m2!1sar!2seg"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>

                {/* Additional Features */}
                <div className={styles.additionalFeatures} data-aos="fade-up">
                    <div className={styles.feature}>
                        <h3 className={styles.featureTitle}>Elegant Interiors</h3>
                        <p className={styles.featureText}>
                            Our venue boasts sophisticated interiors that create a warm and inviting atmosphere for all our guests.
                        </p>
                    </div>
                    <div className={styles.feature}>
                        <h3 className={styles.featureTitle}>Spacious Dining</h3>
                        <p className={styles.featureText}>
                            Enjoy a comfortable dining experience in our spacious area, perfect for both intimate gatherings and larger events.
                        </p>
                    </div>
                    <div className={styles.feature}>
                        <h3 className={styles.featureTitle}>Event Hosting</h3>
                        <p className={styles.featureText}>
                            We offer versatile spaces for hosting private events, including corporate meetings and celebrations.
                        </p>
                    </div>
                </div>

                {/* Testimonials */}
                <div className={styles.testimonials} data-aos="fade-up">
                    <h2 className={styles.subtitle}>What Our Guests Say</h2>
                    <div className={styles.testimonial}>
                        <p className={styles.testimonialText}>
                            "The venue was absolutely stunning and the service was top-notch. Highly recommend for any special occasion!"
                        </p>
                        <span className={styles.testimonialAuthor}>- Mohamed Sayed</span>
                    </div>
                    <div className={styles.testimonial}>
                        <p className={styles.testimonialText}>
                            "We had a fantastic time. The ambiance and food were exceptional. Will definitely come back!"
                        </p>
                        <span className={styles.testimonialAuthor}>- Rana Fawzy</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Venue;
