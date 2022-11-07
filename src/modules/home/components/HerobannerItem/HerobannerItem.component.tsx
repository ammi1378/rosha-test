import React from "react";
import { HerobannerItemProps } from "./HerobannerItem.props";

const herobannerItemComponent = "herobannerItemComponent";

const HerobannerItemComponent: React.FC<HerobannerItemProps> = ({
  className,
  image,
  title,
  discribtion
}) => {
  return <li className={`${herobannerItemComponent} ${className} splide__slide rlr-banner-splide__slide`}>
    <div className="rlr-banner-splide__image-wrapper lazyload Rosha-height-home-banner">
      <img
        className="rlr-banner-splide__banner-img Rosha-style-banner"
        data-sizes="auto"
        data-src="/NewImages/photo-1517248135467-4c7edcad34c4-1024x683.webp"
        src="/NewImages/photo-1517248135467-4c7edcad34c4-1024x683.webp"
        alt="#"
      />
    </div>
    <article className="rlr-banner-splide__content-wrapper">
      <header className="rlr-banner-splide__header">
        <h2 className="rlr-banner-splide__slogan">
          {title}
        </h2>
        <span className="rlr-banner-splide__sub-title">
          {discribtion}
        </span>
      </header>
      <div className="rlr-banner-splide__content-desc">
        <div className="rlr-banner-splide__temperature">
          <div className="rlr-banner-splide__arrows">
            <button
              className="rlr-banner-splide__arrow rlr-banner-splide__arrow--prev rlr-banner-js-arrow-prev"
              aria-label="prev button"
            >
              <span>
                <i className="rlr-icon-font flaticon-left"></i>
              </span>
            </button>
            <button
              className="rlr-banner-splide__arrow rlr-banner-splide__arrow--next rlr-banner-js-arrow-next"
              aria-label="next button"
            >
              <span>
                <i className="rlr-icon-font flaticon-right"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="rlr-banner-splide__payment-option">
          <span>
            <i className="rlr-icon-font flaticon-credit-cards-payment"></i>
          </span>
          <div className="rlr-banner-splide__content-desc-right">
            <span className="rlr-banner-splide__payment-desc">
              We Accept Payment Through All Cards & Banking
            </span>
            <a
              href="./product-detail-page.html"
              className="btn rlr-button rlr-banner-splide__book-now"
            >
              Book Now!
            </a>
          </div>
        </div>
      </div>
    </article>
  </li>
};

export default HerobannerItemComponent;