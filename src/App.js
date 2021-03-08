import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Header from '../src/Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import MovieDetails from "./Component/MovieDetails/MovieDetails";
import NotFound from "./Component/NotFound/NotFound";


function App() {
  return (
    <Router>
      <Header />
        <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path ="/movie/:id">
                  <MovieDetails />
            </Route>
            <Route exact path ="/">
                    <Home />
            </Route>
            <Route path ="*">
                    <NotFound />
            </Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
