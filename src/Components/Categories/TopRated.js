import React, { Component } from "react";
import axios from "axios";
import MovieList from "../MovieList/MovieList";

class TopRated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRatedMovies: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=2b027bc49d150a496c2d18aa06377c6e&language=en-US&page=1"
      )
      .then(response => {
        this.setState({ topRatedMovies: response.data.results });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h2> Top Rated </h2>
        <MovieList movies={this.state.topRatedMovies} />
      </div>
    );
  }
}

export default TopRated;
