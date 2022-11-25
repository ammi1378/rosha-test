import React from "react";
import HomeCardItemComponent from "../../../home/components/HomeCardItem/HomeCardItem.component";
import PaginationComponent from "../../../services/components/Pagination/Pagination.component";
import { CardToursProps } from "./CardTours.props";

const cardToursComponent = "cardToursComponent";

const CardToursComponent: React.FC<CardToursProps> = ({
  className,
  tours,
  service,
}) => {
  return (
    <div
      className={`${cardToursComponent} ${className} rlr-search-results-page__product-list col-lg-9`}
    >
      <div className="row rlr-search-results-page__card-wrapper">
        {tours.map((tourItem, index) => {
          return (
            <HomeCardItemComponent
              key={index}
              service={service}
              item={tourItem}
              isSearchListing={true}
            />
          );
        })}
      </div>
      {/* <PaginationComponent /> */}
    </div>
  );
};

export default CardToursComponent;
