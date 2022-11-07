import React from "react";
import CardServicesComponent from "../CardServices/CardServices.component";
import FilterSidbarServicesComponent from "../FilterSidbarServices/FilterSidbarServices.component";
import PaginationComponent from "../Pagination/Pagination.component";
import { SearchResultProductProps } from "./SearchResultProduct.props";

const searchResultProductComponent = "searchResultProductComponent";

const SearchResultProductComponent: React.FC<SearchResultProductProps> = ({
  className,
}) => {
  return (
    <div
      className={`${searchResultProductComponent} ${className} row rlr-search-results-page__product-details`}
    >
      <FilterSidbarServicesComponent />
      <CardServicesComponent />
    </div>
  );
};

export default SearchResultProductComponent;
