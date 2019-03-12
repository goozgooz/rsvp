import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';
import AddGuestForm from './AddGuestForm';

class App extends Component {
  state = {
    isFiltered: false,
    guests: [
      {
        name: 'Treasure',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Ashkaan',
        isConfirmed: true,
        isEditing: true
      }
    ],
  }
  removeGuest = (index) => {
    this.setState(prevState => ({
      guests: prevState.guests.filter((guest,i) => i !== index)
    }))
  }
  addNewGuest = (guestName) => {
    let newGuest = {
      name: guestName,
      isConfirmed: false,
      isEditing: false,
    }
    this.setState(prevState => ({
      guests: [...prevState.guests, newGuest]
    }))
  }
  
  toggleFilter = () => {
    this.setState({isFiltered: !this.state.isFiltered});
  }
  
  getTotalInvite = () => {
    return this.state.guests.length;
  }
  
  editName = (i, name) => {
    this.setState(prevState => ({
      guests: prevState.guests.map((guest, index) => {
        if (i === index) {
          return {...guest, name};
        } else {
          return guest;
        }
      })
    }))
  }
  
  toggleSwitch = (index, property) => {
    this.setState(prevState => ({
      guests: prevState.guests.map((guest, i) => {
        if (index === i) {
          return {...guest, [property]: !guest[property]}
        } else {
          return guest;
        }
      })
    }))
  }
  
  
  toggleEdit = (i) => {
    this.toggleSwitch(i, 'isEditing');
  }
  toggleConfirm = (i) => {
    this.toggleSwitch(i, 'isConfirmed');
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <AddGuestForm addNewGuest={this.addNewGuest} />
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input 
                type="checkbox" 
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}  
              /> Hide those who haven't responded
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
          <GuestList 
            guests = {this.state.guests} 
            toggleEdit={this.toggleEdit}
            toggleConfirm={this.toggleConfirm}
            editName={this.editName}
            isFiltered={this.state.isFiltered}
            removeGuest={this.removeGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;
