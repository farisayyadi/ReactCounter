import { Button } from "../button/button";
import "./counter.scss";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  let color = "#fff";
  if (count >= 1) {
    color = "rgb(0, 255, 0)";
  } else if (count < 0) {
    color = "rgb(255, 136, 0)";
  } else {
    color = "#fff";
  }
  return (
    <section className="counter">
      <h1>React Counter App</h1>
      <p style={{ color: color }}>{count}</p>
      <div className="button">
        <Button name={"- Subtract"} onClick={() => setCount(count - 1)} />
        <Button name={"! Reaset"} onClick={() => setCount(0)} />
        <Button name={"+ Add"} onClick={() => setCount(count + 1)} />
      </div>
    </section>
  );
};
