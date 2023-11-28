import { useContext } from 'react'
import styles from './Register.module.css'
import AuthContext from '../../src/contexts/authContext'
import useForm from '../../src/hooks/useForm';

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    RepeatPassword: 'repeatPassword',
}

export default function Regsiter() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.RepeatPassword]: '',
    });

    return (
        <form onSubmit={onSubmit}>
            <div className={styles["form-container"]}>
                <h2 className={styles["register-title"]}> Register </h2>

                <input
                    type="email"
                    name="email"
                    className={styles["email"]}
                    placeholder="example@abv.bg"
                    onChange={onChange}
                    values={values[RegisterFormKeys.Email]} />

                <input
                    type="password"
                    name="password"
                    className={styles["userPassword"]}
                    placeholder="password"
                    onChange={onChange}
                    values={values[RegisterFormKeys.Password]} />

                <input
                    type="password"
                    name="repeatPassword"
                    className={styles["userPassword"]}
                    placeholder="repeat password"
                    onChange={onChange}
                    values={values[RegisterFormKeys.RepeatPassword]} />

                <button className={styles["registerBtn"]}> Register </button>
                <p className={styles["message"]}>
                    Already registered? <a href="/login">Login</a>
                </p>
            </div>
        </form>


    )
}