import React from 'react';
import PropTypes from 'prop-types';



const Pagination = (props) => {
  const { itemsCount, pageSize,currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages =  Array.from({length: pagesCount}, (v, i) => ++i);
  // con lodash sería así const pages = ._range(1, pagesCount +1)

  if (pagesCount === 1) return null;

  return ( 
    <nav className="m-2">
      <ul className="pagination">
      {pages.map(page => (
        <li key={page} className={ page === currentPage? "page-item active": "page-item"}>
          <a className="page-link" onClick={()=>onPageChange(page)}>
            {page}
          </a>
        </li>
      ))}
      </ul>
    </nav>
   );
}
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
}
export default Pagination;