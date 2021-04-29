import { Redirect, Route, Switch } from "react-router-dom";
import BooksList from "./list/BooksList";
import { BookChapters } from "./detail/BookChapters";
import { CreateBookGroup } from "./list/create/CreateBookGroup";
import { ModifyBookGroup } from "./list/create/ModifyBookGroup";

export const Books = () => {
  return (
    <Switch>
      <Route path="/books/list/create" component={CreateBookGroup} />
      <Route path="/books/list/edit/:groupId" component={ModifyBookGroup} />
      <Route path="/books/list" component={BooksList} />
      <Route path="/books/detail/:bookId" component={BookChapters} />
      <Redirect to="/books/list" />
    </Switch>
  );
};
