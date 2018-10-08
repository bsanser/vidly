import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Movie from '../components/movie';


class MoviesList extends Component {

  state = {
    movies: getMovies()
  }
  
  render() {
    return (
      <React.Fragment>
        <p>Showing {this.state.movies.length} in the database</p>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(m => <Movie key= {m._id} movie={m}/>)}
          </tbody>
        </table>
      </React.Fragment>

    );
  }
}
 
export default MoviesList;