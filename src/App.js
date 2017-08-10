import React, { Component } from 'react';
import * as WeatherApis from './WeatherApis'
import Form from './Form'
import Result from './Result'
import { Grid, Row, Col } from 'react-flexbox-grid';

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
    return (


      <div className="App">
          <h2>Welcome to Weather Data</h2>
          <Form
            onCreateapi={(data) => {
              this.createapi(data)
            }}
          />
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.arry.map((re ,i)=>{
                return(
                  <li>
                    <div>Date:{re.date}</div>
                    <div>maxtempF:{re.maxtempF}</div>
                    <div>mintempF:{re.mintempF}</div>
                    <div>sunHour:{re.sunHour}</div>
                  </li>
                )})}
            </ol>
          </div>

        </div>
    );
  }
}

export default App;
{/* <div>
<Grid fluid>
  <Row>
    {this.state.arry.map((re ,i)=>{
      return(
  <div>
    <Col xs={6} md={6}>
      Date:{re.date}
      maxtempF:{re.maxtempF}
      mintempF:{re.mintempF}
      sunHour:{re.sunHour}

    </Col>
    </div>
      )})}
  </Row>
</Grid>

</div>
 */}
