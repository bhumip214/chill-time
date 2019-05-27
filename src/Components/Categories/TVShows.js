import React, { Component } from "react";
import axios from "axios";
import MovieList from "../MovieList/MovieList";

class TVShows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tvShows: []
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=2b027bc49d150a496c2d18aa06377c6e&language=en-US&page=1"
      )
      .then(response => {
        this.setState({ tvShows: response.data.results });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h2> TV Shows </h2>
        <MovieList movies={this.state.tvShows} />
      </div>
    );
  }
}

export default TVShows;
