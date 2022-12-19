import React from "react";
import IranVisaCardItemComponent from "../IranVisaCardItem/IranVisaCardItem.component";
import { CardIranvisaProps } from "./CardIranvisa.props";

const cardIranvisaComponent = "cardIranvisaComponent";
const CardIranvisaComponent: React.FC<CardIranvisaProps> = ({
  className,
  items,
  service,
}) => {
  debugger;
  return (
    <div
      className={`${cardIranvisaComponent} ${className} rlr-search-results-page__product-list col-lg-9`}
    >
      <div>
        <div
          className=" rlr-secondary-menu-desc"
          data-id="rlr-product-sec-overview"
        >
          <div className="rlr-secondary-menu-desc__details">
            {items.map((iranVisaCardItem) => {
              return (
                <IranVisaCardItemComponent
                  image={iranVisaCardItem.images?.at(0)?.url}
                  title={iranVisaCardItem.title}
                  describtion={iranVisaCardItem.description}
                  id={iranVisaCardItem.id}
                  service={service}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIranvisaComponent;
