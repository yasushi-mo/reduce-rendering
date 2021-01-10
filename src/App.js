import React from "react";
import './App.css';

const Child = React.memo(props => {
  console.log("render Child");
  return <button onClick={props.handleClick}>Child</button>
});

function App() {
  console.log("render App");
  const [count, setCount] = React.useState(0);
  // const [count2, setCount2] = React.useState(0);

  const handleClick = React.useCallback(() => {
    console.log("click");
  }, []);

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>countup App count</button>
      {/* <button onClick={() => setCount2(count2 + 1)}>countup Child count</button> */}
      {/* <p>App: {count}</p> */}
      {/* <Child count={count2} /> */}
      <Child handleClick={handleClick} />
    </>
  );
}

export default App;
