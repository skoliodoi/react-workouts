import { useWorkout } from "../contexts/WorkoutContext";
import styles from "./WorkoutScreen.module.css";

function WorkoutScreen() {
  const {
    urls: { first, second, third },
  } = useWorkout();
  return (
    <div className={styles.workout}>
      Workout Screen
      <p> First - {first}</p>
      <p> Second - {second}</p>
      {third != "null" && <p> Third - {third}</p>}
    </div>
  );
}

export default WorkoutScreen;
