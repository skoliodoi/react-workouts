import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.greetings}>Cześć, X!</div>
      <div className={styles.progress}>
        <span>Twój progres: X zaliczonych dni z X</span>
      </div>
    </nav>
  );
}

export default Navbar;
