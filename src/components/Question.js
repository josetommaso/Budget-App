import { Fragment, useState } from 'react';
import Error from './Error';

const Question = ({ setBudget, setRemaining, updateQuestion }) => {
    const [ budgetAmount, setBudgetAmount ] = useState(0);
    const [ error, setError ] = useState(false);

    //function that read the budget
    const addBudget = e => {
        setBudgetAmount(parseInt(e.target.value), 10);
    }

    // Submit to define the budget
    const defineBudget = e => {
        e.preventDefault();
        
        // Validation
        if(budgetAmount < 1 || isNaN(budgetAmount)) {
            setError(true);
            return;
        }

        // If valid
        setError(false);
        setBudget(budgetAmount);
        setRemaining(budgetAmount)
        updateQuestion(false);

    }

    return ( 
        <Fragment>
            <h2>Add your weekly budget</h2>

            { error ? <Error message="The budget is incorrect" /> : null }

            <form
                onSubmit={defineBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Weekly budget"
                    onChange={addBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    vlaue="Add budget"
                />
            </form>
        </Fragment>
     );
}
 
export default Question;