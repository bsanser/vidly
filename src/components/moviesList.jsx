import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Movie from '../components/movie';


class MoviesList extends Component {

  state = {
    movies: getMovies()
  }

  handleDelete = movieId => {
    const movies = [...this.state.movies];
    const remainingMovies = movies.filter(m => m._id !== movieId);
    this.setState({movies: remainingMovies});
  }

  renderMessage() {
    if (this.state.movies.length === 0 ) return 'No movies in the database';
    return `Showing ${this.state.movies.length} in the database`;

  }
  
  render() {
    return (
      <React.Fragment>
        <p className="text-center">{this.renderMessage()}</p>
        <table className="table m-2">
          <thead>
            <tr>
              <th className="border-top-0"scope="col">Title</th>
              <th className="border-top-0"scope="col">Genre</th>
              <th className="border-top-0"scope="col">Stock</th>
              <th className="border-top-0"scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(m => <Movie key= {m._id} movie={m} handleDelete={this.handleDelete} />)}
          </tbody>
        </table>
      </React.Fragment>

    );
  }
}
 
export default MoviesList;