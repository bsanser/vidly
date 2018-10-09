import React from 'react';


const LikeComponent = props => {
  const {movie} = props;
  let classes = 'fa fa-heart';
  if (!movie.liked) classes += '-o';
  return <i className={classes} styles={{cursor: "pointer"}} aria-hidden="true" onClick={()=>props.handleLike(movie)}></i>;
}
 
export default LikeComponent;