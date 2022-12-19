import React from "react";
import PaginationComponent from "../../../services/components/Pagination/Pagination.component";
import QuickNavbarComponent from "../QuickNavbar/QuickNavbar.component";
import { UsefulInformationCardProps } from "./UsefulInformationCard.props";

const usefulInformationCardComponent = "usefulInformationCardComponent";
const UsefulInformationCardData = [
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
const UsefulInformationCardComponent: React.FC<UsefulInformationCardProps> = ({
  className,
}) => {
  return (
    <div
      className={`${usefulInformationCardComponent} ${className} rlr-search-results-page__product-list col-lg-9`}
    >
      <QuickNavbarComponent />
      <div className="row rlr-search-results-page__card-wrapper">
        {UsefulInformationCardData.map((UsefulInformationItem, index) => {
          return (
            <div className="col-md-6 col-lg-4" key={index}>
              <article className="rlr-postcard">
                <img
                  itemprop="image"
                  data-sizes="auto"
                  data-src="/NewImages/59972106.jpg"
                  data-srcset="/NewImages/hotels/Dariush-Grand-Hotel10.jpg"
                  className="lazyload Rosha-style-card-image rounded"
                  alt="product-image"
                />
                <div className="rlr-postcard__summary">
                  <span className="rlr-postcard__author">
                    {UsefulInformationItem.date}
                  </span>
                  <a
                    href="./single.html"
                    className="rlr-product-card__anchor-title"
                  >
                    <h2 className="rlr-product-card__title">
                      {UsefulInformationItem.title}
                    </h2>
                  </a>
                  <p>{UsefulInformationItem.description}</p>
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

export default UsefulInformationCardComponent;
