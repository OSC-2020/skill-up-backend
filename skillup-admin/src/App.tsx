import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Books from "./components/books/Books";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path='/books' component={Books} />
          <Route path='/' >
            Homepage
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
