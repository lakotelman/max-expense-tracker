import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import { ExpensesList } from "./ExpensesList";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const handleFilter = (setYear) => {
    setFilterYear(setYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterChange={handleFilter} selected={filterYear} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
