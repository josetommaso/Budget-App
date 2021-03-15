import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';

function App() {

  const [ budget, setBudget ] = useState(0);
  const [ remaining, setRemaining ] = useState(0);
  const [ showquestion, updateQuestion ] = useState(true);
  const [ expenses, setExpenses ] = useState([]);

  //when adding a new expense
 const addNewExpense = expense => {
  setExpenses([
    ...expenses,
    expense
  ])
 }
  

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
                  addNewExpense={addNewExpense}
                />
              </div>
              <div className="one-half column">
                <List 
                  expenses={expenses}
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
