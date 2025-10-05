import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.registerPageWrapper}>
      <div className={styles.registerPageBackground} />

      <div className={styles.registerPageContainer}>
        <div className={styles.registerPageFormSection}>
          <h2 className={styles.registerPageFormTitle}>Register</h2>
          <p className={styles.registerPageLeadTitle}>Manage all your inventory efficiently</p>
          <p className={styles.registerPageLeadSubtitle}>
            Let's get you all set up so you can verify your personal account and begin
            setting up.
          </p>

          <form className={styles.registerPageFormContainer} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.registerPageFormRow}>
              <div className={styles.registerPageFormField}>
                <label className={styles.registerPageFormFieldLabel}>First name</label>
                <input className={styles.registerPageFormFieldInput} placeholder="Enter your name" />
              </div>
              <div className={styles.registerPageFormField}>
                <label className={styles.registerPageFormFieldLabel}>Last name</label>
                <input className={styles.registerPageFormFieldInput} placeholder="minimum 8 characters" />
              </div>
            </div>

            <div className={styles.registerPageFormRow}>
              <div className={styles.registerPageFormField}>
                <label className={styles.registerPageFormFieldLabel}>Email</label>
                <input className={styles.registerPageFormFieldInput} placeholder="Enter your email" />
              </div>
              <div className={styles.registerPageFormField}>
                <label className={styles.registerPageFormFieldLabel}>Phone no.</label>
                <input className={styles.registerPageFormFieldInput} placeholder="minimum 8 characters" />
              </div>
            </div>

            <div className={styles.registerPageFormRowSingle}>
              <div className={styles.registerPageFormField}>
                <label className={styles.registerPageFormFieldLabel}>Password</label>
                <input className={styles.registerPageFormFieldInput} placeholder="Enter your email" type="password" />
              </div>
            </div>

            <Link to="/login" className={styles.registerPageSubmitButton}>
              Sign up
            </Link>
          </form>

          <p className={styles.registerPageHelperText}>
            Already have an account? <Link to="/" className={styles.registerPageLink}>Log in</Link>
          </p>
        </div>

        <div className={styles.registerPageBrandSection}>
          <div className={styles.registerPageLogoContainer}>
            <img src="/public/images/Statstrike_logo.jpg" alt="logo" className={styles.registerPageLogoImage} />
          </div>
          <div className={styles.registerPageBrandText}>
            <span className={styles.registerPageBrandIcon}>✦</span>
            <h1 className={styles.registerPageBrandName}>STAT-STRIKE</h1>
          </div>
        </div>
      </div>
    </div>
  );
}


