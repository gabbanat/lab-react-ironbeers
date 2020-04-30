import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import AllBeers from "./componets/allBeers"
import {Route, Switch, Link} from "react-router-dom"
import Home from "./componets/Home"
import Deal from "./componets/Deal"


class App extends Component {
  render() {
    return (
      <div className="App">
       <nav>
         <Link to = "/">Home</Link>
         <Link to = "/AllBeers">AllBeers</Link>
       </nav>
       <Switch>
       <Route
              exact
              path="/AllBeers"
              render={props => (
                <AllBeers {...props}  />
              )}
              />
        <Route
              exact
              path="/"
              render={props => (
                <Home {...props}  />
              )}
              />
               <Route
              exact
              path="/deal/:id"
              render={props => (
                <Deal {...props}  />
              )}
              />
       </Switch>
      </div>
    );
  }
}

export default App;
