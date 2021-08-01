const Date = ({ date }) => {
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return (
    <ul className="expense-date">
      <li> {month} </li>
      <li> {day} </li>
      <li> {year} </li>
    </ul>
  );
};

export default Date;
