
/* tslint:disable */


import React, { Component } from 'react'
import { connect } from 'react-redux';

export class reduxComponent extends Component {  render() {
    return (
      <div>
     
        <h1>This is a sample Component</h1>
        {/* this.props.sfn*/}
        
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {sfn:state.counter}
  };
  const mapDispatchToProps = dispatch => {
      return{
    incrementCounter:()=> {dispatch({type:'INCREMENT'});console.log("object")},
    decrementCounter:()=> {dispatch({type:'DECREMENT'});console.log("object")}
      }
  }
export default connect(mapStateToProps,mapDispatchToProps) (reduxComponent);
