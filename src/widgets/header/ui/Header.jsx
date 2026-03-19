import styles from "../Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <div className={styles.logo}>
          Hotel for <span className={styles.highlight}>you.</span>
        </div>

        <div className={styles.actions}>
          <button className={styles.lang}>
            <img src="./public/img/lang.png" alt="Language" />
          </button>

          <button className={styles.ghost}>Register</button>
          <button className={styles.ghost}>
            Sign In
            <img src="./public/img/avatar.svg" className={styles.avatar} />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;