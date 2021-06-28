import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const [year, filterYear] = useState("2020");
  const changedDate = (filteredYear) => {
    filterYear(filteredYear);
    console.log(filteredYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} filterExpenses={changedDate} />
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
