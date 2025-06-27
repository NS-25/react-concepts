import React from "react";
import { useState, useReducer } from "react";
import "./Reducer.css";

// function ReducerExample() {
//   const [count, setCount] = useState(0);
//   const [userInput, setUserInput] = useState("");
//   const [color, setColor] = useState(false);
//   return (
//     <>
//       <main className="reduce-main">
//         <input
//           type="text"
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//         />
//         <br />
//         <br />
//         <p>{count}</p>
//         <section className="reduce-section">
//           <button onClick={() => setCount(count - 1)}>-</button>
//           <button onClick={() => setCount(count + 1)}>+</button>
//           <button onClick={() => setColor(!color)}>Color</button>
//         </section>
//         <br />
//         <br />
//         <p>{userInput}</p>
//       </main>
//     </>
//   );
// }

// export default ReducerExample;

// create a reducer function.

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    default:
      throw new error();
  }
};

function ReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [userInput, setUserInput] = useState("");
  const [color, setColor] = useState(false);
  return (
    <>
      <main className="reduce-main">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <br />
        <br />
        <p>{count}</p>
        <section className="reduce-section">
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setColor(!color)}>Color</button>
        </section>
        <br />
        <br />
        <p>{userInput}</p>
      </main>
    </>
  );
}

export default ReducerExample;
