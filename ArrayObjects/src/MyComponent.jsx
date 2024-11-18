import React, { useState } from "react";
function MyComponent() {
  const [car, setCar] = useState([]);
  const [carYear, setYear] = useState(new Date().getFullYear());
  const [carMake, setMake] = useState("");
  const [carName, setName] = useState("");

  function addCar() {

    const newCar = {year:carYear,
                    make:carMake,
                    name:carName
    }

    setCar((c) =>[... c, newCar])

    setYear(new Date().getFullYear())
    setMake("")
    setName("")
  }

  function removeCar(index) {
    setCar(c => c.filter((_,i) => i !== index))
  }

  function changeYear(e) {
    setYear(e.target.value)
  }

  function changeMake(e) {
    setMake(e.target.value)
}

  function changeModel(e) {
    setName(e.target.value)
}

  return (<div>
    <h1>List of Cars</h1>
    <ul>{car.map((car,index) =><li key={index} onClick={() => removeCar(index)}>{car.year} {car.make} {car.name}</li>)}</ul>
    <input placeholder="year" type="number" onChange={changeYear} value={carYear}/><br/>
    <input placeholder="make" type="text" onChange={changeMake} value={carMake}/><br/>
    <input placeholder="model" type="text" onChange={changeModel} value={carName}/>
    <button onClick={addCar}>Add Car</button>
  </div>);
}
export default MyComponent
