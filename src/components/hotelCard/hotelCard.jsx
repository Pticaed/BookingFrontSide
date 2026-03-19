import React from "react";
import styles from "./HotelCard.module.scss";
import { Star1 } from "iconsax-react";

const HotelCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
          alt="hotel"
        />

        <div className={styles.favorite}>★</div>

        <div className={styles.dots}>
          <span className={styles.active}></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.title}>
          Hotel name | City | Country
        </div>

        <div className={styles.stars}>
          <Star1 size="16" color="#6c5ce7" variant="Bold" />
          <Star1 size="16" color="#6c5ce7" variant="Bold" />
          <Star1 size="16" color="#6c5ce7" variant="Bold" />
          <Star1 size="16" color="#6c5ce7" variant="Bold" />
        </div>

        <div className={styles.distance}>
          the city center : 116 m
        </div>

        <div className={styles.price}>
          <span className={styles.amount}>$ 130</span> night
        </div>
      </div>
    </div>
  );
};

export default HotelCard;