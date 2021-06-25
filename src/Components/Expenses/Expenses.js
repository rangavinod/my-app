import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
function Expenses(props) {
  const [year, filterYear] = useState("2020");
  const changedDate = (filteredYear) => {
    filterYear(filteredYear);
    console.log(filteredYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} filterExpenses={changedDate} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
