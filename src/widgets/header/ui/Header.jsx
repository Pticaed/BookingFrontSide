import styles from "../Header.module.scss";
import RegisterModal from "../../../components/modals/registerModal/RegisterModal"
import SignInModal from "../../../components/modals/signInModal/SignInModal"

import { useState } from "react";

export const Header = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  const openSignIn = () => setIsSignInOpen(true);
  const closeSignIn = () => setIsSignInOpen(false);
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        <div className={styles.logo}>
          Hotel for <span className={styles.highlight}>you.</span>
        </div>

        <div className={styles.actions}>
          <button className={styles.lang}>
            <img src="./img/headerImg/lang.png" alt="Language" />
          </button>

          <button 
            className={styles.ghost}
            onClick={openRegister}
            
            >Register</button>
          <button 
            className={styles.ghost}
            onClick={openSignIn}
            >Sign In
            <img src="./img/headerImg/avatar.svg" className={styles.avatar} />
          </button>
        </div>

      </div>
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={closeRegister}
      />
      <SignInModal
        isOpen={isSignInOpen}
        onClose={closeSignIn}/>
    </header>
  );
};

export default Header;