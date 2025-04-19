import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom"; // Only import here

import "./App.css";
import Navbar from "./components/navbar";
import TextForm from "./components/textform";
import Alert from "./components/alert";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 1500);
  };

  const setTheme = (theme) => {
    setMode(theme);
    switch (theme) {
      case "dark":
        document.body.style.backgroundColor = "#032744";
        document.body.style.color = "white";
        showAlert("Dark Mode enabled", "success");
        break;
      case "light":
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("Light Mode enabled", "success");
        break;
      case "green":
        document.body.style.backgroundColor = "#013220";
        document.body.style.color = "white";
        showAlert("Green Mode enabled", "success");
        break;
      case "yellow":
        document.body.style.backgroundColor = "#fff9d6";
        document.body.style.color = "#333";
        showAlert("Yellow Mode enabled", "success");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar
        title="textutils2"
        aboutText="About us"
        mode={mode}
        setTheme={setTheme}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
