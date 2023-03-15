import React, { useState } from 'react';

const Dark = () => {
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    const darkModeStyle = {
      backgroundColor: darkMode ? "black" : "white",
      color: darkMode ? "white" : "black"
    };
  
    return (
      <div style={darkModeStyle}>
        
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light mode" : "Dark mode"}
        </button>
        
      </div>
    );
  };

export default Dark;