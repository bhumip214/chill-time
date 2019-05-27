import React from "react";
import { NavLink } from "react-router-dom";
import NewReleases from "../Categories/NewReleases";
import TopRated from "../Categories/TopRated";
import PopularMovies from "../Categories/PopularMovies";
import TVShows from "../Categories/TVShows";

class Home extends React.Component {
  render() {
    return (
      <div>
        <NewReleases />

        <TopRated />

        <PopularMovies />

        <TVShows />
      </div>
    );
  }
}

export default Home;
