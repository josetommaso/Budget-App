import React, { useState } from 'react';

const Form = () => {
    const [ expensename, setExpenseName ] = useState('');
    const [ expenseamount, setExpenseAmount ] = useState(0);

    // when user add an expense
    const addExpense = e => {
        e.preventDefault();

        // validation

        //build the expense

        //send the expense to the main component

        //reset form
    }

    return (

        <form
            onSubmit={addExpense}
        >
            <h2>Add your expenses here</h2>
            <div className="campo">
                <label>Expense</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="E.g. Petrol"
                    value={expensename}
                    onChange={e => setExpenseName(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Amount</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="E.g. 40"
                    value={expenseamount}
                    onChange={e => setExpenseAmount(parseInt(e.target.value))}
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Add Expense"
            />
        </form>
     );
}
 
export default Form;
