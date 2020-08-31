import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/blog" component={Blog} />
          <Route path="/aboutme">
            <h1>About Me</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
