import React from "react";
import { useState } from "react";

function Reducer() {
  const [count, setCount] = useState(0);
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
          <button>-</button>
          <button>+</button>
          <button>Color</button>
        </section>
        <br />
        <br />
        <p>{userInput}</p>
      </main>
    </>
  );
}

export default Reducer;
