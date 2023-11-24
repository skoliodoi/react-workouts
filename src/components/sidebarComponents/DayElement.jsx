import { Link } from "react-router-dom";

function DayElement({ day, selectedDay }) {
  const isSelected = selectedDay === day.id;
  return (
    <div>
      <Link
        to={`?id=${day.id}&first=${day.first}&second=${day.second}&third=${
          day.third ? day.third : null
        }`}
      >{`${day.day}${isSelected ? " -selected" : ""}`}</Link>
    </div>
  );
}

export default DayElement;
