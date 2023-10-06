import "./App.css";
import Card from "./components/Card";
import datos from "./datos";

function App() {
  return (
    <div className="App">
      <h1>EMOJIPEDIA</h1>
      {datos.map((dato) => {
        return (
          <Card
            img={dato.imgURL}
            name={dato.name}
            description={dato.description}
          ></Card>
        );
      })}
    </div>
  );
}

export default App;
