import styles from "./WorkoutPage.module.css";
import { videoData } from "../assets/links";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import WorkoutScreen from "../components/WorkoutScreen";
import ListOfDays from "../components/ListOfDays";

const codes = videoData;
function WorkoutPage() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Sidebar>
          <ListOfDays codes={codes} />
        </Sidebar>
        <WorkoutScreen />
      </div>
    </>
  );
}

export default WorkoutPage;
