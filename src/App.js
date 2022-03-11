import "./App.css";
import Header from "./components/header";
import List from "./pages/list";

function App() {
  console.log("app");
  return (
    <div className="App">
      <Header />
      <List />
    </div>
  );
}

export default App;
