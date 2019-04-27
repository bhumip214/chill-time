import React from "react";
import { NavLink } from "react-router-dom";
import NewReleases from "../Categories/NewReleases";

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavLink exact to="/new-releases">
          New Releases
        </NavLink>
        <hr />
        <NavLink exact to="/top-rated">
          Top Rated Movies
        </NavLink>
        <hr />
        <NavLink exact to="/popular-movies">
          Popular Movies
        </NavLink>
        <hr />
        <NavLink exact to="/tv-shows">
          TV Shows
        </NavLink>
        <hr />
      </div>
    );
  }
}

export default Home;
