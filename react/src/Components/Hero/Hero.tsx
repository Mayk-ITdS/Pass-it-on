import styles from "../Hero/Hero.module.scss";

export const Hero = () => {
  return (
    <div>
      <div className={styles.image}>
        <image href="../../assets/Home-Hero-Image.jpg"></image>
      </div>
      <div className="hero-content-section"></div>
    </div>
  );
};
