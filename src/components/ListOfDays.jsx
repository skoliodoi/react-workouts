function CodeList({ codes }) {
  return (
    <ul>
      {codes.map((el) => (
        <li key={el.day}>{el.day}</li>
      ))}
    </ul>
  );
}

export default CodeList;
