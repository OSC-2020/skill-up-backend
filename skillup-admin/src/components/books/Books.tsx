import { Redirect, Route, Switch } from 'react-router-dom';
import BooksList from "./list/BooksList";
import BookDetail from "./detail/BookDetail";

export const Books = () => {
    return (
        <Switch>
            <Route path='/books/list' component={BooksList} />
            <Route path='/books/detail/:bookId' component={BookDetail} />
            <Redirect to='/books/detail/rahul' />
        </Switch>
    );
};
