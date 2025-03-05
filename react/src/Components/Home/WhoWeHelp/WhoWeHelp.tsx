import { useState } from "react";
import { Foundations } from "./Foundations";
import { GovernmentOrgs } from "./GovernmentOrgs";
import styles from "./WhoWeHelp.module.scss";
import { LocalOrgs } from "./LocalOrgs";
export const WhoWeHelp: React.FC = () => {
  const [openComponent, setOpenComponent] = useState(0);

  return (
    <div className={styles.whoWeHelpContainer}>
      <div className={styles.entitiesPaginationContainer}>
        <section className={styles.entitiesPaginationContainerHead}>
          <span className={styles.entitiesPaginationContainerTitle}>
            Komu pomagamy?
          </span>
          <span className={styles.entitiesPaginationContainerDeco}></span>
        </section>
        <div className={styles.entitiesMain}>
          <div className={styles.entitiesMainButtons}>
            <button
              className={styles.button}
              onClick={() => setOpenComponent(1)}
            >
              Fundacjom
            </button>
            <button
              className={styles.button}
              onClick={() => setOpenComponent(2)}
            >
              Organizacjom pozarządowym
            </button>
            <button
              className={styles.button}
              onClick={() => setOpenComponent(3)}
            >
              Lokalnym zbiórkom
            </button>
          </div>
          <div className={styles.listContainer}>
            <section className={styles.entitiesDesc}>
              W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
              którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu
              pomagają i czego potrzebują.
            </section>
            <div id="pages" className="pages">
              {openComponent === 1 && <Foundations />}
              {openComponent === 2 && <GovernmentOrgs />}
              {openComponent === 3 && <LocalOrgs />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
