import styles from './CardImageText.module.scss';

export default function CardImageText({ logo, text }) {
    return (
        <div className={styles.card}>
            {logo ? (
                <img className={styles.image} src={logo} alt="" />
            ) : null}
            {text ? <p className={styles.text}>{text}</p> : null}
        </div>
    );
}
