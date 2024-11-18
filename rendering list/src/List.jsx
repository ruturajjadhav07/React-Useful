function List() {


//   const fruits = [
//     { id: 1, name: "apple", calories: 96 },
//     { id: 2, name: "banana", calories: 86 },
//     { id: 3, name: "grapes", calories: 93 },
//     { id: 4, name: "berry", calories: 79 },
//     { id: 5, name: "watermelon", calories: 53 },
//     { id: 6, name: "orange", calories: 61 },
//   ];

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); // lexo
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse lexo
  //   fruits.sort((a,b) => a.calories -b.calories) // low to high
  //   fruits.sort((a, b) => b.calories - a.calories); // high to low

  //below function is for above 90

  //   const highcalFruits = fruits.filter((fruit) => fruit.calories > 90);
  //   const calFruits = highcalFruits.map((highcalFruits) => (
  //     <li key={highcalFruits.id}>
  //       {highcalFruits.name}: &nbsp; {highcalFruits.calories}
  //     </li>
  //   ));
  //   return <ol>{calFruits}</ol>;

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; {fruit.calories}
    </li>
  ));
  return <ol>{listItems}</ol>;



  
}

export default List;
