import React, { Component } from 'react'
import { reduxComponent } from '../sampleComponents/reduxComponent';
import {withRouter} from 'react-router-dom'
import Dummy from '../sampleComponents/Dummy';
export class Stub extends Component {
  render() {
    return (
      <div>
           <h1>This is a simple stub</h1>
     <Dummy/>
    
      </div>
    )
  }
}

export default withRouter(Stub)
