import React from 'react';
import Movie from '../components/movie';


const MoviesList = props => {
    const {length: count} = props.movies;

    if (count === 0) return <p className="text-center m-2">No movies in the database</p>;
    return (
      <React.Fragment>
        <p className="text-center m-2">Showing {props.movies.length} in the database</p>;
      
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
            {props.movies.map(m => <Movie key= {m._id} movie={m} handleDelete={props.handleDelete} handleLike={props.handleLike}/>)}
          </tbody>
        </table>
      </React.Fragment>

    );
  }
 
export default MoviesList;