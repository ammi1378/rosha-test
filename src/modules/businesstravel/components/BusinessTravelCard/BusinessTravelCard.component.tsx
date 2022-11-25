import React from "react";
import PaginationComponent from "../../../services/components/Pagination/Pagination.component";
import QuickNavbarComponent from "../QuickNavbar/QuickNavbar.component";
import { BusinessTravelCardProps } from "./BusinessTravelCard.props";

const businessTravelCardComponent = "businessTravelCardComponent";
const businessTravelCardData = [
  {
    image: "/NewImages/59972106.jpg",
    date: "Sanjeev Jha | 19 Jan 2022",
    title: "MT. Everest trekking theme",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    image: "/NewImages/59972106.jpg",
    date: "Sanjeev Jha | 19 Jan 2022",
    title: "MT. Everest trekking theme",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    image: "/NewImages/59972106.jpg",
    date: "Sanjeev Jha | 19 Jan 2022",
    title: "MT. Everest trekking theme",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
  {
    image: "/NewImages/59972106.jpg",
    date: "Sanjeev Jha | 19 Jan 2022",
    title: "MT. Everest trekking theme",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
  },
];
const BusinessTravelCardComponent: React.FC<BusinessTravelCardProps> = ({
  className,
}) => {
  return (
    <div
      className={`${businessTravelCardComponent} ${className} rlr-search-results-page__product-list col-lg-9`}
    >
      <QuickNavbarComponent />
      <div className="row rlr-search-results-page__card-wrapper">
        {businessTravelCardData.map((businessTravelCardItem, index) => {
          return (
            <div className="col-md-6 col-lg-4" key={index}>
              <article className="rlr-postcard">
                <img
                  item-prop="image"
                  data-sizes="auto"
                  data-src="/NewImages/59972106.jpg"
                  data-srcset="/NewImages/hotels/Dariush-Grand-Hotel10.jpg"
                  className="lazyload Rosha-style-card-image rounded"
                  alt="product-image"
                />
                <div className="rlr-postcard__summary">
                  <span className="rlr-postcard__author">
                    {businessTravelCardItem.date}
                  </span>
                  <a
                    href="./single.html"
                    className="rlr-product-card__anchor-title"
                  >
                    <h2 className="rlr-product-card__title">
                      {businessTravelCardItem.title}
                    </h2>
                  </a>
                  <p>{businessTravelCardItem.description}</p>
                </div>
              </article>
            </div>
          );
        })}
      </div>
      <PaginationComponent />
    </div>
  );
};

export default BusinessTravelCardComponent;
