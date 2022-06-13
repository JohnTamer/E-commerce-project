import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Checkout from "./components/checkout/checkout";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// {/* <Router>
//       <div className="app">
//         <Routes>
//           <Route path = "/" element={[<Header />, <Home />]} />
//           <Route path="/checkout" element={<Header />, <Checkout />} />
//           <Route path = "/login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router> */}
