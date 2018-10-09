import React, { Component } from 'react';
import './App.css';
import MoviesList from './components/moviesList';
import Pagination from './components/shared/pagination';
import {getMovies} from './services/fakeMovieService';


class App extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4
  }

  handleDelete = movieId => {
    const movies = this.state.movies.filter(m => m._id !== movieId);
    this.setState({movies});
  }

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({movies});
  }
  handlePageChange = page => {
    console.log(page);
  }

  render() {
    const count = this.state.movies.length;
    return (
      <main className="container">
       <MoviesList
        movies={this.state.movies}
        handleLike={this.handleLike}
        handleDelete={this.handleDelete}/>
       <Pagination 
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}/>
      </main>
    );
  }
}

export default App;
