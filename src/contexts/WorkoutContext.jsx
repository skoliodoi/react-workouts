import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { videoData } from "../assets/links";

const WorkoutContext = createContext();

function WorkoutProvider({ children }) {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const selectedDay = Number(searchQuery.get("id"));
  const urls = {
    first: searchQuery.get("first"),
    second: searchQuery.get("second"),
    third: searchQuery.get("third"),
  };

  return (
    <WorkoutContext.Provider
      value={{
        days: videoData,
        searchQuery,
        selectedDay,
        urls,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

function useWorkout() {
  const value = useContext(WorkoutContext);
  return value;
}

export {WorkoutProvider, useWorkout}