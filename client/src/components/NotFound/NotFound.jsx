import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'
import Path from '../../paths'

export default function NotFound() {
    return (
        <section>
        <div className={styles["container"]}>
        <div className={styles["error-code"]}>404</div>
        <div className={styles["error-message"]}>Oops! Page not found.</div>
        {/* <img className={styles["error-image"]} src="error.png" alt="404 Error Image"/> */}
        <p>
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
        </p>
        <p>
            <Link to={Path.Home} className={styles["error-link"]}>Go back to the homepage</Link>
        </p>
    </div>
    </section>
    )
}