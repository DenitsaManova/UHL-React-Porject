import styles from './Header.module.css'
import logo from './uhl-logo.png'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header> 
            <nav className={styles.navbar}>
            <div className={styles.left}>
            <Link to="/">
                        <img
                            src={logo}
                            alt="UHL"
                            className={styles.logo}
                        />
                    </Link>
            </div>
            <div className={styles.right}>
                <ul className={styles.list}>
                <li><Link to='/'>Home</Link></li>
                    <li><Link to='/posts'>Posts</Link></li>
                    <li><Link to='/posts/create'>Create Post</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/logout'>Logout</Link></li>
                </ul>
            </div>
        </nav>
        </header>

    )
}