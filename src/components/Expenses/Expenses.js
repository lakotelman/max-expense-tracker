import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((e, idx) => {
        return <ExpenseItem title={e.title} date={e.date} amount={e.amount} key={idx}/>;
      })}
    </Card>
  );
}

export default Expenses;
