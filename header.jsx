import React from "react";
import "../header.css";
//import bild from "./emma.jpg"; <img src={bild} alt="emmas bild" />


const Startsida =() => {
  return (

  <div className="startPage">  
     <div id="ord">
       <a id="header" href="Nailiesbyemsis" > <h1>L  ushly</h1> </a>
       <a id="headerB" href="Nailiesbyemsis" > <h1>Lushly</h1> </a>
     </div>
        
         <div id="menyval">
         <a href="omMig">  Om mig |</a>      
        <a href="bilder"> Bilder | </a>
        <a href="boka-tid">  Boka tid |</a>
        <a href="recensioner">  Recensioner  </a>
      </div>
  </div>
    
  );
  }
export default Startsida;
