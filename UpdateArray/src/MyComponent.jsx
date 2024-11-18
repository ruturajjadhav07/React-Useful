import React, { useState } from "react";

function MyComponent() {
  const [food, setFood] = useState(["Apple", "Banana", "Orange"]);

  function addItem() {
    const newFood = document.getElementById("addItem").value;
    document.getElementById("addItem").value = "";
    // setFood([...food, newFood]);
    setFood((f) => [...f, newFood]);
  }

  function removeItem(index) {
    setFood(food.filter((_, i) => i !== index));
  }
  return (
    <div>
      <h1>List of Foods</h1>
      <ul>
        {food.map((food, index) => (
          <li key={index} onClick={() => removeItem(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="addItem" placeholder="Add Item" />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default MyComponent;
