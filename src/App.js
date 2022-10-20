import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ContectUs from "./components/ContectUs";
import Headline from "./components/Headline";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Headline" element={<Headline />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContectUs" element={<ContectUs />} />
      </Routes>
    </div>
  );
}

export default App;
