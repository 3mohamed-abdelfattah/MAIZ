import React from 'react'
import style from '../style/Home.module.css'
import MainDish from '../img/imageHead.png'
import Circle from '../img/CircleIcon.png'
import Star from '../img/ImgIcon.png'

export default function Home() {
    return (
        <div>
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
        </div>
    )
}
