import React, { Component } from "react";
//import Startsida from "./header";
import Startsida from "./sidor/header.jsx";
import Routes from "./routes"
 
class App extends Component {
  render (){
    return (
      <div>
        <Startsida />
        <Routes />
       
      </div>
    
    );
  }
}

export default App;
