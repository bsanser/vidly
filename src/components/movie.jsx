import React from 'react'

const Movie = (props) => {
  const {title, genre, numberInStock, dailyRentalDate } = props.movie;
  return (
    <tr>
      <th>{title}</th>
      <td>{genre}</td>
      <td>{numberInStock}</td>
      <td>{dailyRentalDate}</td>
   </tr>
   );
}
 
export default Movie;