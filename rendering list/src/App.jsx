import List from "./List.jsx";
function App() {
  const fruits = [
                    { id: 1, name: "apple", calories: 96 },
                    { id: 2, name: "banana", calories: 86 },
                    { id: 3, name: "grapes", calories: 93 },
                    { id: 4, name: "berry", calories: 79 },
                    { id: 5, name: "watermelon", calories: 53 },
                    { id: 6, name: "orange", calories: 61 },
  ];
  return <List items={fruits} category="Fruits" />;
}

export default App;
