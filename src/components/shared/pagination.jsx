import React from 'react'

const Pagination = (props) => {
  const { itemsCount, pageSize } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages =  Array.from({length: pagesCount}, (v, i) => ++i);

  if (pagesCount === 1) return null;

  return ( 
    <nav className="m-2">
      <ul className="pagination">
      {pages.map(page => (
        <li key={page} className="page-item">
          <a className="page-link">{page}</a>
        </li>
      ))}
      </ul>
    </nav>
   );
}
 
export default Pagination;