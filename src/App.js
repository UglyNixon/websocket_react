
import React from "react";
import Canvas from "./components/Canvas";
import Settingbar from "./components/Settingbar";
import Toolbar from "./components/Toolbar";
import './style/app.scss'

function App() {
  return (
    <div className='app'>
        
        <Toolbar/>
        <Settingbar/>
        <Canvas/>

    </div>
  );
}

export default App;
