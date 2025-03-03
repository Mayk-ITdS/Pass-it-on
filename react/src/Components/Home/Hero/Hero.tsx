import styles from "../Hero/Hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImageContainer}>
        <div className={styles.image}></div>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroContentContent}>
          <h4>We need Your help!</h4>
          <h4>Pass on your stuff if not needed into trusted hands </h4>
          <span className={styles.decorationGit}></span>
        </div>
        <div className={styles.heroButtons}>
          <button>Pass on</button>
          <button>Collect</button>
        </div>
      </div>
    </div>
  );
};
