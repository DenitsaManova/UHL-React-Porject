import styles from './Details.module.css'

export default function Details() {
    return (
         <section className={styles["container"]}>
        <div className={styles["blogs-item"]}>
            <div className={styles["blog-image"]}>
            <img src="https://www.auto-data.net/images/f72/Mercedes-Benz-C-class-W204.jpg" alt="Image"/>
            </div>
            
            <div className={styles["description"]}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam suscipit fugiat ducimus sint
                expedita
                ratione temporibus. Neque, voluptatum?
            </p>
            </div>
            {/* <div className={styles["blog-details"]}> */}
            <div>
                
                 <button className={styles["editBtn"]}> Edit </button> 
                 <button className={styles["deleteBtn"]}> Delete </button> 
                 {/* <Link to={`/posts/`} className={styles["detailsBtn"]}>Details</Link>  */}
                

            </div>
        </div>
         </section>
    )
}