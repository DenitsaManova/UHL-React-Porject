import styles from './Posts.module.css'

export default function Home() {
    return (
        <div >
            <div className={styles["blogs-item"]}>
                <div className={styles["blog-image"]}>
                    <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/G-classNameModelImage.jpg&w=730&h=484&q=75&c=1" alt="blog-image"/>
                </div>
                <p className={styles["description"]}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam suscipit fugiat ducimus sint
                    expedita
                    ratione temporibus. Neque, voluptatum?
                </p>
                <div className={styles["content"]}>
                    <div className={styles["blog-details"]}>
                        <p className={styles["tag"]}>Add to <span> Video </span></p>
                    </div>

                </div>
            </div>
        </div>
    )
}