import React, { Component } from 'react';
import * as WeatherApis from './WeatherApis'
import Form from './Form'
import Result from './Result'

import './App.css';

class App extends Component {

  state = {
    arry : []
  }

  createapi = (data) => {
  WeatherApis.get(data).then((weathers) => {
    this.setState({ arry : this.state.arry.concat(weathers) })

  })
}


  render() {
    this.state.arry[0].map((re)=>{
      console.log(re);
    })
    return (
      <div className="App">
          <h2>Welcome to Weather Data</h2>
          <Form
            onCreateapi={(data) => {
              this.createapi(data)
            }}
          />

        </div>
    );
  }
}

export default App;
