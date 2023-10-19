import React, { useState } from "react";
import Child from "./Child";

const Props = () => {
  const [name, setName] = useState("petek");
  const changeName = (value) => {
    console.log(value);
    setName("ali");
  };

  return (
    <div>
      <Child valueOfProps={name} otherOne={changeName} />
      <button onClick={() => setName("emre")}>change the name(parent)</button>
    </div>
  );
};

export default Props;
