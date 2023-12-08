import { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import styles from "./Login.module.css";
import AuthContext from "../../contexts/authContext";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(handleSubmit, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });

  const [error, setError] = useState("");

  function handleSubmit() {
    if (!values[LoginFormKeys.Email] || !values[LoginFormKeys.Password]) {
      setError("Please fill in all fields!");
      return;
    }

    setError("");

    loginSubmitHandler(values);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={styles["form-container"]}>
        <h2 className={styles["login-title"]}> Login </h2>

        <input
          type="email"
          name={LoginFormKeys.Email}
          className={styles["email"]}
          placeholder="example@abv.bg"
          onChange={onChange}
          value={values[LoginFormKeys.Email]}
        />

        <input
          type="password"
          name={LoginFormKeys.Password}
          className={styles["userPassword"]}
          placeholder="password"
          onChange={onChange}
          value={values[LoginFormKeys.Password]}
        />

        {error && <p className={styles["error-message"]}>{error}</p>}

        <button type="submit" className={styles["loginBtn"]}> Login </button>

        <p className={styles["message"]}>
          Not registered? <a href="/register">Create an account</a>
        </p>
      </div>
    </form>
  );
}
