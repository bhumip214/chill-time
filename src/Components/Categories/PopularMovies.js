import React, { Component } from "react";
import axios from "axios";
import MovieList from "../MovieList/MovieList";

class PopularMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=2b027bc49d150a496c2d18aa06377c6e&language=en-US&page=1"
      )
      .then(response => {
        this.setState({ popularMovies: response.data.results });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h2> Popular Movies </h2>
        <MovieList movies={this.state.popularMovies} />
      </div>
    );
  }
}

export default PopularMovies;
