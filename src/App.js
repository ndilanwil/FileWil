import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import {Welcome}  from "./pages/WelcomePage/Welcome"
import {Login} from "./pages/Login/Login"
import {Home} from "./pages/HomePage/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
