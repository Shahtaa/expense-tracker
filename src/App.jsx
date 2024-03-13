// App.jsx
import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Expense Tracker</h1>
      </div>
      <div className="form-container">
        <ExpenseForm addExpense={addExpense} />
      </div>
      <div className="expense-list">
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      </div>
    </div>
  );
}

export default App;
