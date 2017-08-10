import React, { Component } from 'react';
import serialzeForm from 'form-serialize'

import './App.css';

class Form extends Component {

  handleSubmit = (e) => {
      e.preventDefault()
      const value = serialzeForm(e.target, { hash : true })
      if (this.props.onCreateapi)
        this.props.onCreateapi(value)
    }


  render() {
    return (
          <form  onSubmit= {this.handleSubmit} className='create-contact-form'>

            <div className='create-contact-details'>
              <input type='text' name='name' placeholder='Enter City Name'/><br/><br />
              <input type='text' name='date' placeholder='Enter Start Date'/>
              <input type='text' name='edate' placeholder='Enter Start EndDate'/><br/><br />
              <button>See Result</button>
            </div>
          </form>
    );
  }
}

export default Form;
