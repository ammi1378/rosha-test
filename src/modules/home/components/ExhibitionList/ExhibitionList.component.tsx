import React from "react";
import { ExhibitionListProps } from "./ExhibitionList.props";

const exhibitionListComponent = "exhibitionListComponent";

const ExhibitionListComponent: React.FC<ExhibitionListProps> = ({
  className,
}) => {
  return (
    <div>
      <section
        className={`${exhibitionListComponent} ${className} rlr-section rlr-section__mb`}
        style={{ paddingTop: "100px!important" }}
      >
        <div className="container">
          <div className="rlr-carousel__items">
            <div className="swiper rlr-js-product-card-swiper">
              <div className="rlr-section-header">
                <div className="rlr-section__title">
                  <h2 className="rlr-section__title--main"> Exhibition </h2>
                  <span className="rlr-section__title--sub">
                    Sost Brilliant reasons Emprise should be your one-stop-shop!
                  </span>
                </div>
                <div className="button-row">
                  <button
                    type="button"
                    className="btn rlr-button button button--previous rlr-button--carousel"
                    aria-label="Previous"
                  >
                    <i className="rlr-icon-font flaticon-left-chevron"> </i>
                  </button>
                  <div className="button-group button-group--cells">
                    <button className="button is-selected">1</button>
                    <button className="button">2</button>
                  </div>
                  <button
                    type="button"
                    className="btn rlr-button button button--next rlr-button--carousel"
                    aria-label="Next"
                  >
                    <i className="rlr-icon-font flaticon-chevron"> </i>
                  </button>
                </div>
              </div>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
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
                      <a href="./product-detail-page.html">
                        <div className="swiper rlr-js-product-multi-image-swiper">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/59972106.jpg"
                                data-srcset="./assets/NewImages/59972106.jpg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/about-conscentre-mtg-2010_iucn_38.jpg"
                                data-srcset="./assets/NewImages/about-conscentre-mtg-2010_iucn_38.jpg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/1491582425171.jpeg"
                                data-srcset="./assets/NewImages/1491582425171.jpeg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn rlr-button splide__arrow splide__arrow--prev"
                            aria-label="prev button"
                          >
                            <i className="rlr-icon-font flaticon-left-chevron"></i>
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
                              Parsian Esteghlal International Hotel
                            </h2>
                          </a>
                          <div className="Rosha-height-discribtion">
                            <a
                              href="./product-detail-page.html"
                              className="rlr-product-card__anchor-cat "
                            >
                              <span className="rlr-product-card__sub-title">
                                discribtion : Five star Parsian Esteghlal
                                International Hotel owned by parsian chain
                                hotels with 70,000 square meter of space is
                                located in bagh-e-shahr area
                              </span>
                            </a>
                          </div>
                        </div>
                      </header>
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
                      <div className="rlr-product-card__footer row ">
                        <div className="row">
                          <a type="button" className="col-md-6 my-2">
                            <span
                              className="btn rlr-icon-text__title Rosha-btn-moreinfo-style2"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
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
                </div>
                <div className="swiper-slide">
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
                      <a href="./product-detail-page.html">
                        <div className="swiper rlr-js-product-multi-image-swiper">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/about-conscentre-mtg-2010_iucn_38.jpg"
                                data-srcset="./assets/NewImages/about-conscentre-mtg-2010_iucn_38.jpg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/59972106.jpg"
                                data-srcset="./assets/NewImages/59972106.jpg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/1491582425171.jpeg"
                                data-srcset="./assets/NewImages/1491582425171.jpeg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn rlr-button splide__arrow splide__arrow--prev"
                            aria-label="prev button"
                          >
                            <i className="rlr-icon-font flaticon-left-chevron"></i>
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
                              Parsian Esteghlal International Hotel
                            </h2>
                          </a>
                          <div className="Rosha-height-discribtion">
                            <a
                              href="./product-detail-page.html"
                              className="rlr-product-card__anchor-cat "
                            >
                              <span className="rlr-product-card__sub-title">
                                discribtion : Five star Parsian Esteghlal
                                International Hotel owned by parsian chain
                                hotels with 70,000 square meter of space is
                                located in bagh-e-shahr area
                              </span>
                            </a>
                          </div>
                        </div>
                      </header>
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
                      <div className="rlr-product-card__footer row ">
                        <div className="row">
                          <a type="button" className="col-md-6 my-2">
                            <span
                              className="btn rlr-icon-text__title Rosha-btn-moreinfo-style2"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
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
                </div>
                <div className="swiper-slide">
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
                      <a href="./product-detail-page.html">
                        <div className="swiper rlr-js-product-multi-image-swiper">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/59972106.jpg"
                                data-srcset="./assets/NewImages/59972106.jpg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/1491582425171.jpeg"
                                data-srcset="./assets/NewImages/1491582425171.jpeg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/about-conscentre-mtg-2010_iucn_38.jpg"
                                data-srcset="./assets/NewImages/about-conscentre-mtg-2010_iucn_38.jpg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn rlr-button splide__arrow splide__arrow--prev"
                            aria-label="prev button"
                          >
                            <i className="rlr-icon-font flaticon-left-chevron"></i>
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
                              Parsian Esteghlal International Hotel
                            </h2>
                          </a>
                          <div className="Rosha-height-discribtion">
                            <a
                              href="./product-detail-page.html"
                              className="rlr-product-card__anchor-cat "
                            >
                              <span className="rlr-product-card__sub-title">
                                discribtion : Five star Parsian Esteghlal
                                International Hotel owned by parsian chain
                                hotels with 70,000 square meter of space is
                                located in bagh-e-shahr area
                              </span>
                            </a>
                          </div>
                        </div>
                      </header>
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
                      <div className="rlr-product-card__footer row ">
                        <div className="row">
                          <a type="button" className="col-md-6 my-2">
                            <span
                              className="btn rlr-icon-text__title Rosha-btn-moreinfo-style2"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
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
                </div>
                <div className="swiper-slide">
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
                      <a href="./product-detail-page.html">
                        <div className="swiper rlr-js-product-multi-image-swiper">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/59972106.jpg"
                                data-srcset="./assets/NewImages/59972106.jpg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/about-conscentre-mtg-2010_iucn_38.jpg"
                                data-srcset="./assets/NewImages/about-conscentre-mtg-2010_iucn_38.jpg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/1491582425171.jpeg"
                                data-srcset="./assets/NewImages/1491582425171.jpeg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn rlr-button splide__arrow splide__arrow--prev"
                            aria-label="prev button"
                          >
                            <i className="rlr-icon-font flaticon-left-chevron"></i>
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
                              Parsian Esteghlal International Hotel
                            </h2>
                          </a>
                          <div className="Rosha-height-discribtion">
                            <a
                              href="./product-detail-page.html"
                              className="rlr-product-card__anchor-cat "
                            >
                              <span className="rlr-product-card__sub-title">
                                discribtion : Five star Parsian Esteghlal
                                International Hotel owned by parsian chain
                                hotels with 70,000 square meter of space is
                                located in bagh-e-shahr area
                              </span>
                            </a>
                          </div>
                        </div>
                      </header>
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
                      <div className="rlr-product-card__footer row ">
                        <div className="row">
                          <a type="button" className="col-md-6 my-2">
                            <span
                              className="btn rlr-icon-text__title Rosha-btn-moreinfo-style2"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
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
                </div>
                <div className="swiper-slide">
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
                      <a href="./product-detail-page.html">
                        <div className="swiper rlr-js-product-multi-image-swiper">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/59972106.jpg"
                                data-srcset="./assets/NewImages/59972106.jpg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/about-conscentre-mtg-2010_iucn_38.jpg"
                                data-srcset="./assets/NewImages/about-conscentre-mtg-2010_iucn_38.jpg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/1491582425171.jpeg"
                                data-srcset="./assets/NewImages/1491582425171.jpeg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn rlr-button splide__arrow splide__arrow--prev"
                            aria-label="prev button"
                          >
                            <i className="rlr-icon-font flaticon-left-chevron"></i>
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
                              Parsian Esteghlal International Hotel
                            </h2>
                          </a>
                          <div className="Rosha-height-discribtion">
                            <a
                              href="./product-detail-page.html"
                              className="rlr-product-card__anchor-cat "
                            >
                              <span className="rlr-product-card__sub-title">
                                discribtion : Five star Parsian Esteghlal
                                International Hotel owned by parsian chain
                                hotels with 70,000 square meter of space is
                                located in bagh-e-shahr area
                              </span>
                            </a>
                          </div>
                        </div>
                      </header>
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
                      <div className="rlr-product-card__footer row ">
                        <div className="row">
                          <a type="button" className="col-md-6 my-2">
                            <span
                              className="btn rlr-icon-text__title Rosha-btn-moreinfo-style2"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
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
                </div>
                <div
                  className="swiper-slide"
                  data-aos="fade-up"
                  data-aos-offset="100"
                  data-aos-duration="600"
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
                      <a href="./product-detail-page.html">
                        <div className="swiper rlr-js-product-multi-image-swiper">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/59972106.jpg"
                                data-srcset="./assets/NewImages/59972106.jpg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/about-conscentre-mtg-2010_iucn_38.jpg"
                                data-srcset="./assets/NewImages/about-conscentre-mtg-2010_iucn_38.jpg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                itemProp="image"
                                data-sizes="auto"
                                data-src="./assets/NewImages/1491582425171.jpeg"
                                data-srcset="./assets/NewImages/1491582425171.jpeg"
                                className="lazyload Rosha-style-card-image"
                                alt="product-image"
                              />
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn rlr-button splide__arrow splide__arrow--prev"
                            aria-label="prev button"
                          >
                            <i className="rlr-icon-font flaticon-left-chevron"></i>
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
                              Parsian Esteghlal International Hotel
                            </h2>
                          </a>
                          <div className="Rosha-height-discribtion">
                            <a
                              href="./product-detail-page.html"
                              className="rlr-product-card__anchor-cat "
                            >
                              <span className="rlr-product-card__sub-title">
                                discribtion : Five star Parsian Esteghlal
                                International Hotel owned by parsian chain
                                hotels with 70,000 square meter of space is
                                located in bagh-e-shahr area
                              </span>
                            </a>
                          </div>
                        </div>
                      </header>
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
                      <div className="rlr-product-card__footer row ">
                        <div className="row">
                          <a type="button" className="col-md-6 my-2">
                            <span
                              className="btn rlr-icon-text__title Rosha-btn-moreinfo-style2"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExhibitionListComponent;
