import React, { Component } from 'react';
import './App.css';
import MoviesList from './components/moviesList';


class App extends Component {
  render() {
    return (
      <main className="container">
       <MoviesList />
      </main>
    );
  }
}

export default App;
