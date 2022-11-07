import React from "react";
import HotelInfoModalComponent from "../HotelInfoModal/HotelInfoModal.component";
import { ServicesCardItemProps } from "./ServicesCardItem.props";

const servicesCardItemComponent = "servicesCardItemComponent";

const ServicesCardItemComponent: React.FC<ServicesCardItemProps> = ({
  className,
  describtion,
  images,
  title,
  index,
}) => {
  return ( 
    <div
      className={`${servicesCardItemComponent} ${className} col-md-6 col-lg-4`}
    >
      {/* <!-- Product card item --> */}
      <article
        className="rlr-product-card rlr-product-card--v3"
        itemScope
        itemType="https://schema.org/Product"
      >
        {/* <!-- Product card image --> */}
        <figure className="rlr-product-card__image-wrapper">
          <span className="rlr-badge rlr-badge-- rlr-badge--accent-red rlr-product-card__badge">
            Suggested
          </span>
          <div className="rlr-product-detail-header__button-wrapper">
            <span className="rlr-product-detail-header__helptext rlr-js-helptext"></span>
          </div>
          <a href="./product-detail-page.html">
            <div className="swiper rlr-js-product-multi-image-swiper">
              <div className="swiper-wrapper">
                {images.map((image, index) => {
                  return (
                    <div className="swiper-slide" key={index}>
                      <img
                        itemProp="image"
                        data-sizes="auto"
                        data-src={image}
                        data-srcset={image}
                        className="lazyload Rosha-style-card-image"
                        alt="product-image"
                      />
                    </div>
                  );
                })}
              </div>
              <button
                type="button"
                className="btn rlr-button splide__arrow splide__arrow--prev"
                aria-label="prev button"
              >
                <i className="rlr-icon-font flaticon-left-chevron"> </i>
              </button>
              <button
                type="button"
                className="btn rlr-button splide__arrow splide__arrow--next"
                aria-label="next button"
              >
                <i className="rlr-icon-font flaticon-chevron"> </i>
              </button>
            </div>
          </a>
        </figure>
        <div className="rlr-product-card__detail-wrapper rlr-js-detail-wrapper">
          {/* <!-- Product card header --> */}
          <header className="rlr-product-card__header">
            <div>
              <a
                href="./product-detail-page.html"
                className="rlr-product-card__anchor-title"
              >
                <h2
                  className="rlr-product-card__title  Rosha-height-title-card"
                  itemProp="name"
                >
                  {title}
                </h2>
              </a>
              <div className="Rosha-height-discribtion">
                <a
                  href="./product-detail-page.html"
                  className="rlr-product-card__anchor-cat "
                >
                  <span className="rlr-product-card__sub-title">
                    {describtion}
                  </span>
                </a>
              </div>
            </div>
          </header>
          {/* <!-- Product card body --> */}
          <div className="rlr-product-card__details">
            <div
              className="rlr-product-card__ratings"
              itemProp="aggregateRating"
              itemScope
              itemType="https://schema.org/AggregateRating"
            >
              <div
                className="rlr-review-stars"
                itemProp="ratingValue"
                itemScope
                itemType="https://schema.org/Product"
              >
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star"> </i>
              </div>
            </div>
          </div>
          {/* <!-- Product card footer --> */}
          <div className="rlr-product-card__footer row ">
            <div className="row">
              <a type="button" className="col-md-6 my-2">
                <span
                  className="btn rlr-icon-text__title Rosha-btn-moreinfo-style2"
                  data-bs-toggle="modal"
                  data-bs-target={`#myModal${index}`}
                >
                  More Info
                </span>
              </a>
              <div className="col-md-6 my-2">
                <a
                  href="Rosha-Form.html"
                  className="btn rlr-icon-text__title Rosha-btn-moreinfo-style1"
                >
                  Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      <HotelInfoModalComponent index={index} title={title} /> 
    </div>
  );
};

export default ServicesCardItemComponent;
