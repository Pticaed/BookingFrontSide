import styles from './ReviewCard.module.scss';

export default function ReviewCard({ username, hotel, day_ago, text, logo }) {
    return (
        <article className={styles.reviewCard}>
            <div className={styles.header}>
                <img 
                    src={logo} 
                    alt={username} 
                    className={styles.avatar}
                />
                <div className={styles.content}>
                    <div className={styles.topLine}>
                        <div className={styles.info}>
                            <h3 className={styles.username}>{username.trim()}</h3>
                            <p className={styles.hotel}>{hotel}</p>
                        </div>
                        <span className={styles.date}>{day_ago}</span>
                    </div>
                </div>
            </div>
            <p className={styles.text}>{text}</p>
        </article>
    );
}
