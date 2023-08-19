import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counter";
import "./styles.css";

export default function App() {
  // const [count, setCount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <span> Count : {count} </span>
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span> </span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
