import React, { Component } from "react";
import axios from "axios";
import { css, cx } from "emotion";

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
        <div className="row">
          {this.state.topRatedMovies.map(topRatedMovie => {
            return (
              <div className="cards" key={topRatedMovie.id}>
                <img
                  src={topRatedMovie.poster_path}
                  alt={topRatedMovie.original_title}
                  height="230"
                  width="300"
                />
                <h3>{topRatedMovie.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TopRated;
