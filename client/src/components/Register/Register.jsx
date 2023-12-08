import { useContext, useState } from 'react'
import styles from './Register.module.css'
import AuthContext from '../../contexts/authContext'
import useForm from '../../hooks/useForm';

  const RegisterFormKeys = {
      Email: 'email',
      Password: 'password',
      RepeatPassword: 'repeatPassword',
  }

  export default function Regsiter() {
      const { registerSubmitHandler } = useContext(AuthContext);
      const { values, onChange, onSubmit } = useForm(handleSubmit, {
          [RegisterFormKeys.Email]: '',
          [RegisterFormKeys.Password]: '',
          [RegisterFormKeys.RepeatPassword]: '',
      });

      const [error, setError] = useState("");

    function handleSubmit() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values[RegisterFormKeys.Email] || !values[RegisterFormKeys.Password] || !values[RegisterFormKeys.RepeatPassword]) {
      setError("Please fill in all fields!");
      return;
    }else if(!emailRegex.test(values[RegisterFormKeys.Email])){
        setError("Invalid email address!");
        return;
    }else if(values[RegisterFormKeys.Password] !== values[RegisterFormKeys.RepeatPassword]){
        setError("Password mismatch!");
        return;
    }else if(values[RegisterFormKeys.Password].length < 6){
        setError("Password must be at least 6 characters long.");
        return;
    }

    setError("");

    registerSubmitHandler(values);
  }

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

                   {error && <p className={styles["error-message"]}>{error}</p>}

                  <button className={styles["registerBtn"]}> Register </button>
                  <p className={styles["message"]}>
                      Already registered? <a href="/login">Login</a>
                  </p>
              </div>
          </form>


      )
  }

//  export default function Regsiter() {
//       const { registerSubmitHandler } = useContext(AuthContext);
//        const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
//            [RegisterFormKeys.Email]: '',
//           [RegisterFormKeys.Password]: '',
//            [RegisterFormKeys.RepeatPassword]: '',
//        });
    
//      const [formData, setFormData] = useState({
//          email: '',
//          password: '',
//          repeatPassword: '',
//      });


//      const [errors, setErrors] = useState({
//          email: '',
//          password: '',
//          repeatPassword: '',
//      });

//      const handleChange = (e) => {
//          const { name, value } = e.target;
//          setFormData({
//              ...formData,
//              [name]: value,
//          });

//          validate(name, value);
//      };

//      const validate = (name, value) => {

//          setErrors({
//              ...errors,
//              [name]: '',
//          });


//          switch (name) {
//              case 'email':
//                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//                  if (!emailRegex.test(value)) {
//                      setErrors((prevErrors) => ({
//                          ...prevErrors,
//                          [name]: 'Invalid email address.',
//                      }));
//                  }
//                  break;
//              case 'password':
//                  if (value.length < 6) {
//                      setErrors((prevErrors) => ({
//                          ...prevErrors,
//                          [name]: 'Password must be at least 6 characters long.',
//                      }));
//                  }
//                  break;
//                  case 'repeatPassword':
//                      if (value.length < 6) {
//                          setErrors((prevErrors) => ({
//                              ...prevErrors,
//                              [name]: 'Password must be at least 6 characters long.',
//                          }));
//                      }else if(formData.password && value !== formData.repeatPassword){
//                          setErrors((prevErrors) => ({
//                              ...prevErrors,
//                              [name]: 'Password mismatch',
//                          }));
//                      }
//                      break;
//              default:
//                  break;
//          }
//      };

//      const handleSubmit = (e) => {
//          e.preventDefault();

       

//          for (const key in formData) {
//              validate(key, formData[key]);
//          }


//          for (const key in errors) {
//              if (errors[key]) {
//                  return;
//              }
//          }

//      };

//      return (
//          <form onSubmit={onSubmit}>
//              <div className={styles["form-container"]}>
//                  <h2 className={styles["register-title"]}> Register </h2>

//                  <div>
//                      <input
//                          type="email"
//                          name="email"
//                          className={styles["email"]}
//                          placeholder="example@abv.bg"
//                          onBlur={handleChange}
//                          values={formData.email} />

//                      <div className={styles["error-message"]}>{errors.email}</div>
//                  </div>

//                  <div>
//                      <input
//                          type="password"
//                          name="password"
//                          className={styles["userPassword"]}
//                          placeholder="password"
//                          onBlur={handleChange}
//                          values={formData.password} />
//                      <div className={styles["error-message"]}>{errors.password}</div>

//                  </div>

//                  <div>
//                  <input
//                      type="password"
//                      name="repeatPassword"
//                      className={styles["userPassword"]}
//                      placeholder="repeat password"
//                      onBlur={handleChange}
//                      values={formData.repeatPassword} />
//                  <div className={styles["error-message"]}>{errors.repeatPassword}</div>
//                  </div>

//                  <button className={styles["registerBtn"]}> Register </button>
//                  <p className={styles["message"]}>
//                      Already registered? <a href="/login">Login</a>
//                  </p>
//              </div>
//          </form>


//      )
//  }