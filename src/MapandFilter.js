import React, { useEffect, useState } from "react";

const MapandFilter = () => {
  const [users, setUsers] = useState([]);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const startFetching = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      const result = await data.json();
      setUsers(result);
      //console.log(result);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    startFetching();
  }, []);

  const mapData = () => {
    const mappedArray = users.map((user) => user.id * 2);
    console.log(mappedArray);
  };

  //    const mapData = () => {
  //      let square = numbers.map((number) => (
  //         return number*number;
  //      ))
  //    };

  /**
   * Lets say we want to see only those name staret from the "A", how do we do that?
   * We'll filter the data.
   */
  const filterDataF = () => {
    let filteredData = users.filter((user) => {
      //return user.name.includes("a");
      return user.id < 7;
    });
    //console.log(filteredData);
    setUsers(filteredData);
  };

  return (
    <div className="App">
      {/* <h1>Users</h1>
      <div className="card">
        {users.map((user) => (
          <div className="card-inner" key={user.id}>
            <p>{user.name}</p>
            <p>{user.id}</p>
          </div>
        ))}
      </div> */}
      <h2>Numbers</h2>
      <div className="number">
        <div className="card-inner" key={numbers.id}>
          {numbers}
        </div>
      </div>

      <button style={{ marginTop: "50px" }} onClick={mapData}>
        See Mapped Array
      </button>
      <button style={{ marginTop: "50px" }} onClick={filterDataF}>
        See Filtered Array
      </button>
    </div>
  );
};

export default MapandFilter;
