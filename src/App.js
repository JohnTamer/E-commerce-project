import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* home  */}
      <Home />
    </div>
  );
}

export default App;
