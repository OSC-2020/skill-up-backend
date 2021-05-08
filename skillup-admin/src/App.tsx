import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/header/Header.component";
import { Books } from "./components/books/Books.component";

function App() {
  return (
    <Router>
      <div className="app bg-gray-100">
        <Header />
        <main className="container mx-auto flex flex-wrap px-5 flex-col md:flex-row items-center ">
          <Switch>
            <Route path="/books" component={Books} />
            <Route path="/">Homepage</Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
