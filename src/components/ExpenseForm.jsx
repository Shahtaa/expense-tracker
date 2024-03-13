// ExpenseForm.jsx
import { useState } from 'react';

function ExpenseForm({ addExpense }) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || amount <= 0) return;
        const expense = {
            id: Math.random().toString(36).substring(2, 11), // Update here
            name,
            amount: +amount,
        };
        addExpense(expense);
        setName('');
        setAmount(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Expense Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;
