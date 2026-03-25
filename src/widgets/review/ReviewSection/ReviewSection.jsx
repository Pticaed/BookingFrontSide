import ReviewCard from '../../../entities/review/ui/ReviewCard/ReviewCard';
import styles from './ReviewSection.module.scss';

const reviews = [
    {
        id: 1,
        username: 'Olga Petrova',
        hotel: 'Grand Hotel Plaza',
        day_ago: '12 days ago',
        text: 'Lorem ipsum dolor sit amet consectetur. Viverra ultricies enim interdum fermentor. Facilisis nulla eun. Ac netus tincidunt arcu er sed.',
        logo: 'https://i.pravatar.cc/150?img=1'
    },
    {
        id: 2,
        username: 'Maxim Sidorov',
        hotel: 'Sunset Resort & Spa',
        day_ago: '18 days ago',
        text: 'Great experience overall. A bit more details on the confirmation page would be helpful. The staff was amazing and very responsive.',
        logo: 'https://i.pravatar.cc/150?img=3'
    },
    {
        id: 3,
        username: 'Elena Moroz',
        hotel: 'City Comfort Inn',
        day_ago: '25 days ago',
        text: 'Loved the interface and the calm design. I found the place I needed in minutes. Everything was smooth and clear.',
        logo: 'https://i.pravatar.cc/150?img=5'
    }
];

export default function ReviewSection() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Reviews</h2>
            </div>
            <div className={styles.grid}>
                {reviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </div>
        </section>
    );
}
