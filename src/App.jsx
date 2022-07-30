import "./App.css";
import "../src/assets/Icons/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Pages/Header";
import HeaderContact from "./Pages/Header/HeaderContact";
import { Route, Routes } from "react-router-dom";
import Footer from "./Pages/Footer";
import Home from './Pages/Home/index';
import About from './Pages/About/index';
import Contact from './Pages/Contact/index';
import Shop from './Pages/Shop/index';


function App() {
  return (
    <div className="App">
      <HeaderContact />
      <Header />
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
