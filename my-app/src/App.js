import ClassComponent from "./mycomponent/ClassComponent";
import Navbar from "./mycomponent/Navbar.js";
import ProductList from "./mycomponent/ProductList.js";
import PropsDemo from "./mycomponent/PropsDemo.js";
import StateDemo from "./mycomponent/StateDemo.js";
import PropsValidation from "./mycomponent/PropsValidation.js";
import HooksDemo from "./mycomponent/HooksDemo.js";
import EventHandlingWithFC from "./mycomponent/EventHandlingWithFC.js";
import Home from "./mycomponent/routing/Home.js";
import Login from "./mycomponent/routing/Login.js";
import About from "./mycomponent/routing/About.js";
import ContactUs from "./mycomponent/routing/ContactUs.js";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import UseStateWithObject from "./mycomponent/hooks/UseStateWithObject.js";
import { UseMyCustomHook } from "./mycomponent/hooks/MyCustomHook.js";

function App() {
  let prodList = [
    { name: "iphone", price: 50 },
    { name: "Redmi", price: 10 },
    { name: "Samsung", price: 40 },
  ];
  const [n,setN]=UseMyCustomHook(0);
  return (
    <>
      <Navbar></Navbar>
      <h3>{n}</h3>
      <button onClick={setN}>add</button>
      <UseStateWithObject/>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact Us</Link>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={ContactUs} />
          <Route path="/login" Component={Login} />
        </Routes>
      </BrowserRouter>
      <EventHandlingWithFC />
      <HooksDemo />
      <ClassComponent></ClassComponent>
      <PropsDemo name="Azam"></PropsDemo>
      <PropsValidation name={10} />
      <StateDemo name="Rohit" />
      <ProductList prodList={prodList}></ProductList>
    </>
  );
}

export default App;
