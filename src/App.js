import React, { Component } from 'react';
import './App.css';
import MoviesList from './components/moviesList';
import Pagination from './components/shared/pagination';
import { getMovies } from './services/fakeMovieService';
import GenresList from './components/genresList';
import { getGenres } from './services/fakeGenreService';

class App extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null
  }

  componentDidMount() {
    const genres = [{ name: 'All Genres'}, ...getGenres()];
    this.setState(
      {movies: getMovies(),
       genres});
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
    this.setState({
      currentPage:page
    });
  }
  handleFilterGenres = genre => {
    this.setState({ selectedGenre: genre})
  }

  render() {
    const {pageSize, currentPage, movies, genres, selectedGenre} = this.state;
    const filteredMovies = selectedGenre && selectedGenre._id
    ? movies.filter(m => m.genre._id === selectedGenre._id)
    : movies;
    return (
      <main className="container">
      <div className="side-bar">
          <GenresList
             movies= {movies}
             genres={genres}
             onFilterGenres = {this.handleFilterGenres}
             selectedGenre = {selectedGenre}
          />
      </div>
      <div>
       <MoviesList
        movies={movies}
        currentPage = {currentPage}
        pageSize = {pageSize}
        selectedGenre = {selectedGenre}
        handleLike={this.handleLike}
        handleDelete={this.handleDelete}
        filteredMovies={filteredMovies}/>
       <Pagination 
          itemsCount={filteredMovies.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}/>
        </div>
      </main>
    );
  }
}

export default App;
