import React from 'react';
import LikeComponent from './shared/likeComponent';

const Movie = (props) => {
  const {_id, title, genre, numberInStock, dailyRentalRate } = props.movie;
  return (
    <tr>
      <th>{title}</th>
      <td>{genre.name}</td>
      <td>{numberInStock}</td>
      <td>{dailyRentalRate}</td>
      <td><LikeComponent movie={props.movie} handleLike={props.handleLike}/></td>
      <td><button className="btn btn-danger" onClick={() => props.handleDelete(_id)}>Delete Movie</button></td>
   </tr>
   );
}
 
export default Movie