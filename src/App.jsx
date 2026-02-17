

import React from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";
function App() {
return (
  <>
  
  <Navbar/>
  {/* <Register/>
  <Login/> */}
  <Header/>
  <Home/>
  <Cart/>
  <Footer/>


  </>)



}
export default App;