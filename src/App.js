import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import { Switch, Link, Route } from 'react-router-dom'
import Navbar from './components/Navbar'


class App extends Component { 

  render() {
    console.log(this.state);
    return (
      <div>
       <div className="App">
     <Navbar/>
<Switch>
 <Route
          exact
          path="/"
          render={(props) => (
            <Home
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/privacy"
          render={(props) => (
            <Privacy
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/terms"
          render={(props) => (
            <Terms
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/aboutus"
          render={(props) => (
            <Terms
              {...props}
            />
          )}
        />
      </Switch>
    </div>
      </div>
    );
  }
}
export default App;
