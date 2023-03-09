import styles from "./button.module.scss";

const Button = ({ texto }) => {
  return <div className={styles.btn}>{texto}</div>;
};

export default Button;
