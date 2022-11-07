import React from "react";
import { ServiceFilterContainerProps } from "./ServiceFilterContainer.props";

const serviceFilterContainerComponent = "serviceFilterContainerComponent";

const ServiceFilterContainerComponent: React.FC<
  ServiceFilterContainerProps
> = ({ className, FilterSidedBar, children }) => {
  return (
    <div
      className={`${serviceFilterContainerComponent} ${className} row rlr-search-results-page__product-details`}
    >
      {FilterSidedBar}
      {children}
    </div>
  );
};

export default ServiceFilterContainerComponent;
