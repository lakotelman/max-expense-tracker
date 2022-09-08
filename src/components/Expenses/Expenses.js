import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020")

  const handleFilter =(setYear) => {
    setFilterYear(setYear)
  }

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onFilterChange={handleFilter} selected={filterYear}/>
        {props.expenses.map((e, idx) => {
          return <ExpenseItem title={e.title} date={e.date} amount={e.amount} key={idx}/>;
        })}
      </Card>
    </div>
  );
}

export default Expenses;
