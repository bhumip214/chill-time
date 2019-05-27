import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import NewReleases from "./Components/Categories/NewReleases";
import TopRated from "./Components/Categories/TopRated";
import PopularMovies from "./Components/Categories/PopularMovies";
import TVShows from "./Components/Categories/TVShows";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>CHILL TIME</h1>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-releases" component={NewReleases} />
        <Route exact path="/top-rated" component={TopRated} />
        <Route exact path="/popular-movies" component={PopularMovies} />
        <Route exact path="/tv-shows" component={TVShows} />
      </div>
    );
  }
}

export default withRouter(App);
