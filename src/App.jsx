import React, { useState } from "react";
import './App.css'
import Sidebar from "./components/Sidebar";
import ImageUploader from "./ImageUploader";
function App() {
  if (window.location.pathname == "/HomeScreen") {
    return (
      <div className="App" >
        {/* uplodaer */}
        < ImageUploader />
        <Sidebar />
      </div>
    );
  } else if (window.location.pathname == "/PostingScreen") {
    return (
      <div className="Post">
        {/* uplodaer */}
        <Sidebar />
      </div>
    );
  }
};
export default App;


