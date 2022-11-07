import React from "react";
import FilterSidbarServicesComponent from "../../../services/components/FilterSidbarServices/FilterSidbarServices.component";
import PaginationComponent from "../../../services/components/Pagination/Pagination.component";
import CardToursComponent from "../CardTours/CardTours.component";
import { SearchResultProductToursProps } from "./SearchResultProductTours.props";

const searchResultProductToursComponent = "searchResultProductToursComponent";

const SearchResultProductToursComponent: React.FC<
  SearchResultProductToursProps
> = ({ className }) => {
  return (
    <div
      className={`${searchResultProductToursComponent} ${className} row rlr-search-results-page__product-details`}
    >
      <FilterSidbarServicesComponent />
      {/* <CardToursComponent /> */}
    </div>
  );
};

export default SearchResultProductToursComponent;
