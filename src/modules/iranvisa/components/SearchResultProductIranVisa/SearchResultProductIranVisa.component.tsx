import React from "react";
import FilterSidbarServicesComponent from "../../../services/components/FilterSidbarServices/FilterSidbarServices.component";
import CardIranvisaComponent from "../CardIranvisa/CardIranvisa.component";
import { SearchResultProductIranVisaProps } from "./SearchResultProductIranVisa.props";

const searchResultProductIranVisaComponent = "searchResultProductIranVisaComponent";

const SearchResultProductIranVisaComponent: React.FC<SearchResultProductIranVisaProps> = ({ className }) => {
  return <div className={`${searchResultProductIranVisaComponent} ${className} row rlr-search-results-page__product-details`}>
    <FilterSidbarServicesComponent />
    {/* <CardIranvisaComponent /> */}
  </div>
};

export default SearchResultProductIranVisaComponent;