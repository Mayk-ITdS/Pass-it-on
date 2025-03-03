import styles from "./AboutPhoto.module.scss";

export const AboutPhoto = () => {
  return (
    <>
      <div className={styles.fullWidthContainer}>
        <section className={styles.aboutUs}>
          <div className={styles.divForText}>
            <h4 className={styles.aboutH4}>About us</h4>
            <span className={styles.decoration}></span>
            <article className={styles.articleAboutUs}>
              Nori grape silver beet broccoli kombu beet greens fava bean potato
              quandong celery. Bunya nuts black-eyed pea prairie turnip leek
              lentil turnip greens parsnip.
            </article>
            <div className={styles.signature}></div>
          </div>
        </section>
        <section className={styles.photoContainer}>
          <div className={styles.photo}></div>
        </section>
      </div>
    </>
  );
};
