import React, { useState } from "react";
import "./App.css";
import JsonData from ".data.json";

const App = () => {
  const [users, setUsers] = useState(JsonData.slice(0, 20));

  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div className="user">
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
            <h3>{user.email}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default App;
