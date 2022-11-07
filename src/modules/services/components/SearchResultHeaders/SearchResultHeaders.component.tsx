import React from "react";
import ResultheadersItemComponent from "../ResultheadersItem/ResultheadersItem.component";
import { SearchResultHeadersProps } from "./SearchResultHeaders.props";

const searchResultHeadersComponent = "searchResultHeadersComponent";

const SearchResultHeadersComponent: React.FC<SearchResultHeadersProps> = ({
  className,
  serviceInfo,
}) => {
  return (
    <aside className={`${searchResultHeadersComponent} ${className} row`}>
      {/* <!-- Search results header --> */}
      <div className="rlr-search-results-header rlr-search-results-header__wrapper">
        <ResultheadersItemComponent
          image={serviceInfo?.attributes?.Banner?.data?.attributes?.url}
          title={serviceInfo?.attributes?.Header}
          describtion={serviceInfo?.attributes?.Description}
        />
      </div>
    </aside>
  );
};
export default SearchResultHeadersComponent;
