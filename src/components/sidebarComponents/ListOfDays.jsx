import { useWorkout } from "../../contexts/WorkoutContext";
import DayElement from "./DayElement";

function ListOfDays() {
  // const [searchQuery, setSearchQuery] = useSearchParams();
  // const selectedDay = Number(searchQuery.get("id"));
  const { days, selectedDay } = useWorkout();
  return (
    <div>
      {days.map((day) => (
        <DayElement selectedDay={selectedDay} day={day} key={day.id} />
      ))}
    </div>
  );
}

export default ListOfDays;
