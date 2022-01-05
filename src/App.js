import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/App.css";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Checkout from "./components/CheckOut";
import PlacedOrder from "./components/PlacedOrder";
import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import HeroImage from "./components/HeroImg";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("logged_in"))
  );
  const [items, setitems] = useState(JSON.parse(localStorage.getItem("items")));
  const handleChangeRole = () => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("logged_in")));
  };
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HeroImage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/placedOrder" element={<PlacedOrder />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/account"
          element={<Login handleChangeRole={handleChangeRole} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
