import Card from "./components/Card";
import NavBar from "./components/NavBar";

const App = () => {
  const user = "Sarthak";
  const age = 89;
  return (
    <div>
      <div>
        <NavBar />
        <NavBar />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default App;
