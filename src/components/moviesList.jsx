import React from 'react';
import Movie from '../components/movie';
import { paginate } from '../components/utils/paginate';

const MoviesList = props => {
    const {length: count} = props.movies;
    const { filteredMovies } = props;

    if (count === 0) return <p className="text-center m-3">No movies in the database</p>;
    
    const movies = paginate(filteredMovies, props.currentPage,props.pageSize);

    return (
      <React.Fragment>
        <p className="text-center m-2">Showing {filteredMovies.length} in the database</p>
      
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
            {movies.map(m => <Movie key= {m._id} movie={m} handleDelete={props.handleDelete} handleLike={props.handleLike}/>)}
          </tbody>
        </table>
      </React.Fragment>

    );
  }
 
export default MoviesList;