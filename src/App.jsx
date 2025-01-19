import React, { useState, useEffect } from "react";
    import "./index.css";
    import Navbar from "./Components/Navbar";
    import CgpaForm from "./Components/CgpaForm";
    import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
    import Home from "./Components/Home";
    import LabManual from "./Components/LabManual";

    function App() {
      const [isDarkMode, setIsDarkMode] = useState(false);

      useEffect(() => {
        if (isDarkMode) {
          document.body.classList.add("dark-theme");
        } else {
          document.body.classList.remove("dark-theme");
        }
      }, [isDarkMode]);

      const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
      };

      return (
        <Router>
          <div className="app-container">
            <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <div className="content-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cgpa-calculator" element={<CgpaForm />} />
                <Route path="/lab-manual" element={<LabManual />} />
              </Routes>
            </div>
          </div>
        </Router>
      );
    }

    export default App;
