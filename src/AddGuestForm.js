import React, {Component} from 'react';
import PropTypes from 'prop-types'

class AddGuestForm extends Component {
  state = {name:''};
  
  onChange = (e) => {
    this.setState({name: e.target.value})
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addNewGuest(this.state.name);
    this.setState({name: ''});
  }
  
  render(){
    return (
    <form onSubmit={this.onSubmit}>
      <input 
        onChange={this.onChange} 
        type="text" 
        value={this.state.name} 
        placeholder="Invite Someone" 
      />
        <button 
          type="submit" 
          name="submit" 
          value="submit" 
        > Submit </button>
      </form>  
    )
  }
}

AddGuestForm.propTypes = {
  addNewGuest: PropTypes.func.isRequired,
}

export default AddGuestForm;