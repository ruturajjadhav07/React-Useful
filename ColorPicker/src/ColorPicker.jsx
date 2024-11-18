import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function ColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="container">
      <h1>Color Picker</h1>
      <div className="color" style={{ backgroundColor: color }}>
        <p>Selected Color : {color}</p>
      </div>
      <label>select a color</label>
      <input value={color} type="color" onChange={ColorChange} />
    </div>
  );
}

export default ColorPicker;
