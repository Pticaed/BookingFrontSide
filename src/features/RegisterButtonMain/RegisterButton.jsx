import React from 'react';
import styles from './RegisterButton.module.css';

export default function RegisterButton() {
  return (
    <div className={styles.wrapper}>
      <span className={`${styles.flag} ${styles.left}`}>⚐</span>
      
      <button className={styles.button}>
        Register an account
      </button>

      <span className={styles.flag}>⚐</span>
    </div>
  );
};
