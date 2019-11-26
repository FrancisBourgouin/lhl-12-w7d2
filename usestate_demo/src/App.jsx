import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const consoleThatThing = event => console.log(event.target.value)

function SuperButton(props) {
  const {onAndOff, setOnAndOff} = props

  return(
    <div>
      {onAndOff && <button onClick={() => setOnAndOff(prevState => !prevState)}>I AM ON</button>}
      {!onAndOff && <button onClick={() => setOnAndOff(prevState => !prevState)}>I AM OFF</button>}
    </div>
  )
}


function App() {

  const [name, setName] = useState("Francis")
  const [groceryList, setGroceryList] = useState([])
  const [groceryListItem, setGroceryListItem] = useState("")
  const [onAndOff, setOnAndOff] = useState(true)

  const manageGroceryList = event => {
    event.preventDefault()
    setGroceryList(prevState => [...prevState, groceryListItem])
  }

  return (
    <div className="App">
      <header onClick={() => setOnAndOff(prevState => !prevState)}>
        { name && <h1>Let's play with the state in React, {name}</h1> }
        { !name && <h1>Let's play with the state in React</h1> }
      </header>
      <h2>Let's make:</h2>
      {onAndOff && <h3>Name</h3>}
        <input 
          type="text" 
          name="username" 
          placeholder="Enter your name" 
          onChange={event => setName(event.target.value)} 
          value={name}>
        </input>
      <h3>Grocery List</h3>
      <p>{groceryList}</p>
        <form action="" onSubmit={manageGroceryList}>
          <input type="text" name="groceryListItem" onChange={event => setGroceryListItem(event.target.value)} value={groceryListItem}/>
        </form>
      <h3>On / Off button</h3>
      <SuperButton onAndOff={onAndOff} setOnAndOff={setOnAndOff}/>
    </div>
  );
}

export default App;
