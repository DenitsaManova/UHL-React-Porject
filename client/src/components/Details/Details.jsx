import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import * as postService from '../../services/postsService';

import styles from './Details.module.css'
import AuthContext from "../../contexts/authContext";

export default function Details() {
    const { isAuthenticated, email, userId } = useContext(AuthContext);
    const [post, setPost] = useState({});
    const { postId } = useParams();

    useEffect(() => {
        postService.getOne(postId)
            .then(setPost);
    }, [postId]);

    const isOwner = userId === post._ownerId;
    //console.log(useContext(AuthContext));
    //console.log(email);
    //console.log(post._ownerId);

    return (
        <section className={styles["container"]}>
            <div className={styles["blog-item"]}>
                <div className={styles["blog-image"]}>
                    <img src={post.imageUrl} alt={post.title} />
                </div>
                <h4>{post.title}</h4>
                <div className={styles["description"]}>
                    <p>{post.description}</p>
                </div>
                {/* <div className={styles["blog-details"]}> */}
                <div>
                    {isAuthenticated && (
                        <div>
                            {isOwner && (
                                <div>
                                    <button className={styles["editBtn"]}> Edit </button>
                                    <button className={styles["deleteBtn"]}> Delete </button>
                                    {/* <Link to={`/posts/`} className={styles["detailsBtn"]}>Details</Link>  */}
                                </div>
                            )}
                            {!isOwner && (
                                <div>
                                    <button className={styles["editBtn"]}> Like </button>
                                    <span>0</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}