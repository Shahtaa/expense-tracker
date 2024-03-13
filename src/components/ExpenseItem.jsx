// ExpenseItem.jsx

function ExpenseItem({ expense, deleteExpense }) {
    const handleClick = () => {
        deleteExpense(expense.id);
    };

    return (
        <li className="expense-item">
            <span>{expense.name}</span>
            <span>{expense.amount}€</span> {/* Update here */}
            <button onClick={handleClick}>Delete</button>
        </li>
    );
}

export default ExpenseItem;
