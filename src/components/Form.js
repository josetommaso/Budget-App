import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({addNewExpense}) => {
    const [ expensename, setExpenseName ] = useState('');
    const [ expenseamount, setExpenseAmount ] = useState(0);
    const [ error, setError ] = useState(false);

    // when user add an expense
    const addExpense = e => {
        e.preventDefault();

        // validation
        if(expenseamount < 1 || isNaN(expenseamount) || expensename.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        //build the expense

        const expense = {
            expensename,
            expenseamount,
            id: shortid.generate()
        }

        //send the expense to the main component
        addNewExpense(expense);

        //reset form
        setExpenseName('')
        setExpenseAmount(0);
    }

    return (

        <form
            onSubmit={addExpense}
        >
            <h2>Add your expenses here</h2>
            { error ? <Error message="All fields are required or Amount is incorrect" /> : null }
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
                    step="0.01"
                    value={expenseamount}
                    onChange={e => setExpenseAmount(parseFloat(e.target.value))}
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
