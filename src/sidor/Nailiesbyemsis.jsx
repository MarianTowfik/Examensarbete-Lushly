import React from "react";



class Nails extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://apps.elfsight.com/p/platform.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render () {
    return (
       <div id="insta">
             <div class="elfsight-app-3c48ad25-8a1c-46d9-b727-972e854a7a02"></div>
       </div>
           
         
       
    );
  }
};
export default Nails;
