import { Link } from "react-router-dom";
import styles from "./WelcomePage.module.css";

export default function WelcomePage() {
  return (
    <div className={styles.welcomePageWrapper}>
      <div className={styles.welcomePageLeftPane} />

      <div className={styles.welcomePageRightPane}>
        <div className={styles.welcomePageContentCard}>
          <div className={styles.welcomePageLogoContainer}>
            <img
              src="/public/images/Statstrike_logo.jpg"
              alt="Stat-Strike logo"
              className={styles.welcomePageLogoImage}
            />
          </div>

          <div className={styles.welcomePageBrandSection}>
            <span className={styles.welcomePageBrandKicker}>
              <span className={styles.welcomePageBrandKickerIcon}>✦</span>
            </span>
            <h1 className={styles.welcomePageBrandName}>STAT-STRIKE</h1>
          </div>

          <p className={styles.welcomePageSubtitle}>Start your fitness journey with us!</p>

          <Link to="/login" className={styles.welcomePageLoginButton}>
            Login
          </Link>

          <p className={styles.welcomePageHelperText}>
            Not registered yet? <Link to="/register" className={styles.welcomePageLink}>Create a new account</Link>
          </p>

          <div className={styles.welcomePageUpgradeSection}>
            <span>Upgrade to</span>
            <a href="#" className={styles.welcomePageLink}> Pro!</a>
          </div>
        </div>
      </div>
    </div>
  );
}


