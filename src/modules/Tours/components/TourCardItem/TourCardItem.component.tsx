import React from "react";
import { TourCardItemProps } from "./TourCardItem.props";

const tourCardItemComponent = "tourCardItemComponent";

const TourCardItemComponent: React.FC<TourCardItemProps> = ({
  className,
  cities,
  Historical,
  images,
  duration,
  describtion,
  title,
}) => {
  return <div className={`${tourCardItemComponent} ${className} col-md-6 col-lg-4`}>
    {/* <!-- Product card item --> */}
    <article className="rlr-product-card rlr-product-card--v3" itemScope itemType="https://schema.org/Product">
      {/* <!-- Product card image --> */}
      <figure className="rlr-product-card__image-wrapper">
        <span className="rlr-badge rlr-badge-- rlr-badge--accent-red rlr-product-card__badge">Suggested</span>
        <div className="rlr-product-detail-header__button-wrapper">
          <span className="rlr-product-detail-header__helptext rlr-js-helptext"></span>
        </div>
        <a href="#">
          <div className="swiper rlr-js-product-multi-image-swiper">
            <div className="swiper-wrapper">
              {images.map(
                (image, index) => {
                  return (
                    <div key={index} className="swiper-slide">
                      <img itemProp="image" data-sizes="auto"
                        data-src={image}
                        data-srcset={image}
                        className="lazyload Rosha-style-card-image" alt="product-image" />
                    </div>
                  )
                })}
            </div>
            <button type="button" className="btn rlr-button splide__arrow splide__arrow--prev"
              aria-label="prev button">
              <i className="rlr-icon-font flaticon-left-chevron"> </i>
            </button>
            <button type="button" className="btn rlr-button splide__arrow splide__arrow--next"
              aria-label="next button">
              <i className="rlr-icon-font flaticon-chevron"> </i>
            </button>
          </div>
        </a>
      </figure>
      <div className="rlr-product-card__detail-wrapper rlr-js-detail-wrapper">
        {/* <!-- Product card header --> */}
        <header className="rlr-product-card__header">
          <div>
            <a href="./product-detail-page.html" className="rlr-product-card__anchor-title">
              <h2 className="rlr-product-card__title  Rosha-height-title-card" itemProp="name">
                {title}
              </h2>
            </a>
            <div>
              <a href="./product-detail-page.html" className="rlr-product-card__anchor-cat">
                <span className="rlr-product-card__sub-title">
                  {Historical}
                </span>
              </a>
              <span className="rlr-product-card__sub-title">|</span>
              <a href="./product-detail-page.html" className="rlr-product-card__anchor-sub-cat">
                <span className="rlr-product-card__sub-title">
                  {cities}
                </span>
              </a>
            </div>
          </div>
        </header>
        {/* <!-- Product card body --> */}
        <div className="rlr-product-card__details">
          <div className="rlr-product-card__prices" itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <div className="rlr-icon-text rlr-product-card__icon-text"><i className="rlr-icon-font flaticon-three-o-clock-clock"> </i> <span className=""> {duration} </span></div>
          </div>
          <div className="rlr-product-card__ratings" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            <div className="rlr-review-stars" itemProp="ratingValue" itemScope itemType="https://schema.org/Product">
              <i className="rlr-icon-font flaticon-star-1"></i> <i className="rlr-icon-font flaticon-star-1"> </i> <i className="rlr-icon-font flaticon-star-1"> </i> <i className="rlr-icon-font flaticon-star-1"> </i> <i className="rlr-icon-font flaticon-star"> </i>
            </div>
          </div>
        </div>
        {/* <!-- Product card footer --> */}
        <div className="rlr-product-card__footer">
          <ul className="rlr-product-card__icon-text-list">
            {describtion.map((describtion, index) => {
              return (
                <li key={index} className="rlr-icon-text rlr-product-card__icon-text">
                  <i className="rlr-icon-font flaticon-check"> </i>
                  <span className="rlr-icon-text__title"> {describtion} </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </article>
  </div>
};

export default TourCardItemComponent;