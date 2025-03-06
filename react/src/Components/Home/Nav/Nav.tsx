import styles from "./Nav.module.scss";

const navElements = {
  start: "Start",
  about: "What it is about",
  aboutUs: "About us",
  orgList: "Fundations & Organizations",
  contact: "Contact",
};

const listElemetns = (obj: Record<string, string>) => {
  return Object.entries(obj).map(([key, value]) => (
    <li key={key} className={styles.navItem}>
      <a href={key === "orgList" ? "#fundations" : ""}>{value}</a>
    </li>
  ));
};
export const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>{listElemetns(navElements)}</ul>
    </nav>
  );
};
