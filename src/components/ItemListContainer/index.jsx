import styles from "./itemListContainer.module.scss";

const ItemListContainer = ({ greeting }) => {
  return <div className={styles.frase}>{greeting}</div>;
};

export default ItemListContainer;
