import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';

class App extends Component {
  state = {
    guests: [
      {
        name: 'Treasure',
        isConfirmed: false
      },
      {
        name: 'Ashkaan',
        isConfirmed: true,
      }
    ],
  }
  
  getTotalInvite = () => {
    return this.state.guests.length;
  }
  
  toggleConfirm = (index) => {
    this.setState(prevState => ({
      guests: prevState.guests.map((guest, i) => {
        if (index === i) {
          return {...guest, isConfirmed: !guest.isConfirmed}
        } else {
          return guest;
        }
      })
    }))
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
            <input type="text" value="Safia" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestList guests = {this.state.guests} toggleConfirm={this.toggleConfirm}/>
        </div>
      </div>
    );
  }
}

export default App;
