import styles from "./ThreeColumns.module.scss";

const state = [
  {
    quantity: 10,
    action: "Oddanych workow",
    decript:
      "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat voluptat",
  },
  {
    quantity: 5,
    action: "Wspartych organizacji",
    decript:
      "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat voluptat",
  },
  {
    quantity: 7,
    action: "Zorganizowanych zbiorek",
    decript:
      "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat voluptat",
  },
];

export const ThreeColumns = () => {
  return (
    <div className={styles.container}>
      {state.map((obj) => (
        <div className={styles.column}>
          <h1>{obj.quantity}</h1>
          <span>{obj.action}</span>
          <p>{obj.decript}</p>
        </div>
      ))}
    </div>
  );
};
