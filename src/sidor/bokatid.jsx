import React from 'react';
import "../bokatid.css"

class Hejsan extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = { username: ''} //, chooseADay: '', chooseATime: ''};

      }
      
     
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("Tack för din bokning " + this.state.username )//+ ", På " + this.state.chooseADay + " , klockan: " + this.state.chooseATime);
      }

      myChangeHandler = (event) => {
        this.setState({username: event.target.value})
      }
/*
      myChangeHandler1 = (event) => {
        this.setState({chooseADay: event.target.value})
      }
      myChangeHandler2 = (event) => {
        this.setState({chooseATime: event.target.value})
      }
 <div class="block">
        <label>Välj en dag</label>
        <select name="select" id="dagar" onChange={this.myChangeHandler1}>
        <option value="Välj en dag">Välj en dag</option>
        <option value="Måndag">Måndag</option>
        <option value="Tisdag">Tisdag</option>
        <option value="Onsdag">Onsdag</option>
        </select>

      </div>
      <div class="block">
        <label>Välj en tid</label>
        <select name="select" id="tider" onChange={this.myChangeHandler2}>
        <option value="Välj en tid"> Välj en tid</option>
        <option value="10.00">10.00</option>
        <option value="13.00">13.00</option>
        <option value="16.00">16.00</option>
     
        </select>

      </div>
*/

  render() {
    return (
        
      <form onSubmit={this.mySubmitHandler}>
      <p id="hej">Fyll i dina uppgifter och skicka:</p>
      <div id="hejsan">
     

    
     <div class="block">
    <label>Förnamn</label>
    <input type='text' placeholder="Förnamn"onChange={this.myChangeHandler}
/>
     </div>
    
    
     <div class="block">
     <label>Efternamn</label>
     <input type='text'placeholder="Efternamn"/>
    </div>
        
    <div class="block">
    <label>Telefonnummer</label>
    <input type='text' placeholder="Telefonnummer"/>
    </div>

    <div class="block">
     <label>Email</label>
    <input type='email' placeholder="Email"/>
    </div>

    <div class="block">
    <label>Övrigt</label>
    <textarea type='text' placeholder="Ex. medtag sällskap, djur, allergier"/> 
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

 export default Hejsan;