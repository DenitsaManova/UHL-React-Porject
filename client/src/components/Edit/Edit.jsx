import styles from './Edit.module.css';

export default function Edit(){
    return (
        <form>
            <div className={styles["form-container"]}>
                <h2 className={styles["edit-title"]}> Edit Post </h2>
                <input type="text" name="title" className={styles["edit"]} placeholder="Title..." />
                <input type="text" name="imageUrl" className={styles["edit"]} placeholder="https://imgUrl..." />
                <input type="text" name="description" className={styles["edit"]} placeholder="Description..." />
                <button className={styles["editBtn"]}> Create </button>
            </div>
        </form>


    )
}