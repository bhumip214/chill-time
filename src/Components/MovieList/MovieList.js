import React from "react";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOnIndex: null
    };
  }

  getImageClassName(i) {
    if (this.state.mouseOnIndex === null) {
      return "";
    }

    if (i < this.state.mouseOnIndex) {
      return "img-animate-left";
    }

    if (i > this.state.mouseOnIndex) {
      return "img-animate-right";
    }
  }

  render() {
    return (
      <div className="row">
        {this.props.movies.map((movie, i) => {
          return (
            <div className="card" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
                className={this.getImageClassName(i)}
                onMouseEnter={() => {
                  this.setState({ mouseOnIndex: i });
                }}
                onMouseLeave={() => {
                  this.setState({ mouseOnIndex: null });
                }}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieList;
