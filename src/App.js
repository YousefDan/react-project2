import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/routing/Movies";
import Counters from "./components/routing/Counters";
import Navbar from "./components/routing/Navbar";
import Posts from "./components/routing/Posts";
import Expenses from "./components/routing/Expenses";
import NotFound from "./components/routing/NotFound";
import Login from "./components/routing/Login";
import MovieProvider from "./store/provider/MovieProvider";
import MoviesForm from "./components/common/MoviesForm";

const App = () => {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Navbar />
        <div className="container mt-4">
          <Switch>
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movies/add" component={MoviesForm} />
            <Route exact path="/counters" component={Counters} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/expenses" component={Expenses} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </BrowserRouter>
    </MovieProvider>
  );
};

export default App;
