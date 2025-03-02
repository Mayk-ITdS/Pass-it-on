import React from "react";
import styles from "./FourSteps.module.scss";
export const FourSteps: React.FC = () => {
  return (
    <div className={styles.fourStepsContainer}>
      <ul className={styles.list}>
        <li>
          <span>
            <span className="icon"></span>
          </span>
          <span>Wybierz rzeczy</span>
          <span>ubrania, zabawki, sprzęt i inne</span>
        </li>
        <li>
          <span></span>
          <span></span>
          <span></span>
        </li>
        <li>
          <span></span>
          <span></span>
          <span></span>
        </li>
        <li>
          <span></span>
          <span></span>
          <span></span>
        </li>
      </ul>
    </div>
  );
};
