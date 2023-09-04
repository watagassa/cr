import React, { useState } from "react";
import './App.css'
import Sidebar from "./components/Sidebar";
import ImageUploader from "./ImageUploader";
import GetImage from "./GetImage"
// async 
function App() {
  if (window.location.pathname == "/") {
    return (
      <div className="App" >
        <GetImage />
        <Sidebar />
      </div>
    );
  } else if (window.location.pathname == "/PostingScreen") {
    return (
      <div className="Post">
        {/* uplodaer */}
        < ImageUploader />
        <Sidebar />
      </div>
    );
  }
};
export default App;


