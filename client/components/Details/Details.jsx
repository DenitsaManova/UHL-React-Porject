import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as postService from '../../src/services/postsService';

import styles from './Details.module.css'

export default function Details() {
    const [post, setPost] = useState({});
    const { postId } = useParams();

    useEffect(() => {
        postService.getOne(postId)
            .then(setPost);
    }, [postId]);

    return (
         <section className={styles["container"]}>
        <div className={styles["blog-item"]}>
            <div className={styles["blog-image"]}>
            <img src={post.imageUrl} alt={post.title}/>
            </div>
            <h4>{post.title}</h4>
            <div className={styles["description"]}>
            <p>{post.description}</p>
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