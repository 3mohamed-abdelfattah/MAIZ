import React, { useEffect } from 'react';
import styles from '../style/Menu.module.css';

const Menu = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.menuPage}>
            <header className={styles.menuHeader}>
                <h1 className={styles.menuTitle} data-aos="fade-up">Our Menu</h1>
                <p className={styles.menuSubtitle} data-aos="fade-up">Discover our delicious offerings and specialty dishes</p>
            </header>

            {/* Menu Categories */}
            <section className={styles.menuCategories}>
                <div className={styles.category} data-aos="fade-up">
                    <h2 className={styles.categoryTitle}>Starters</h2>
                    <div className={styles.dishesGrid}>
                        <div className={styles.dish}>
                            <img src="https://mealsbymahnaz.com/cdn/shop/products/Sambosa.jpg?v=1659119883" alt="Samosa" className={styles.dishImage} />
                            <div className={styles.dishDetails}>
                                <h3 className={styles.dishName}>Sambosa</h3>
                                <p className={styles.dishDescription}>Fried pastry filled with vegetables or meat.</p>
                                <span className={styles.dishPrice}>$8.00</span>
                            </div>
                        </div>
                        <div className={styles.dish}>
                            <img src="https://hips.hearstapps.com/hmg-prod/images/hummus-index-6463bace4bba5.jpeg" alt="Hummus" className={styles.dishImage} />
                            <div className={styles.dishDetails}>
                                <h3 className={styles.dishName}>Hummus</h3>
                                <p className={styles.dishDescription}>Mashed chickpeas with tahini and olive oil.</p>
                                <span className={styles.dishPrice}>$10.00</span>
                            </div>
                        </div>
                        <div className={styles.dish}>
                            <img src="https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg" alt="Hummus" className={styles.dishImage} />
                            <div className={styles.dishDetails}>
                                <h3 className={styles.dishName}>Salad</h3>
                                <p className={styles.dishDescription}>Green Salad and olive oil.</p>
                                <span className={styles.dishPrice}>$5.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.category} data-aos="fade-up">
                    <h2 className={styles.categoryTitle}>Mains</h2>
                    <div className={styles.dishesGrid}>
                        <div className={styles.dish}>
                            <img src="https://www.maggiarabia.com/sites/default/files/styles/home_stage_944_531/public/srh_recipes/3d43f3c61eae25c707107c801ac2aa70.jpg?h=4f5b30f1&itok=8WjOwBnQ" alt="Mandi" className={styles.dishImage} />
                            <div className={styles.dishDetails}>
                                <h3 className={styles.dishName}>Mandi</h3>
                                <p className={styles.dishDescription}>Rice cooked with meat and spices.</p>
                                <span className={styles.dishPrice}>$20.00</span>
                            </div>
                        </div>
                        <div className={styles.dish}>
                            <img src="https://i0.wp.com/yourlebanon.com/wp-content/uploads/2021/08/ChickenKabsa.jpg?resize=600%2C792&ssl=1" alt="Kabsa" className={styles.dishImage} />
                            <div className={styles.dishDetails}>
                                <h3 className={styles.dishName}>Kabsa</h3>
                                <p className={styles.dishDescription}>Rice with meat, vegetables, and spices.</p>
                                <span className={styles.dishPrice}>$15.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.category} data-aos="fade-up">
                    <h2 className={styles.categoryTitle}>Desserts</h2>
                    <div className={styles.dishesGrid}>
                        <div className={styles.dish}>
                            <img src="https://www.themediterraneandish.com/wp-content/uploads/2020/04/baklava-recipe-9.jpg" alt="Baklava" className={styles.dishImage} />
                            <div className={styles.dishDetails}>
                                <h3 className={styles.dishName}>Baklava</h3>
                                <p className={styles.dishDescription}>Sweet pastry filled with nuts and honey.</p>
                                <span className={styles.dishPrice}>$7.00</span>
                            </div>
                        </div>
                        <div className={styles.dish}>
                            <img src="https://amiraspantry.com/wp-content/uploads/2016/05/Qatayef-katayef-asafiri-IG.jpg" alt="Qatayef" className={styles.dishImage} />
                            <div className={styles.dishDetails}>
                                <h3 className={styles.dishName}>Qatayef</h3>
                                <p className={styles.dishDescription}>Stuffed pancakes with nuts, fried or baked.</p>
                                <span className={styles.dishPrice}>$8.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.category} data-aos="fade-up">
                    <h2 className={styles.categoryTitle}>Drinks</h2>
                    <div className={styles.dishesGrid}>
                        <div className={styles.dish}>
                            <img src="https://i0.wp.com/wehalal.co/wp-content/uploads/2021/03/coffee-arabic.jpeg?fit=1024%2C768&ssl=1" alt="Arabic Coffee" className={styles.dishImage} />
                            <div className={styles.dishDetails}>
                                <h3 className={styles.dishName}>Arabic Coffee</h3>
                                <p className={styles.dishDescription}>Traditional coffee served with dates.</p>
                                <span className={styles.dishPrice}>$12.00</span>
                            </div>
                        </div>
                        <div className={styles.dish}>
                            <img src="https://littleferrarokitchen.com/wp-content/uploads/2021/04/Jallab-Updated-1-500x375.jpg" alt="Jallab" className={styles.dishImage} />
                            <div className={styles.dishDetails}>
                                <h3 className={styles.dishName}>Jallab</h3>
                                <p className={styles.dishDescription}>Traditional drink made with dates and water.</p>
                                <span className={styles.dishPrice}>$10.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Menu;
