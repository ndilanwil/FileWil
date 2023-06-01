import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import {useState, useEffect} from "react"
import {Welcome}  from "./pages/WelcomePage/Welcome"
import {Login} from "./pages/Login/Login"
import {Home} from "./pages/HomePage/Home"
import {Settings} from "./pages/Settings/Settings"

function App() {
  const [authed, setAuthed] = useState(true);
  useEffect(() => {
    let accept;
    let test = localStorage.getItem("username");
    console.log(test);
    if(test!==null){
      accept = false;
      setAuthed(accept);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={authed ? <Navigate to="/login" /> : <Home />} />
        <Route path="/settings" element={authed ? <Navigate to="/login" /> : <Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
