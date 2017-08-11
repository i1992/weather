import React, { Component } from 'react';
import * as WeatherApis from './WeatherApis'
import Form from './Form'

import './App.css';
class App extends Component {
  state = {
    arry : [],
    goo : []
  }

  //To get Weather data using API

  createapi = (data) => {

    if (data){
      this.setState({goo : []})
      var joined = this.state.goo.concat(data);
      this.setState({ goo: joined })
    }

    WeatherApis.get(data).then((weathers) => {
        this.setState({ arry: [] })
      this.setState({ arry : this.state.arry.concat(weathers) })
    })
}
  render() {
    return (
      <div className="App">
          <h2>Historic Weather Data</h2>

          <Form
            onCreateapi={(data) => {
              this.createapi(data)
          }}/>

          <div className="main-results">
            {this.state.goo.map((city_n, i)=>{
              return(
              <div className="color" key={i}>City: {city_n.name.toUpperCase()}</div>
            )
          })}

            <ol className="grid">
              {this.state.arry.map((result ,i)=>{
                return(
                  <li key = {i}>
                    <div>Date:  {result.date}</div><br />
                    <div>Maxtemp F:  {result.maxtempF}</div>
                    <div>Mintemp F:  {result.mintempF}</div>
                  </li>
                )})}
            </ol>
          </div>
        </div>
    );
  }
}

export default App;
