import React from "react";
import styles from "./FourSteps.module.scss";
import { PassThing } from "./PassThings";
export const FourSteps: React.FC = () => {
  return (
    <>
      <div className={styles.fourFullWidthContainer}>
        <div className={styles.fourStepsContainer}>
          <ul className={styles.list}>
            <li>
              <span className={styles.icon}></span>
              <span className={styles.chooseThings}>Wybierz rzeczy</span>
              <span className={styles.span3}>
                ubrania, zabawki, sprzęt i inne
              </span>
            </li>
            <li>
              <span className={styles.icon2}></span>
              <span className={styles.chooseThings}>Spakuj je</span>
              <span className={styles.span3}>
                skorzystaj z worków na śmieci
              </span>
            </li>
            <li>
              <span className={styles.icon3}></span>
              <span className={styles.chooseThings}>
                Zdecyduj komu chcesz pomóc
              </span>
              <span className={styles.span3}>wybierz zaufane miejsce</span>
            </li>
            <li>
              <span className={styles.icon4}></span>
              <span className={styles.chooseThings}>Zamów kuriera</span>
              <span className={styles.span3}>
                kurier przyjedzie w dogodnym terminie
              </span>
            </li>
          </ul>
        </div>
      </div>
      <PassThing />
    </>
  );
};
