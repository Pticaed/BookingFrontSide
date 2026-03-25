import React from 'react';
import styles from './PromoCard.module.css';

const PromoCard = () => {
  return (
    <section className={styles.root}>
      <h3 className={styles.title}>Be Our Regular</h3>
      
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=500" 
            alt="Traveler" 
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.description}>
            We believe that every customer deserves the best, and we're committed to providing 
            top-class services to all of our clients. When you book with us, you can enjoy not 
            only great deals on your travel arrangements, but also exclusive discounts and 
            special offers. We value your loyalty and want to show our appreciation by giving back.
          </p>
          <p className={styles.ctaText}>
            So start your search today and discover the amazing rewards waiting for you on our website!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromoCard;