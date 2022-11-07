import React from "react";
import ResultheadersItemComponent from "../ResultheadersItem/ResultheadersItem.component";
import { TourSearchResultHeadersProps } from "./TourSearchResultHeaders.props";

const tourSearchResultHeadersComponent = "tourSearchResultHeadersComponent";

const resultHeaderData = [
  {
    image: "/NewImages/hotels/5-things-iran-social-image.jpg",
    title: "Hotel Reservation ",
    describtion:
      "The complex is raised high on a walled platform, with five or halls of varying size, and grand entrances The function of Persepolis remains quite unclear The complex is raised high on a walled platform with five or halls of varying size, and grand entrances.The function of Persepolis remains quite unclear The complex is raised high on a walled platformwith five  or halls of varying size, and grand entrances.The function of Persepolis remains quite unclear  The complex is raised high on a walled platform, with five or halls of varying size, and grand  entrances.The function of Persepolis remains quite unclear ",
  },
];

const TourSearchResultHeadersComponent: React.FC<
  TourSearchResultHeadersProps
> = ({ className }) => {
  return (
    <aside className={`${tourSearchResultHeadersComponent} ${className} row`}>
      {/* <!-- Search results header --> */}
      <div className="rlr-search-results-header rlr-search-results-header__wrapper">
        {resultHeaderData.map((resultHeaderItem) => {
          return (
            <ResultheadersItemComponent
              image={resultHeaderItem.image}
              title={resultHeaderItem.title}
              describtion={resultHeaderItem.describtion}
            />
          );
        })}
      </div>
    </aside>
  );
};
export default TourSearchResultHeadersComponent;
