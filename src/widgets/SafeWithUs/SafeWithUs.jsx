import CardImageText from '../../features/CardImageText/CardImageText';
import { safeWithUsItems } from './safeWithUsData';
import styles from './SafeWithUs.module.scss';

export default function SafeWithUs() {
    return (
        <section className={styles.root}>
            <div className={styles.grid}>
                {safeWithUsItems.map((item) => (
                    <CardImageText key={item.id} logo={item.logo} text={item.text} />
                ))}
            </div>
        </section>
    );
}
