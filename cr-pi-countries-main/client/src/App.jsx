import style from "./App.module.css";
import Home from "./Views/Home/Home.jsx";
import Landing from "./Views/Landing/Landing.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";


const App = () => {
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
