import styles from "./navbar.module.scss";
import CartWidget from "./CartWidget";
const Navbar = ({ logo }) => {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.imgLogo} alt="logo cara de gatito" />
      <a href="#" className={styles.items}>
        Home
      </a>
      <a href="#" className={styles.items}>
        Products
      </a>
      <a href="#" className={styles.items}>
        About
      </a>
      <a href="#" className={styles.items}>
        Contact
      </a>
      <CartWidget carrito="../../../img/carrito.png" />
    </div>
  );
};

export default Navbar;
