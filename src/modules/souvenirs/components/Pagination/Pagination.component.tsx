import React from "react";
import { PaginationProps } from "./Pagination.props";

const paginationComponent = "paginationComponent";

const PaginationComponent: React.FC<PaginationProps> = ({ className }) => {
  return <div className={`${paginationComponent} ${className}`}>
    <hr className="rlr-search-results-page__divider" />
    <nav className="rlr-pagination" aria-label="Product list navigation">
      <ul className="pagination rlr-pagination__list">
        <li className="page-item rlr-pagination__page-item disabled">
          <a
            className="page-link rlr-pagination__page-link rlr-pagination__page-link--prev"
            href="#"
            aria-label="Previous"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.833 10H4.167m0 0L10 15.833M4.167 10 10 4.167"
                stroke="var(--body-color)"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span aria-hidden="true">Previous</span>
          </a>
        </li>
        <li className="page-item rlr-pagination__page-item">
          <ul className="pagination rlr-pagination__child-list">
            <li className="page-item rlr-pagination__page-item">
              <a
                className="page-link rlr-pagination__page-link rlr-pagination__page-link--counter"
                href="#"
              >
                1
              </a>
            </li>
            <li className="page-item rlr-pagination__page-item">
              <a
                className="page-link rlr-pagination__page-link rlr-pagination__page-link--counter"
                href="#"
              >
                2
              </a>
            </li>
            <li className="page-item rlr-pagination__page-item">
              <a
                className="page-link rlr-pagination__page-link rlr-pagination__page-link--counter"
                href="#"
              >
                3
              </a>
            </li>
            <li className="page-item rlr-pagination__page-item">
              <a
                className="page-link rlr-pagination__page-link rlr-pagination__page-link--counter"
                href="#"
              >
                ...
              </a>
            </li>
            <li className="page-item rlr-pagination__page-item">
              <a
                className="page-link rlr-pagination__page-link rlr-pagination__page-link--counter"
                href="#"
              >
                8
              </a>
            </li>
            <li className="page-item rlr-pagination__page-item">
              <a
                className="page-link rlr-pagination__page-link rlr-pagination__page-link--counter"
                href="#"
              >
                9
              </a>
            </li>
            <li className="page-item rlr-pagination__page-item">
              <a
                className="page-link rlr-pagination__page-link rlr-pagination__page-link--counter"
                href="#"
              >
                10
              </a>
            </li>
          </ul>
        </li>
        <li className="page-item rlr-pagination__page-item">
          <a
            className="page-link rlr-pagination__page-link rlr-pagination__page-link--next"
            href="#"
            aria-label="Next"
          >
            <span aria-hidden="true">Next</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.167 10h11.666m0 0L10 4.167M15.833 10 10 15.833"
                stroke="var(--body-color)"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>

  </div>
};

export default PaginationComponent;