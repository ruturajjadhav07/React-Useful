function Food() {
  const Fruit1 = "Banana";
  const Fruit2 = "Mango";
  return (
    <ul>
      <li>Apple</li>
      <li>{Fruit1}</li>
      <li>{Fruit2.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
