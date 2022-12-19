import React from "react";
import { serverImage } from "../../../comon/util/image-utils";
import { IranVisaCardItemProps } from "./IranVisaCardItem.props";

const iranVisaCardItemComponent = "iranVisaCardItemComponent";

const IranVisaCardItemComponent: React.FC<IranVisaCardItemProps> = ({
  className,
  title,
  describtion,
  image,
  id,
  service,
}) => {
  return (
    <div
      className={`${iranVisaCardItemComponent} ${className} rlr-overview-detail rlr-product-card rlr-product-card--v3`}
    >
      <div className="rlr-readmore-desc rlr-overview-detail__description">
        <div
          className="rlr-secondary-menu-desc py-3 px-3"
          data-id="rlr-product-sec-overview"
        >
          <div className="rlr-secondary-menu-desc__icon Rosha-size-image-Card">
            <img
              className="Rosha-size-image-card-IranVisa rounded"
              src={serverImage(image || "")}
              alt=""
            />
          </div>
          <div className="">
            <div className="rlr-overview-detail">
              <div className="rlr-readmore-desc rlr-overview-detail__description">
                <div>
                  <a
                    href={`/service/${service}/${id}`}
                    className="rlr-product-card__anchor-title"
                  >
                    <h2
                      className="rlr-product-card__title  Rosha-height-title-card"
                      itemProp="name"
                    >
                      {title}
                    </h2>
                  </a>
                </div>
                <p className="rlr-readmore-desc__content rlr-js-desc">
                  {describtion}
                </p>
                <span className="rlr-readmore-desc__readmore rlr-js-readmore">
                  Show more...
                </span>
              </div>
            </div>
            <div className="row">
              <a
                href={`/service/${service}/${id}`}
                className="col-md-6 col-lg-4 col-sm-12 align-to-right"
              >
                <span className="btn rlr-icon-text__title Rosha-btn-moreinfo-style1">
                  {title}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IranVisaCardItemComponent;
