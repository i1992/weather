import React, { Component } from 'react';
import * as WeatherApis from './WeatherApis'
import Form from './Form'
import Result from './Result'

import './App.css';

class App extends Component {

  state = {
    weather : []
  }

  createapi(data) {
        WeatherApis.get(data)
          .then(( weather ) => {this.setState({ weather : weather})

        })
      }


  render() {
    return (
      <div className="App">
          <h2>Welcome to Weather Data</h2>
          <Form
            onCreateapi={(data) => {
              this.createapi(data)
            }}
          />
          <div>
            {
              console.log(this.state.weather)

            }
          </div>
        </div>
    );
  }
}

export default App;
