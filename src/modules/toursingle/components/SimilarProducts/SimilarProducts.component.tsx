import React from "react";
import { SimilarProductsProps } from "./SimilarProducts.props";

const similarProductsComponent = "similarProductsComponent";

const SimilarProductsComponent: React.FC<SimilarProductsProps> = ({ className }) => {
  return <section className={`${similarProductsComponent} ${className} rlr-section rlr-section__mt rlr-related-product-wrapper`}>
    {/* <!-- Section heading --> */}
    <div className="rlr-section-header">
      {/* <!-- Section heading --> */}
      <div className="rlr-section__title">
        <h2 className="rlr-section__title--main">Similar Product</h2>
        <span className="rlr-section__title--sub">Sost Brilliant reasons Emprise should be your
          one-stop-shop!</span>
      </div>
      <div className="button-row">
        <a href="./search-results--left-sidebar.html"
          className="btn rlr-button rlr-button--large rlr-button--rounded rlr-button--brand"> Check All
        </a>
      </div>
    </div>
    <div className="row rlr-featured__cards">
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset="250" data-aos-duration="700">
        {/* <!-- Featured prodcut card --> */}
        <article className="rlr-product-card rlr-product-card--featured" itemScope
          itemType="https://schema.org/Product">
          {/* <!-- Image --> */}
          <figure className="rlr-product-card__image-wrapper">
            <img itemProp="image"
              data-src="./assets/images/product-images/small/featured-thumb-01.jpg"
              data-srcset="./assets/images/product-images/small/featured-thumb-01.jpg"
              data-sizes="auto" className="lazyload" alt="" />
          </figure>
          {/* <!-- Card body --> */}
          <div className="rlr-product-card--featured__inner">
            <span
              className="rlr-badge rlr-badge--right rlr-badge-- rlr-badge--abs rlr-badge--abs-right">
              4.9 </span>
            <div className="rlr-product-card--featured__body card-img-overlay">
              <div className="rlr-product-card--featured__duration">
                <p className="body">10 Days | 09 Nights</p>
                <h4 className="type-h4">$895.50</h4>
              </div>
              <div className="rlr-product-detail-header__actions">
                <div className="rlr-product-detail-header__button-wrapper">
                  <button type="button"
                    className="btn rlr-button rlr-button--circle rlr-wishlist rlr-wishlist-button--no-bg rlr-wishlist-button rlr-js-action-wishlist"
                    aria-label="Save to Wishlist">
                    <i className="rlr-icon-font flaticon-heart-1"> </i>
                  </button>
                  <span className="rlr-product-detail-header__helptext rlr-js-helptext"></span>
                </div>
                <a href="./product-detail-page.html"
                  className="btn rlr-button product-card-buttonrlr-button--medium rlr-button--rounded rlr-button--brand">
                  Explore </a>
              </div>
            </div>
          </div>
          <a href="./product-detail-page.html"
            className="rlr-product-card__anchor rlr-product-card__anchor--featured"></a>
        </article>
        {/* <!-- Summary --> */}
        <div className="rlr-product-card--featured__summary">
          <h4 className="type-h6-semi-bold">Train Tour Skyline</h4>
          <p className="type-body">Check Out Daily Deals and Promotion on Hotels. Easy &amp; Fast Booking
          </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset="300" data-aos-duration="725">
        {/* <!-- Featured prodcut card --> */}
        <article className="rlr-product-card rlr-product-card--featured" itemScope
          itemType="https://schema.org/Product">
          {/* <!-- Image --> */}
          <figure className="rlr-product-card__image-wrapper">
            <img itemProp="image"
              data-src="./assets/images/product-images/small/featured-thumb-02.jpg"
              data-srcset="./assets/images/product-images/small/featured-thumb-02.jpg"
              data-sizes="auto" className="lazyload" alt="" />
          </figure>
          {/* <!-- Card body --> */}
          <div className="rlr-product-card--featured__inner">
            <span
              className="rlr-badge rlr-badge--right rlr-badge-- rlr-badge--abs rlr-badge--abs-right">
              4.9 </span>
            <div className="rlr-product-card--featured__body card-img-overlay">
              <div className="rlr-product-card--featured__duration">
                <p className="body">10 Days | 09 Nights</p>
                <h4 className="type-h4">$895.50</h4>
              </div>
              <div className="rlr-product-detail-header__actions">
                <div className="rlr-product-detail-header__button-wrapper">
                  <button type="button"
                    className="btn rlr-button rlr-button--circle rlr-wishlist rlr-wishlist-button--no-bg rlr-wishlist-button rlr-js-action-wishlist"
                    aria-label="Save to Wishlist">
                    <i className="rlr-icon-font flaticon-heart-1"> </i>
                  </button>
                  <span className="rlr-product-detail-header__helptext rlr-js-helptext"></span>
                </div>
                <a href="./product-detail-page.html"
                  className="btn rlr-button product-card-buttonrlr-button--medium rlr-button--rounded rlr-button--brand">
                  Explore </a>
              </div>
            </div>
          </div>
          <a href="./product-detail-page.html"
            className="rlr-product-card__anchor rlr-product-card__anchor--featured"></a>
        </article>
        {/* <!-- Summary --> */}
        <div className="rlr-product-card--featured__summary">
          <h4 className="type-h6-semi-bold">Train Tour Skyline</h4>
          <p className="type-body">Check Out Daily Deals and Promotion on Hotels. Easy &amp; Fast Booking
          </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-offset="350" data-aos-duration="750">
        {/* <!-- Featured prodcut card --> */}
        <article className="rlr-product-card rlr-product-card--featured" itemScope
          itemType="https://schema.org/Product">
          {/* <!-- Image --> */}
          <figure className="rlr-product-card__image-wrapper">
            <img itemProp="image"
              data-src="./assets/images/product-images/small/featured-thumb-03.jpg"
              data-srcset="./assets/images/product-images/small/featured-thumb-03.jpg"
              data-sizes="auto" className="lazyload" alt="" />
          </figure>
          {/* <!-- Card body --> */}
          <div className="rlr-product-card--featured__inner">
            <span
              className="rlr-badge rlr-badge--right rlr-badge-- rlr-badge--abs rlr-badge--abs-right">
              4.9 </span>
            <div className="rlr-product-card--featured__body card-img-overlay">
              <div className="rlr-product-card--featured__duration">
                <p className="body">10 Days | 09 Nights</p>
                <h4 className="type-h4">$895.50</h4>
              </div>
              <div className="rlr-product-detail-header__actions">
                <div className="rlr-product-detail-header__button-wrapper">
                  <button type="button"
                    className="btn rlr-button rlr-button--circle rlr-wishlist rlr-wishlist-button--no-bg rlr-wishlist-button rlr-js-action-wishlist"
                    aria-label="Save to Wishlist">
                    <i className="rlr-icon-font flaticon-heart-1"> </i>
                  </button>
                  <span className="rlr-product-detail-header__helptext rlr-js-helptext"></span>
                </div>
                <a href="./product-detail-page.html"
                  className="btn rlr-button product-card-buttonrlr-button--medium rlr-button--rounded rlr-button--brand">
                  Explore </a>
              </div>
            </div>
          </div>
          <a href="./product-detail-page.html"
            className="rlr-product-card__anchor rlr-product-card__anchor--featured"></a>
        </article>
        {/* <!-- Summary --> */}
        <div className="rlr-product-card--featured__summary">
          <h4 className="type-h6-semi-bold">Train Tour Skyline</h4>
          <p className="type-body">Check Out Daily Deals and Promotion on Hotels. Easy &amp; Fast Booking
          </p>
        </div>
      </div>
    </div>
  </section>
};

export default SimilarProductsComponent;