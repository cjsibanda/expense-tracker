import ExpenseList from "./expense-tracker/components/ExpenseList"
import React, { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([
    {id:1, description:'aaa', amount:10, category:'Utilities'},
    {id:2, description:'bbb', amount:10, category:'Utilities'},
    {id:3, description:'ccc', amount:10, category:'Utilities'},
    {id:4, description:'ddd', amount:10, category:'Utilities'},
    {id:5, description:'eee', amount:10, category:'Utilities'},
    {id:6, description:'fff', amount:10, category:'Utilities'},
  ]);

  return (
    <div className="main">
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !==id))}
      />
    </div>
  )
}

export default App;
