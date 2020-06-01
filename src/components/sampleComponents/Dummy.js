import React, { Component } from 'react'
import {connect} from 'react-redux'
export class Dummy extends Component {
  render() {
    return (
      <div>
        <h1>this is a dummy component</h1>
        <button onClick={this.props.incrementCounter}>Increment +</button>
        <button onClick={this.props.decrementCounter}>Decrement -</button>
        <h1>{this.props.sfn}</h1>
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
export default connect(mapStateToProps,mapDispatchToProps)(Dummy)
