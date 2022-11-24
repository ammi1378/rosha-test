import React from "react";
import { SouvenirsMainContentCardProps } from "./SouvenirsMainContentCard.props";

const souvenirsMainContentCardComponent = "souvenirsMainContentCardComponent";

const SouvenirsMainContentCardComponent: React.FC<
  SouvenirsMainContentCardProps
> = ({ className, title, cardsdetails }) => {
  return (
    <div className={`${souvenirsMainContentCardComponent} ${className}`}>
      <h3 className="mt-2">{title}</h3>
      <div
        className="rlr-secondary-menu-desc"
        data-id="rlr-product-sec-overview"
      >
        <div className="rlr-secondary-menu-desc__details ">
          {cardsdetails.map((cardsdetailsitem) => {
            return (
              <div
                className=" mt-2 rlr-overview-detail rlr-product-card rlr-product-card--v3"
                key={cardsdetailsitem.name}
              >
                <div className="rlr-readmore-desc rlr-overview-detail__description">
                  <div
                    className="rlr-secondary-menu-desc py-3 px-3"
                    data-id="rlr-product-sec-overview"
                  >
                    <div className="rlr-secondary-menu-desc__icon Rosha-size-image-Card">
                      <img
                        className="Rosha-size-image-card-IranVisa rounded"
                        src="/NewImages/new-traveler-booking-journey-sojern.webp"
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div className="rlr-overview-detail">
                        <div className="rlr-readmore-desc rlr-overview-detail__description">
                          <div>
                            <a
                              href="./Rosha-Form.html"
                              className="rlr-product-card__anchor-title"
                            >
                              <h2
                                className="rlr-product-card__title  Rosha-height-title-card"
                                itemProp="name"
                              >
                                {cardsdetailsitem.name}
                              </h2>
                            </a>
                          </div>
                          <p className="rlr-readmore-desc__content rlr-js-desc">
                            {cardsdetailsitem.describtion}
                          </p>
                          <span className="rlr-readmore-desc__readmore rlr-js-readmore">
                            Show more...
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-lg-4 col-sm-12 align-to-right">
                          <span className="btn rlr-icon-text__title Rosha-btn-moreinfo-style1">
                            {" "}
                            Iran Visa Booking{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SouvenirsMainContentCardComponent;
