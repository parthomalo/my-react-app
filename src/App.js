import { useState } from 'react';
import './App.css'
import Dark from './components/Dark';
import Home from './components/Home/Home';


function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }; 
  const darkModeStyle = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black"
  };

  return (
    <div  style={darkModeStyle} className={`App ${darkMode ? "dark-mode" : ""}`}>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      <Dark></Dark>
     <Home/>
    </div>
  );
}

export default App;
