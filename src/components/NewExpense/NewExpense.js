import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [formToggle, setFormToggle] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormToggle(false)
  };

  const cancelFormToggle = () => {
    setFormToggle(false);
  };

  // Show a form if they activate it with the button
  if (formToggle === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelFormToggle={cancelFormToggle}
        />
      </div>
    );
  }
  //Otherwise if they don't want to edit, it displays a button to open the form.
  if (formToggle === false) {
    return (
      <div className="new-expense">
        <button onClick={() => setFormToggle(true)}>Add New Expense</button>
      </div>
    );
  }
};

export default NewExpense;
