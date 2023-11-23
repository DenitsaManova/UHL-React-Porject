import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import * as postsService from '../../src/services/postsService';

import styles from './Posts.module.css'

export default function Posts() {
    const [posts, setPosts ] = useState([]);

    useEffect(() => {
        postsService.getAll()
            .then(result => setPosts(result));
    }, []);

    console.log(posts);

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
            <div className={styles["blog-details"]}>
                
                {/* TODO: Add id to address */}
                 <Link to={`/posts/details`} className={styles["detailsBtn"]}>Details</Link> 
                

            </div>
        </div>
        <div className={styles["blogs-item"]}>
            <div className={styles["blog-image"]}>
            <img src="https://scontent.fsof8-1.fna.fbcdn.net/v/t1.6435-9/67296465_2300125953434158_7120608653492617216_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=300f58&_nc_ohc=HiG4IdMC30sAX-_UgUi&_nc_ht=scontent.fsof8-1.fna&oh=00_AfAqtc5Ac0cCclG_VmKnHdFXOA-CsvHFEsuhgl_CQckoCg&oe=6579D6DD" alt="Aesthetic Image"/>
            </div>
            <div className={styles["description"]}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam suscipit fugiat ducimus sint
                expedita
                ratione temporibus. Neque, voluptatum?
            </p>
            </div>
            <div className={styles["blog-details"]}>
                
                 {/* <button className={styles["detailsBtn"]}> Details </button>  */}
                 <Link to={`/posts/`} className={styles["detailsBtn"]}>Details</Link> 
                

            </div>
        </div>
       
    </section>
        
    )
}