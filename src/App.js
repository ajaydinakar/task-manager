import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import About from './components/pages/About';
import Callender from './components/pages/Callender';
import Stub from './components/pages/Stub';
import NavBar from './components/navBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
      <div>
        <NavBar/>
       <Route exact path="/" component={Home}/>
       <Route path="/dashboard/" component={Dashboard}/>
       <Route path="/about/" component={About}/>
       <Route path="/callender/" component={Callender}/>
       <Route path ="/stub" component={Stub}/>
      </div>
      </Router>
      </div>
    );
  }
}

export default (App);
