// onChange : event handler used primarily with form elements
// eg <input>,<textarea>,<select> and <radio>
// Triggers a function every time the value of the input is change

import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [gender, setGender] = useState("Select Gender");

  function nameChange(event) {
    setName(event.target.value);
  }

  function quantityChange(event) {
    setQuantity(event.target.value);
  }

  function changeComment(event) {
    setComment(event.target.value);
  }

  function changePayment(event) {
    setPayment(event.target.value);
  }

  function checkGender(event) {
    setGender(event.target.value);
  }
  return (
    <div>
      <input value={name} onChange={nameChange}></input>
      <p>Name : {name}</p>
      <input value={quantity} onChange={quantityChange} />
      <p>Quantity: {quantity}</p>
      <textarea value={comment} onChange={changeComment} />
      <p>Comment: {comment}</p>
      <select value={payment} onChange={changePayment}>
        <option value="">Select Options</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
      </select>
      <p>Payment: {payment}</p>
      <label >
        <input type="radio" value="Male" name="gender" onChange={checkGender}/>
        Male
      </label><br></br>
      <label>
        <input type="radio" value="Female" name="gender" onChange={checkGender}/>
        Female
      </label>
      <p>Gender: {gender}</p>
    </div>
  );
}

export default MyComponent;
