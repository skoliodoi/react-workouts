import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.mainPage}>
      <main>
        <h1>This is Homepage</h1>
        <Link className="link" to={"workout"}>
          Go to workout
        </Link>
      </main>
    </div>
  );
}

export default Homepage;
