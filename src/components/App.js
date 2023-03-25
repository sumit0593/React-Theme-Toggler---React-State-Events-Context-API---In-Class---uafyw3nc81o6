import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMode=()=>{
    setIsDarkMode(!isDarkMode);
    
  }
  return (
    <div id="main" style={{background: isDarkMode ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"}}>
      <h1 style={{color: isDarkMode ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"}}>{isDarkMode ? "Light Mode Activated" :"Dark Mode Activated"}</h1>
      <button onClick={handleMode}> {isDarkMode ? "Switch to Dark Mode" : "Switch to Light Mode"}</button>
    </div>
  )
}


export default App;
