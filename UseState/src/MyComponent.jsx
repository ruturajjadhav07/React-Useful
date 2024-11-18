// if we want to use react hook we need to import library
// useState is function
import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");

  const [age, setAge] = useState(0);

  const [employee, setEmployee] = useState(false);

  const updateName = () => {
    setName("SpongeBob");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const isEmployee = () => {
    setEmployee(!employee);
  };

  return (
    <div className="main-body">
      <p>Name: {name}</p>
      <button onClick={updateName}>set Name</button>
      <p>Age: {age}</p>
      <button onClick={updateAge}>set Age</button>
      <p>isEmployee: {employee ? "Yes" : "No"}</p>
      <button onClick={isEmployee}>isEmployee </button>
    </div>
  );
}

export default MyComponent;
