import React from "react";
import { BreadcrumbProps } from "./Breadcrumb.props";

const breadcrumbComponent = "breadcrumbComponent";

const BreadcrumbComponent: React.FC<BreadcrumbProps> = ({ className }) => {
  return <div className={`${breadcrumbComponent} ${className} rlr-search-results-page__breadcrumb-section`}>
    {/* <!-- Breadcrumb --> */}
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb rlr-breadcrumb__items">
        <li className="breadcrumb-item rlr-breadcrumb__item"><a href="/">Home</a></li>
        <li className="breadcrumb-item rlr-breadcrumb__item"><a href="/">Destination</a></li>
        <li className="breadcrumb-item rlr-breadcrumb__item active" aria-current="page">Tour</li>
      </ol>
    </nav>
    <div className="rlr-icon-text"><i className="rlr-icon-font flaticon-phone-receiver-silhouette"> </i> <span
      className="rlr-search-results-page__phone">Questions? +977 (985) 110-8896 </span></div>
  </div>
};

export default BreadcrumbComponent;