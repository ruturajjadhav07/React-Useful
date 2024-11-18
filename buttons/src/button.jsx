function button() {
  const handleClick1 = () => console.log("Ouch");

  const handleClick2 = (name) => console.log(`${name} stop clicking me`); // sending arguments to function

  let count = 0;
  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} times`);
    } else {
      console.log(`${name} stop clicking me`);
    }
  };
  return (
    <button className="button" onClick={() => handleClick("Ruturaj")}>
      Click Me 😗
    </button>

    // <button className="button" onClick={() =>handleClick2 ("Ruturaj")}>
    //   Click Me 😗
    // </button>
  );
}

export default button;
