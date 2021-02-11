import React from 'react';
import {FaStar} from "react-icons/fa"
import "../Recensioner.css"

class Omdöme extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = { username: '' };
      }
   
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("Tack för din bokning " + this.state.username);
      }

      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }

     
    

  render() {
    return (
        
      <form onSubmit={this.mySubmitHandler}>
      <p id="hej">Lämna en recension:</p>
    
    
     <div class="block">
    <label>Namn</label>
    <input type='text' placeholder="Förnamn och efternamn" onChange={this.myChangeHandler}
/>
    


    <div>
        <FaStar />
    </div>

    <div class="block">
    <label>Kommentar</label>
    <textarea type='text'/> 
    </div>
     
      <div class="submit">
    <input
        type='submit'
      />
      </div>
       </div>
      </form>
    );
  }
}

 export default Omdöme;