import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const SaveEditHandler = () => {
    setIsEditing(true);
  };
  const saveHandler = (expensedData) => {
    const updatedData = { ...expensedData, id: Math.random().toString };
    props.onAddExpense(updatedData);
    console.log(updatedData);
    setIsEditing(false);
  };

  const onCancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={SaveEditHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveEnteredData={saveHandler}
          onCancel={onCancelHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
