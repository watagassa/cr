import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageUploader from "./ImageUploader";
//import ImageDownloader from './ImageDownloader'

function App() {
  return (
    <div className="App">
      {/* uplodaer */}
      <ImageUploader/>
    </div>
  );
}
export default App;
