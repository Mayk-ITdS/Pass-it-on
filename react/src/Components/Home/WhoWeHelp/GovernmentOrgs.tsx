import React, { useState } from "react";
import styles from "./Foundations.module.scss";
const governmentOrgsData = [
  {
    name: "Dbam o Zdrowie",
    mission: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
    items: ["ubrania1", "jedzenie", "sprzęt AGD", "meble", "zabawki"],
  },
  {
    name: "Dla dzieci",
    mission: "Pomoc dzieciom z ubogich rodzin.",
    items: ["ubrania2", "meble", "zabawki"],
  },
  {
    name: "Bez domu",
    mission: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
    items: ["ubrania3", "jedzenie", "sprzęt AGD", "meble", "zabawki"],
  },
  {
    name: "Dbam o Mame",
    mission: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
    items: ["ubrania4", "jedzenie", "sprzęt AGD", "meble", "zabawki"],
  },
  {
    name: "Druga Piata fundacja",
    mission: "Pomoc dzieciom z ubogich rodzin.",
    items: ["ubrania5", "jedzenie", "sprzęt AGD", "meble", "zabawki"],
  },
  {
    name: "Bez domu",
    mission: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
    items: ["ubrania6", "jedzenie6", "sprzęt AGD6", "meble6", "zabawki6"],
  },
];

export const GovernmentOrgs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastOrg = currentPage * 3;
  const indexOfFirstOrg = indexOfLastOrg - 3;
  const itemsPerPage = 3;
  const currentOrganizations = governmentOrgsData.slice(
    indexOfFirstOrg,
    indexOfLastOrg
  );
  const totalPages = Math.ceil(governmentOrgsData.length / itemsPerPage);

  return (
    <div className={styles.foundationsContainer}>
      {currentOrganizations.map((org) => (
        <ul className={styles.orgInfoContentDiv}>
          <li>
            <span className={styles.listFirstRow}>
              <p className={styles.orgName}>{org.name}</p>
              <p className="orgItems">{org.items.join(", ")}</p>
            </span>
          </li>
          <li>
            <span className="orgMission">{org.mission}</span>
          </li>
        </ul>
      ))}
      <div className={styles.buttonsDiv}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
