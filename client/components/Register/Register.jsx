import styles from './Register.module.css'

export default function Regsiter() {
    return (
        <form>
        <div className={styles["form-container"]}>
        <h2 className={styles["register-title"]}> Register </h2>
        <input type="text" name="text" className={styles["userName"]} placeholder="username"/>
        <input type="password" name="password" className={styles["userPassword"]} placeholder="password"/>
        <input type="password" name="repeatPassword" className={styles["userPassword"]} placeholder="repeatPassword"/>
        <button className={styles["registerBtn"]}> Register </button>
        <p className={styles["message"]}>
        Already registered? <a href="/login">Login</a>
          </p>
    </div>
    </form>


    )
}