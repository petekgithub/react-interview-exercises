import React, { useState } from "react";

const States = () => {
  //let count = 0;
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [array, setArray] = useState([
    {
      name: "petek",
      age: 26,
    },
    {
      name: "emre",
      age: 23,
    },
  ]);

  const [object, setObject] = useState({
    name: "petek",
    age: 26,
  });

  const increment = () => {
    // count += 1;
    // console.log(count);
    setCount(count + 1);

    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>{count}</h1>
      {isVisible ? <h1>Visible</h1> : <h1>Not Visible</h1>}
      <button onClick={increment}>increment the count</button>
    </div>
  );
};

export default States;
