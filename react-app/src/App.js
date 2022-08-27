import './App.css';

/**
const [firstCity, secondCity, thirdCity] = ["Tokyo", "Tahoe City", "Bend"];

console.log("firstCity", firstCity);
console.log("secondCity", secondCity);
console.log("thirdCity", thirdCity);
*/

function App({ library }) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;