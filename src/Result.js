import React, { Component } from 'react';


class Result extends Component {

    render() {
      return(
        <div>
          {this.props.aaaa.map((re)=>{
            <ul>
              {re.date}
            </ul>

          })}
        </div>

      )
    }

}

export default Result;
