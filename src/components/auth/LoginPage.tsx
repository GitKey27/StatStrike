import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.loginPageWrapper}>
      <div className={styles.loginPageBackground} />

      <div className={styles.loginPageContainer}>
        <div className={styles.loginPageBrandSection}>
          <div className={styles.loginPageLogoContainer}>
            <img src="/public/images/Statstrike_logo.jpg" alt="logo" className={styles.loginPageLogoImage} />
          </div>
          <div className={styles.loginPageBrandText}>
            <span className={styles.loginPageBrandIcon}>✦</span>
            <h1 className={styles.loginPageBrandName}>STAT-STRIKE</h1>
          </div>
        </div>

        <div className={styles.loginPageFormSection}>
          <h2 className={styles.loginPageFormTitle}>Login</h2>

          <form className={styles.loginPageFormContainer} onSubmit={(e) => e.preventDefault()}>
            <button className={styles.loginPageGoogleSignInButton} type="button">
              <span className={styles.loginPageGoogleIcon}>G</span>
              Sign in with google
            </button>

            <div className={styles.loginPageFormField}>
              <label className={styles.loginPageFormLabel}>Email*</label>
              <input className={styles.loginPageFormInput} placeholder="Enter your email" type="email" />
            </div>

            <div className={styles.loginPageFormField}>
              <label className={styles.loginPageFormLabel}>Password*</label>
              <input className={styles.loginPageFormInput} placeholder="minimum 8 characters" type="password" />
            </div>

            <div className={styles.loginPageCheckboxContainer}>
              <label className={styles.loginPageCheckboxLabel}>
                <input type="checkbox" className={styles.loginPageCheckbox} />
                Remember me
              </label>
              <a href="#" className={styles.loginPageForgotPasswordLink}>Forgot password?</a>
            </div>

            <Link to="/app" className={styles.loginPageSubmitButton}>
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
