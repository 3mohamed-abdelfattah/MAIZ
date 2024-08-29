import React, { useEffect } from 'react';
import styles from '../style/Events.module.css';

const Events = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={styles.eventsSection}>
            <div className={styles.container}>
                {/* Featured Events */}
                <div className={styles.featuredEvents} data-aos="fade-up">
                    <h1 className={styles.title}>Upcoming Events</h1>
                    <div className={styles.eventsGrid}>
                        <div className={styles.event}>
                            <img src="https://pbs.twimg.com/media/DR82XBJX0AAAbXL.jpg" alt="Event 1" className={styles.eventImage} />
                            <div className={styles.eventDetails}>
                                <h2 className={styles.eventName}>Traditional Arabian Night</h2>
                                <p className={styles.eventDate}>October 10, 2024</p>
                                <p className={styles.eventDescription}>
                                    Experience the charm of Arabian culture with traditional music, dance, and cuisine in a magical setting.
                                </p>
                                <button className={styles.eventButton}>Learn More</button>
                            </div>
                        </div>
                        <div className={styles.event}>
                            <img src="https://www.arabianbusiness.com/cloud/2021/09/18/pSpLyRLc-Janadriyah-Festival-2.jpg" alt="Event 2" className={styles.eventImage} />
                            <div className={styles.eventDetails}>
                                <h2 className={styles.eventName}>Saudi Heritage Festival</h2>
                                <p className={styles.eventDate}>November 5, 2024</p>
                                <p className={styles.eventDescription}>
                                    Celebrate Saudi heritage with exhibitions, local crafts, and cultural performances. A day of discovery and tradition.
                                </p>
                                <button className={styles.eventButton}>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Past Events */}
                <div className={styles.pastEvents} data-aos="fade-up">
                    <h2 className={styles.subtitle}>Past Events</h2>
                    <div className={styles.eventsGrid}>
                        <div className={styles.event}>
                            <img src="https://i.ytimg.com/vi/fS9ekef8PBM/maxresdefault.jpg" alt="Past Event 1" className={styles.eventImage} />
                            <div className={styles.eventDetails}>
                                <h2 className={styles.eventName}>Desert Festival</h2>
                                <p className={styles.eventDate}>August 20, 2024</p>
                                <p className={styles.eventDescription}>
                                    An exhilarating desert festival featuring camel rides, traditional food, and live entertainment.
                                </p>
                            </div>
                        </div>
                        <div className={styles.event}>
                            <img src="https://media.npr.org/assets/img/2016/02/05/ap_670327953302_custom-37a54548413d7ce87c267755bda49119e9728d02.jpg" alt="Past Event 1" className={styles.eventImage} />
                            <div className={styles.eventDetails}>
                                <h2 className={styles.eventName}>Art of Arabia Exhibition</h2>
                                <p className={styles.eventDate}>July 15, 2024</p>
                                <p className={styles.eventDescription}>
                                    A captivating exhibition showcasing the rich artistic heritage of the Arabian Peninsula.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Event Calendar */}
                <div className={styles.calendar} data-aos="fade-up">
                    <h2 className={styles.subtitle}>Event Calendar</h2>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?src=your-calendar-id%40group.calendar.google.com&ctz=Asia%2FRiyadh"
                        style={{ border: 0 }}
                        width="100%"
                        height="600"
                        frameBorder="0"
                        scrolling="no"
                        title="Event Calendar"
                    ></iframe>
                </div>

                <div className={styles.testimonials} data-aos="fade-up">
                    <h2 className={styles.subtitle}>What Attendees Say</h2>
                    <div className={styles.testimonial}>
                        <p className={styles.testimonialText}>
                            "The Traditional Arabian Night was an unforgettable experience! The ambiance was magical, and the food was exquisite."
                        </p>
                        <span className={styles.testimonialAuthor}>- Amina Al-Farsi</span>
                    </div>
                    <div className={styles.testimonial}>
                        <p className={styles.testimonialText}>
                            "The Saudi Heritage Festival provided an amazing insight into Saudi culture. The exhibitions and performances were outstanding."
                        </p>
                        <span className={styles.testimonialAuthor}>- Khalid Al-Mutairi</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;