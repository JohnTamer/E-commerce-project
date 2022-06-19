import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Checkout from "./components/checkout/checkout";
import Login from "./components/login/login";
import Payment from "./components/payment/payment";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./services/stateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
  "pk_test_51LCHFQBxFpc2KRMYjz6AFd0HgfVIzOdRWYjxi2wTdioh9MkqdLZ7eLXqJpcy47zZXo8ooYklQlgdVaIlUvmtuRvO00PV3U8k4j"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is ", authUser);
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          />
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
