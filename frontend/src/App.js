import React from "react";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import HomeScreen from "./Screen/HomeScreen.js";
import ContactScreen from "./Screen/ContactScreen.js";
import ProductScreen from "./Screen/ProductScreen.js";
import {Router, Route, Routes} from "react-router-dom";
import "./index.css";
import "./bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import AboutScreen from "./Screen/AboutScreen.js";
import CategoryShopScreen from "./Screen/CategoryShopScreen.js";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/product/:category" element={<CategoryShopScreen />} />
        <Route path="/product/:category/:id" element={<ProductScreen />}/>
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/about" element={<AboutScreen/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
