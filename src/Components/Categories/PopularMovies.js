import React, { Component } from "react";
import axios from "axios";
import { css, cx } from "emotion";

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
        <div className="row">
          {this.state.popularMovies.map(popularMovie => {
            return (
              <div className="cards" key={popularMovie.id}>
                <img
                  src={popularMovie.poster_path}
                  alt={popularMovie.original_title}
                  height="230"
                  width="300"
                />
                <h3>{popularMovie.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PopularMovies;
