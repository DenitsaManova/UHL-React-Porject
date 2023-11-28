import { useEffect, useState } from 'react';

import * as postsService from '../../services/postsService';
import PostItem from './PostItem/PostItem';

import styles from './Posts.module.css'

export default function Posts() {
    const [posts, setPosts ] = useState([]);

    useEffect(() => {
        postsService.getAll()
            .then(result => setPosts(result));
    }, []);


    return (
        <section className={styles["container"]}>
        
        {posts.map(post => (
            <PostItem key={post._id} {...post}/>
        ))}
       
    </section>
        
    )
}