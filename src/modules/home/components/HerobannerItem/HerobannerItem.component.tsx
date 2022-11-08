import React from "react";
import { serverImage } from "../../../comon/util/image-utils";
import { HerobannerItemProps } from "./HerobannerItem.props";

const herobannerItemComponent = "herobannerItemComponent";

const HerobannerItemComponent: React.FC<HerobannerItemProps> = ({
  className,
  image,
  title,
  discribtion,
  link,
  subtitle,
}) => {
  return (
    <li
      className={`${herobannerItemComponent} ${className} splide__slide rlr-banner-splide__slide`}
    >
      <div className="rlr-banner-splide__image-wrapper lazyload Rosha-height-home-banner">
        <img
          className="rlr-banner-splide__banner-img Rosha-style-banner"
          data-sizes="auto"
          data-src={serverImage(image || '')}
          src={serverImage(image || '')}
        />
      </div>
      <article className="rlr-banner-splide__content-wrapper">
        <header className="rlr-banner-splide__header">
          <h2 className="rlr-banner-splide__slogan">{title}</h2>
          <span className="rlr-banner-splide__sub-title">{subtitle}</span>
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
                {discribtion}
              </span>
              <a
                href={link?.Link}
                target="_blank"
                className="btn rlr-button rlr-banner-splide__book-now"
              >
                {link?.Text}
              </a>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};

export default HerobannerItemComponent;
