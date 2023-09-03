import React, { useState } from "react";
import './App.css'
import Sidebar from "./components/Sidebar";
import ImageUploader from "./ImageUploader";
import GetImage from "./GetImage"
// async 
function App() {
  const [urlChange, Changed] = useState(false);
  if (window.location.pathname == "/" && urlChange == false) {
    return (
      <div className="App" >
        {/* uplodaer */}
        <GetImage />
        <Sidebar />
      </div>
    );
  } else if (window.location.pathname == "/PostingScreen"&& urlChange == false) {
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


