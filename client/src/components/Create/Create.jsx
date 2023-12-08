import { useNavigate } from 'react-router-dom';
import * as postService from '../../services/postsService';
import styles from './Create.module.css';

export default function Create() {
    const navigate = useNavigate();
    const createPostSubmitHandler = async (e) => {
        e.preventDefault();

        const postData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            if(!postData.title || !postData.imageUrl || !postData.description){
                alert("Please fill in all fields!");
                return;
            }
            await postService.create(postData);
            navigate('/posts');
        }catch(error){
            console.log(error);
        }
    }
    return (
        <form onSubmit={createPostSubmitHandler}>
            <div className={styles["form-container"]}>
                <h2 className={styles["create-title"]}> Create Post </h2>
                <input type="text" name="title" className={styles["create"]} placeholder="Title..." />
                <input type="text" name="imageUrl" className={styles["create"]} placeholder="https://imgUrl..." />
                <input type="text" name="description" className={styles["create"]} placeholder="Description..." />
                <button className={styles["createBtn"]}> Create </button>
            </div>
        </form>
    )
}