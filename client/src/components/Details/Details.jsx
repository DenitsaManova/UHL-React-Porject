import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import * as postService from '../../services/postsService';
import * as likesService from '../../services/likeService';

import styles from './Details.module.css'
import AuthContext from "../../contexts/authContext";
import { pathToUrl } from "../../../utils/path.Utils";
import Path from "../../paths";

export default function Details() {
    const navigate = useNavigate();
    const { isAuthenticated, userId } = useContext(AuthContext);
    const [post, setPost] = useState({});
    const { postId } = useParams();
    const [likesAmount, setLikesAmount] = useState(0);
    const [like, setLike] = useState(false);



    useEffect(() => {
        postService.getOne(postId)
            .then(setPost);
    }, [postId]);

    useEffect(() => {
        likesService.allLikesForItem(postId)
            .then(likes => {
                setLikesAmount(likes.length);

                if (likes.find(x => x._ownerId === userId)) {

                    setLike(true);
                }
            })
            .catch(err => console.log(err));
    }, [like]);

    const isOwner = userId === post._ownerId;

    const likeHandle = async () => {
        await likesService.likeItem(postId);

        setLike(true);
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${post.title}`);

        if (hasConfirmed) {
            await postService.remove(postId);

            navigate(Path.Posts);
        }

    }

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
                                    <Link to={pathToUrl(Path.EditPost, { postId })} className={styles["editBtn"]}> Edit </Link>
                                    <button onClick={deleteButtonClickHandler} className={styles["deleteBtn"]}> Delete </button>
                                </div>
                            )}
                            {!isOwner && (
                                <div>
                                    {!like && <button className={styles["editBtn"]} onClick={likeHandle}> Like </button>}
                                    <span>{likesAmount} Likes</span>
                                    
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}