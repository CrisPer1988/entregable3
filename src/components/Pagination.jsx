import React from "react";
import "./styles/pagination.css";

const Pagination = ({
  residentsPerPage,
  totalResidents,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalResidents / residentsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      {/* {pageNumbers.map((number) => (
        <li key={number}>
          <a onClick={() => paginate(number)} href="!#">
            {" "}
            {number}
          </a>
        </li>
      ))} */}

      {pageNumbers.map((number) => {
        return (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={number == currentPage ? "active" : ""}
          >
            {number}
          </button>
        );
      })}
    </nav>
  );
};

export default Pagination;
