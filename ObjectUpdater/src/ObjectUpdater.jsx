import React, { useState } from "react";

function Update() {
  const [car, setCar] = useState({ year: 1966, make: "Ford", car: "Mustang" });

  function handleChangeYear(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleChangeMake(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleChangeCar(event) {
    setCar((c) => ({ ...c, car: event.target.value }));
  }

  return (
    <div>
      <p>
        Your Favorite cars is: {car.year} {car.make} {car.car}{" "}
      </p>
      <input type="number" value={car.year} onChange={handleChangeYear} />
      <br />
      <input type="text" value={car.make} onChange={handleChangeMake} />
      <br />
      <input type="text" value={car.car} onChange={handleChangeCar} />
    </div>
  );
}

export default Update;
