import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    const meridiem = hours > 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // it is now 12 hour clock.

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${meridiem}`;
  }

  function addZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="container">
      <div className="clock">
        <span>{getTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
