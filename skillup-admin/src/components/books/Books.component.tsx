import { Redirect, Route, Switch } from "react-router-dom";
import BooksList from "./list/BooksList.component";
import { BookChapters } from "./detail/BookChapters.component";
import { CreateBookGroup } from "./list/create/CreateBookGroup.component";
import { ModifyBookGroup } from "./list/create/ModifyBookGroup.component";

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
