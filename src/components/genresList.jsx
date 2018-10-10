import React from 'react';


const GenresList = (props) => {
  const {genres, textProperty, valueProperty, selectedGenre} = props;
  return ( 
  <ul className="list-group">
    {genres.map(genre => <li key={genre[valueProperty]} className= { genre === selectedGenre ? "list-group-item active" : "list-group-item"} onClick={() => props.onFilterGenres(genre)}>{genre[textProperty]}</li>)}
    
  </ul> );
}

GenresList.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
}

export default GenresList;

