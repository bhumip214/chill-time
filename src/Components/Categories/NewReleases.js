import React, { Component } from "react";
import axios from "axios";
import { css, cx } from "emotion";

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
        <div className="row">
          {this.state.newMovies.map(newMovie => {
            return (
              <div className="cards" key={newMovie.id}>
                <img
                  src={newMovie.poster_path}
                  alt={newMovie.original_title}
                  height="230"
                  width="300"
                />
                <h3>{newMovie.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NewReleases;
