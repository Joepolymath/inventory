import logo from './logo.svg';
import './App.css';
import Info from './Info';
import { AddItem } from './Info';
import { useState } from 'react'


function App() {
  return (
    <div className="App">
      <h1>Hello from Josh</h1>
      <p>I am loving React</p>
      <Info />
      <ButtonState />
    </div>
  );
}

// study on react state
// this is me playing around with state


function ButtonState(){
  const [title, setTitle] = useState("");
  const [titleCount, setTitleCount] = useState(0)
  const [count, setCount] = useState(0);

  const changeTitle = () =>{
    setTitle("Here is the new title");
    setTitleCount(titleCount+1)
  };

  const addCount = () =>{
    setCount(count + 1);
  };

  const subtractCount = () =>{
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      {/* without props */}
      <p>Title: {title} {titleCount} times</p>
      <p>Count: {count}</p>

      {/* with props */}
      <Data title={title} titleCount={titleCount} count={count} />
      <button onClick={changeTitle}>Change Title</button>
      <button onClick={addCount}>Increase Count</button>
      <button onClick={subtractCount}>Decrease Count</button>
    </div>
  )
}

// using props 

function Data(props){
  return (
    <div>
      <p>Title with props: {props.title}, clicked {props.titleCount} times.</p>
      <p>Count with props: {props.count}</p>
    </div>
  )
}

export default App;
