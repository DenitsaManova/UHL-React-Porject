import { useNavigate, useParams } from 'react-router-dom';
import * as postService from '../../services/postsService';

import styles from './Edit.module.css';
import useForm from '../../hooks/useForm';
import { useEffect, useState } from 'react';

export default function Edit() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState({
        title: '',
        imageUrl: '',
        descrioption: '',
    });

    useEffect(() => {
        postService.getOne(postId)
            .then(result => {
                setPost(result);
            });
    }, [postId]);

    const editPostSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await postService.edit(postId, values);
            navigate('/posts');
        } catch (error) {
            //add error notification
            console.log(error);
        }
    };

    const onChange = (e) => {
        setPost(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    };
    return (
        <form onSubmit={editPostSubmitHandler}>
            <div className={styles["form-container"]}>
                <h2 className={styles["edit-title"]}> Edit Post </h2>
                <input type="text" name="title" className={styles["edit"]}  value={post.title} onChange={onChange} placeholder="Title..." />
                <input type="text" name="imageUrl" className={styles["edit"]}  value={post.imageUrl} onChange={onChange} placeholder="https://imgUrl..." />
                <input type="text" name="description" className={styles["edit"]}  value={post.description} onChange={onChange} placeholder="Description..." />
                <button className={styles["editBtn"]}> Edit </button>
            </div>
        </form>


    )
}