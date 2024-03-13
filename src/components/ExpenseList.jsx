// ExpenseList.jsx
import ExpenseItem from './ExpenseItem'; // Updated import path

function ExpenseList({ expenses, deleteExpense }) {
    return (
        <div>
            <h2>Expenses</h2>
            <ul>
                {expenses.map((expense) => (
                    <ExpenseItem key={expense.id} expense={expense} deleteExpense={deleteExpense} />
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;
