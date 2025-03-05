import React, { useState } from "react";
import styles from "./Foundations.module.scss";
const localOrgsData = [
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
];

export const LocalOrgs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastOrg = currentPage * 3;
  const indexOfFirstOrg = indexOfLastOrg - 3;
  const itemsPerPage = 3;
  const currentOrganizations = localOrgsData.slice(
    indexOfFirstOrg,
    indexOfLastOrg
  );
  const totalPages = Math.ceil(localOrgsData.length / itemsPerPage);

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
    </div>
  );
};
