import { useNavigate } from 'react-router-dom';
import * as postService from '../../services/postsService';
import styles from './Create.module.css';

export default function Create() {
    const navigate = useNavigate();
    const createPostSubmitHandler = async (e) => {
        e.preventDefault();

        const postData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await postService.create(postData);
            navigate('/posts');
        }catch(error){
            //add error notification
            console.log(error);
        }
    }
    return (
        <form onSubmit={createPostSubmitHandler}>
            <div className={styles["form-container"]}>
                <h2 className={styles["edit-title"]}> Create Post </h2>
                <input type="text" name="title" className={styles["edit"]} placeholder="Title..." />
                <input type="text" name="imageUrl" className={styles["edit"]} placeholder="https://imgUrl..." />
                <input type="text" name="description" className={styles["edit"]} placeholder="Description..." />
                <button className={styles["editBtn"]}> Create </button>
            </div>
        </form>


    )
}