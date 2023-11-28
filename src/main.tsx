import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

{/*
  The state hook allows us to add state to function components.

  Hooks can only be called at the top level of components.
  -State variables, unlike local variables in a function, stay in memory as long
  as the component is visible on the screen. This is because state is tied to the component
  instance, and React will destroy the component and its state when it is removed from
  the screen.
  -React updates state in an asynchronous way, so updats are not applied immediately. Instead,
  they're batched and applied at once after all event handlers have finished execution.
  Once the state is updated, React rerenders the components.
  Group related state variables into an object to keep them organized.
  Avoid deeply nested objects as they can be hard to update and maintain.
  To keep state as minimal as possible, avoid redundant state variables that can be coomputed from 
  existing variables.
  - A pure function is one that always returns the same result given the same input. Pure functions
  should not modfy objects outside of the function.
  React expects our function components to be pure. A pure component should always return the same JSX given
  the same input. 
  -When updating objects or arrays, we should treat them as immutable objects. Instead of mutating them, we should create new objects or arrays
  to update them
  -To share state between components, we should lift the state up to the closest parent component and pass it 
  down as props to child components.
  -The component that holds some state should be the one that updates it. If a child component needs to update some state,
  it should notify the parent component using a callback function passed down as a prop.

  


  //UPDATING ARRAYS
  const [tags, setTags] = useState(['a', 'b']);

  ADDING
  setTags([...tags, 'c']);

  //Removing
  setTags(tags.filter(tag => tag !=='a'));

  //UPDATING
  setTags(tags.map(tag => tag === 'a', ? 'A': tag));

  
*/}
