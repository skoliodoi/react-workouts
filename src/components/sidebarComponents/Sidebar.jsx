import ListOfDays from "./ListOfDays";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ListOfDays />
    </div>
  );
}

export default Sidebar;
