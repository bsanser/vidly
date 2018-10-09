import React from 'react'

const Pagination = (props) => {
  const { itemsCount, pageSize,currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages =  Array.from({length: pagesCount}, (v, i) => ++i);


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
 
export default Pagination;