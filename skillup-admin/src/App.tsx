import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/layout/header/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path='/books/manage/list'>
            Manage
          </Route>
          <Route path='/books/manage/create'>
            Create-book
          </Route>
          <Route path='/'>
            Homepage
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
