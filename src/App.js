import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {

  const [ budget, setBudget ] = useState(0);
  const [ remaining, setRemaining ] = useState(0);
  const [ showquestion, updateQuestion ] = useState(true);
  const [ expenses, setExpenses ] = useState([]);
  const [ expense, setExpense ] = useState({});
  const [ createExpense, setCreateExpense ] = useState(false);

  // UseEffect that updates the remaining 
  useEffect(() => {
    //add new budget amount
    if(createExpense) {
      setExpenses([
        ...expenses,
        expense
      ]);

      // subtraction from the budget
      const remaningBudget = remaining - expense.expenseamount;
      setRemaining(remaningBudget);

      // reset to false
      setCreateExpense(false);
    }
  }, [expense])

  

  return (
    <div className="container">
      <header>
        <h1>Weekly Expense</h1>
        <div className="contenido-principal contenido">
          { showquestion ? 
            (
              <Question
              setBudget={setBudget}
              setRemaining={setRemaining}
              updateQuestion={updateQuestion}
            />
            )
            :
            (
            <div className="row">
              <div className="one-half column">
                <Form 
                  setExpense={setExpense}
                  setCreateExpense={setCreateExpense}
                />
              </div>
              <div className="one-half column">
                <List 
                  expenses={expenses}
                />
                <BudgetControl 
                  budget={budget}
                  remaining={remaining}
                />
              </div>
            </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
