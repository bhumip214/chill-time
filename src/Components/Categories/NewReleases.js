import React, { Component } from "react";
import axios from "axios";
import MovieList from "../MovieList/MovieList";

class NewReleases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMovies: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=2b027bc49d150a496c2d18aa06377c6e&language=en-US&page=1"
      )
      .then(response => {
        this.setState({ newMovies: response.data.results });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h2> New Releases </h2>
        <MovieList movies={this.state.newMovies} />
      </div>
    );
  }
}

export default NewReleases;
