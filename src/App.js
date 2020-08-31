import React from 'react';
import Header from "./Components.js/Header";
import NavBar from "./Components.js/NavBar"
import SideBar from "./Components.js/Sidebars"
import './App.css';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <SideBar/>
       <NavBar/>
    </div>
    </React.Fragment>
  );
}

export default App;
