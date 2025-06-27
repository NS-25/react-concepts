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
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "newUserInput":
      return { ...state, userInput: action.payload };
    case "tgColor":
      return { ...state, color: !state.color };
    default:
      throw new error();
  }
};

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  NEW_USER_INPUT: "newUserInput",
  TG_COLOR: "tgColor",
};

function ReducerExample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    useInput: "",
    color: false,
  });

  return (
    <>
      <main
        className="reduce-main"
        style={{ color: state.color ? "#fff" : "#fff952" }}>
        <input
          type="text"
          value={state.userInput}
          onChange={(e) =>
            dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
          }
        />
        <br />
        <br />
        <p>{state.count}</p>
        <section className="reduce-section">
          <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>
            -
          </button>
          <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>
            +
          </button>
          <button onClick={() => dispatch({ type: ACTION.TG_COLOR })}>
            Color
          </button>
        </section>
        <br />
        <br />
        <p>{state.userInput}</p>
      </main>
    </>
  );
}

export default ReducerExample;
