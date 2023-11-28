import styles from './Home.module.css'


export default function Home() {
    return (
        <div className={styles.container}>
                <div className={styles.content}>
                    <h1>URBAN HOON LIFESTYLE</h1>
                    <p>description</p>
                </div>
                <div className={styles.image}>
                    <img src="https://scontent.fsof8-1.fna.fbcdn.net/v/t1.6435-9/67296465_2300125953434158_7120608653492617216_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=300f58&_nc_ohc=HiG4IdMC30sAX-_UgUi&_nc_ht=scontent.fsof8-1.fna&oh=00_AfAqtc5Ac0cCclG_VmKnHdFXOA-CsvHFEsuhgl_CQckoCg&oe=6579D6DD" alt="Aesthetic Image"/>
                </div>
        </div>
    )
}