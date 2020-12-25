import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import BooksList from "./list/BooksList";

export default class Books extends Component {
    state = {};

    render() {
        return (
            <Switch>
                <Route path='/books/list' component={BooksList} />
                <Route path='/books/user' />
                <Redirect to='/books/list' />
            </Switch>
        );
    }
}
