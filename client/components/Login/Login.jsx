import useForm from '../../src/hooks/useForm'

import styles from './Login.module.css'

export default function Login() {
    const { values, onChange, onSubmit } = useForm({
        email: '',
        password: '',
    });
    return (
        <form onSubmit={onSubmit}>
            <div className={styles["form-container"]}>
                <h2 className={styles["login-title"]}> Login </h2>

                <input type="text" 
                name="text" 
                className={styles["email"]} 
                placeholder="example@abv.bg" 
                onChange={onChange}
                value={values.email}/>

                <input type="password" 
                name="password" 
                className={styles["userPassword"]} 
                placeholder="password" 
                onChange={onChange}
                value={values.password}/>

                <button className={styles["loginBtn"]}> Login </button>

                <p className={styles["message"]}>
                    Not registered? <a href="/register">Create an account</a>
                </p>
            </div>
        </form>



    )
}