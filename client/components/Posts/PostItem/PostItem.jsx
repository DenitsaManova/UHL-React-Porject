import { Link } from "react-router-dom";

import styles from "../Posts.module.css";

export default function PostItem({
    _id,
    title,
    imageUrl,
    description
}
) {
    return(
        <div className={styles["blog-item"]}>
            <div className={styles["blog-image"]}>
            <img src={imageUrl} alt={title}/>
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
                <Link to={`/posts/details/${_id}`} className={styles["detailsBtn"]}>Details</Link>

            </div>
        </div>
       
    )

}