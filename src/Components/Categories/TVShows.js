import React, { Component } from "react";
import axios from "axios";
import { css, cx } from "emotion";

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
        <div className="row">
          {this.state.tvShows.map(tvShow => {
            return (
              <div className="cards" key={tvShow.id}>
                <img
                  src={tvShow.poster_path}
                  alt={tvShow.original_name}
                  height="230"
                  width="300"
                />
                <h3>{tvShow.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TVShows;
