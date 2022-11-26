import Link from "next/link";
import React from "react";
import { serverImage } from "../../../comon/util/image-utils";
import { HomeCardItemProps } from "./HomeCardItem.props";

const homeCardItemComponent = "homeCardItemComponent";

const HomeCardItemComponent: React.FC<HomeCardItemProps> = ({
  className,
  item,
  service,
  isSearchListing,
}) => {
  return (
    <div
      className={`${className} ${homeCardItemComponent} ${isSearchListing ? "col-md-6 col-lg-4" : "swiper-slide"
        }`}
    >
      <article
        className="rlr-product-card rlr-product-card--v3"
        itemScope
        itemType="https://schema.org/Product"
      >
        <figure className="rlr-product-card__image-wrapper">
          <span className="rlr-badge rlr-badge-- rlr-badge--accent-red rlr-product-card__badge">
            Suggested
          </span>
          <div className="rlr-product-detail-header__button-wrapper">
            <span className="rlr-product-detail-header__helptext rlr-js-helptext"></span>
          </div>
          <a href={`/service/${service}/${item.id}`} target="_blank">
            <div className="swiper rlr-js-product-multi-image-swiper">
              <div className="swiper-wrapper">
                {item.images?.map((image) => {
                  return (
                    image?.url && (
                      <div className="swiper-slide" key={image.id}>
                        <img
                          itemProp="image"
                          data-sizes="auto"
                          data-src={serverImage(image?.url)}
                          className="lazyload Rosha-style-card-image"
                          alt={image?.alt}
                        />
                      </div>
                    )
                  );
                })}
              </div>
              <button
                type="button"
                className="btn rlr-button splide__arrow splide__arrow--prev"
                aria-label="prev button"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="rlr-icon-font flaticon-left-chevron"> </i>
              </button>
              <button
                type="button"
                className="btn rlr-button splide__arrow splide__arrow--next"
                aria-label="next button"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="rlr-icon-font flaticon-chevron"> </i>
              </button>
            </div>
          </a>
        </figure>
        <div className="rlr-product-card__detail-wrapper rlr-js-detail-wrapper">
          <header className="rlr-product-card__header">
            <div>
              <a
                href={`/service/${service}/${item.id}`}
                target="_blank"
                className="rlr-product-card__anchor-title"
              >
                <h2
                  className="rlr-product-card__title  Rosha-height-title-card"
                  itemProp="name"
                >
                  {item.title}
                </h2>
              </a>
              <div>
                <a
                  href={`/service/${service}/${item.id}`}
                  target="_blank"
                  className="rlr-product-card__anchor-cat"
                >
                  <span className="rlr-product-card__sub-title">
                    {item.description}
                  </span>
                </a>
                {item.city && (
                  <>
                    <span className="rlr-product-card__sub-title">|</span>
                    <a
                      href={`/service/${service}/${item.id}`}
                      target="_blank"
                      className="rlr-product-card__anchor-sub-cat"
                    >
                      <span className="rlr-product-card__sub-title">
                        {item.city}
                      </span>
                    </a>
                  </>
                )}
                {item.city && (
                  <>
                    <span className="rlr-product-card__sub-title">|</span>
                    <span className="rlr-product-card__sub-title">
                      {item.season}
                    </span>
                  </>
                )}
              </div>
            </div>
          </header>
          <div className="rlr-product-card__details">
            {item.duration && (
              <div
                className="rlr-product-card__prices"
                itemProp="offers"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <div className="rlr-icon-text rlr-product-card__icon-text">
                  <i className="rlr-icon-font flaticon-three-o-clock-clock"></i>
                  <span className=""> {item.duration}day </span>
                </div>
              </div>
            )}
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
                {Array(item.star || 5)
                  .fill("")
                  .map((i) => {
                    return <i className="rlr-icon-font flaticon-star-1"> </i>;
                  })}
                {Array(5 - (item.star || 5))
                  .fill("")
                  .map((i) => {
                    return <i className="rlr-icon-font flaticon-star"> </i>;
                  })}
              </div>
            </div>
          </div>
        </div>

        <div className="rlr-product-card__footer row">
          {item.features && (
            <ul className="rlr-product-card__icon-text-list">
              {item.features?.map((feature, index) => {
                return (
                  <li
                    className="rlr-icon-text rlr-product-card__icon-text"
                    key={index}
                  >
                    <i className="rlr-icon-font flaticon-check"> </i>
                    <span className="rlr-icon-text__title">{feature}</span>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="row">
            <a type="button" className="col-md-6 my-2">
              <span className="btn rlr-icon-text__title Rosha-btn-moreinfo-style2" data-bs-toggle="modal" data-bs-target="#myModal"> More Info</span>
            </a>
            <div className="col-md-6 my-2">
              <span className="btn rlr-icon-text__title Rosha-btn-moreinfo-style1">Booking
              </span>
            </div>
          </div>
        </div>
      </article >
    </div>
  );
};

export default HomeCardItemComponent;
