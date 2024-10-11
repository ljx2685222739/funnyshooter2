import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <title>404: This page could not be found.</title>
      <div className={styles.error}>
        <div>
          <h1 className={styles.h1}>404</h1>
          <div className={styles.desc}>
            <h2 className={styles.h2}>This page could not be found.</h2>
          </div>
        </div>
      </div>
    </>
  );
}
