/** @format */

import React, { useState } from 'react';

const ExpenceTracker = () => {
  const [expenses, setExpenses] = useState([]);

  function addExpense(e) {
    e.preventDefault();
    const item = prompt('Enter the Item');
    const amount = parseFloat(prompt('Enter the amount'));

    if (!item || isNaN(amount)) {
      alert('Please enter valid item and amount');
      return;
    }

    const newExpense = {
      id: Date.now(),
      item,
      amount,
    };

    setExpenses((prev) => [...prev, newExpense]);
  }

  function deleteExpense(id) {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  }

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div>
      <button onClick={addExpense}> Add Expense</button>
      <div>
        {expenses.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          expenses.map((exp) => (
            <div key={exp.id}>
              <h3>{exp.item}</h3>
              <h4>{exp.amount}</h4>
              <button
                onClick={() => {
                  deleteExpense(exp.id);
                }}
              >
                X
              </button>
            </div>
          ))
        )}

        {/* <h3>Cola</h3>
        <h4>$15</h4>
        <button onClick={deleteExpense}>X</button> */}
      </div>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default ExpenceTracker;
