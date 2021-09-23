import "./App.css";
import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  function ListItem(props) {
    return <li>{props.value}</li>;
  }

  function NumberList(props) {
    const numbers = props.numbers;
    let arr = [];

    for (let i = 1; i <= numbers; i++) {
      if (i % 15 === 0) {
        arr.push(`FizzBuzz`);
      } else if (i % 3 === 0) {
        arr.push(`Fizz`);
      } else if (i % 5 === 0) {
        arr.push(`Buzz`);
      } else {
        arr.push(i);
      }
    }

    const listItems = arr.map((number) => (
      <ListItem key={number.toString()} value={number} />
    ));
    return <ul>{listItems}</ul>;
  }

  return (
    <div className="App">
      <h3>Welcome to FizzBuzz Test App</h3>
      <h5>Type a number</h5>
      <input
        type="number"
        onChange={(event) => setNum(event.target.value)}
        name="input"
      />
      <NumberList numbers={num} />
    </div>
  );
}

export default App;
