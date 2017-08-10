import React, { Component } from 'react';


class Result extends Component {


  render() {
    return (
        <div>
          <div>{console.log(this.props.sdata)}</div>
        </div>
    )
  }
}

export default Result;
