import React from "react";

const Child = ({ valueOfProps, otherOne }) => {
  return (
    <div>
      <h1>{valueOfProps}</h1>
      <button onClick={otherOne}>change the name(child)</button>
    </div>
  );
};

export default Child;
