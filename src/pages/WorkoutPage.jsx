import styles from "./WorkoutPage.module.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebarComponents/Sidebar";
import WorkoutScreen from "../components/WorkoutScreen";
import { WorkoutProvider } from "../contexts/WorkoutContext";

function WorkoutPage() {
  return (
    <WorkoutProvider>
      <Navbar />
      <div className={styles.container}>
        <Sidebar />
        <WorkoutScreen />
      </div>
    </WorkoutProvider>
  );
}

export default WorkoutPage;
