
import styles from './AboutUs.module.css'
import image1 from './aboutus.jpg'
import image2 from './aboutus2.jpg'


export default function AboutUs() {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                    <img src={image1} alt="About us Image"/>
                </div>
                <div className={styles.content}>
                    <h1>URBAN HOON LIFESTYLE</h1>
                    <p>The idea of ​this group is to get together with other
                         car enthusiasts, there is an open group for anyone who wants to attend weekly 
                         gatherings, as well as a closed group where only selected people 
                         or people with a subscription are members.</p>
                        
                </div>
                <div className={styles.image}>
                <img src={image2} alt="About us Image"/>
                </div>

                
        </div>
    )
}