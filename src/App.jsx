import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./components/Sidebar";
import ImageUploader from "./ImageUploader";
function App() {
  return (
    <div className="App">
      {/* uplodaer */}
      <ImageUploader />
      <Sidebar />
    </div>
  );
}
export default App;

