import styles from "./StepsHeader.module.scss";

export const StepsHeader: React.FC = () => {
  return (
    <div className={styles.fourStepsEnoughContainer}>
      <span className={styles.fourStepsEnough}>Wystarczą 4 proste kroki</span>
      <span className={styles.fourStepsDecoration}></span>
    </div>
  );
};
