import styles from './Login.module.css'


export default function Login() {
    return (
        
 <div className={styles["form-container"]}>
        <h2 className={styles["login-title"]}> Login </h2>
        <input type="text" name="text" className={styles["userName"]} placeholder="username"/>
        <input type="password" name="password" className={styles["userPassword"]} placeholder="password"/>
        <button className={styles["loginBtn"]}> Login </button>
        <p className={styles["message"]}>
            Not registered? <a href="/register">Create an account</a>
          </p>
    </div>
        
       

    )
}