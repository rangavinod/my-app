import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveHandler = (expensedData) => {
    const updatedData = { ...expensedData, id: Math.random().toString };
    props.onAddExpense(updatedData);
    console.log(updatedData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveEnteredData={saveHandler} />;
    </div>
  );
}

export default NewExpense;
