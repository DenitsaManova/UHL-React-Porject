import styles from "../Posts.module.css";

export default function PostItem({
    title,
    imageUrl,
    description
}
) {
    return(
        <div className={styles["blog-item"]}>
            <div className={styles["blog-image"]}>
            <img src={imageUrl} alt="Image"/>
            </div>
                <h4>{title}</h4>
            <div className={styles["description"]}>
            <p>
                {description}
            </p>
            </div>
            <div className={styles["blog-button"]}>
                
                {/* TODO: Add id to address */}
                  {/* <Link to={`/posts/details`} className={styles["detailsBtn"]}>Details</Link>   */}
                <button className={styles["detailsBtn"]}>Details</button>

            </div>
        </div>
       
    )

}