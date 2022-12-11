import React from "react";
import { serverImage } from "../../../comon/util/image-utils";
import BookingFormSingleTourComponent from "../BookingFormSingleTour/BookingFormSingleTour.component";
import ProductDetailHeaderComponent from "../ProductDetailHeader/ProductDetailHeader.component";
import { ProductDetailSectionProps } from "./ProductDetailSection.props";

const contnetDetailSectionComponent = "contnetDetailSectionComponent";

const ContnetDetailSectionComponent: React.FC<ProductDetailSectionProps> = ({
  className,
  service,
}) => {
  return (
    <section
      className={`${contnetDetailSectionComponent} ${className} row rlr-product-detail-section`}
    >
      <div className={`rlr-product-detail-section__details col-xl-8`}>
        {/* <!-- Product Detail Header --> */}
        <div className="rlr-product-detail-header" id="rlr-js-detail-header">
          <div className="rlr-product-detail-header__contents">
            {/* <!-- Breadcrumb --> */}

            <h1 className="rlr-section__heading--main rlr-product-detail-header__title">
              {service.title}
            </h1>
            <div
              className="rlr-review-stars"
              itemScope
              itemType="https://schema.org/Product"
            >
              {service.stars && (
                <div
                  className="rlr-review-stars"
                  itemProp="ratingValue"
                  itemScope
                  itemType="https://schema.org/Product"
                >
                  {Array(service.stars)
                    .fill("")
                    .map((i, index) => {
                      return (
                        <i
                          key={index}
                          className="rlr-icon-font flaticon-star-1"
                        >
                          {" "}
                        </i>
                      );
                    })}
                  {Array(5 - service.stars)
                    .fill("")
                    .map((i, index) => {
                      return (
                        <i key={index} className="rlr-icon-font flaticon-star">
                          {" "}
                        </i>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
          <div className="rlr-product-detail-header__actions">
            <button
              type="button"
              data-bs-toggle="popover-share"
              data-content-id="rlr-js-share-popover"
              id="rlr-js-share-button"
              className="btn rlr-button rlr-button--circle rlr-popover-button"
              aria-label="share"
            >
              <i className="rlr-icon-font flaticon-share-1"></i>
            </button>
            {/* TODO */}
            <div id="rlr-js-share-popover" className="rlr-popover--hide">
              <div className="rlr-share">
                <h3 className="rlr-share__title">Share with a friend</h3>
                <ul className="rlr-share__items">
                  <li className="rlr-share__list rlr-js--facebook">
                    <a
                      href="#"
                      className="rlr-icon-text rlr-icon-text--anchor rlr-icon-text__block rlr-share__item"
                    >
                      <i className="rlr-icon-font flaticon-facebook"> </i>
                      <span className="rlr-share__title">Facebook </span>
                    </a>
                  </li>
                  <li className="rlr-share__list rlr-js--twitter">
                    <a
                      href="#"
                      className="rlr-icon-text rlr-icon-text--anchor rlr-icon-text__block rlr-share__item"
                    >
                      <i className="rlr-icon-font flaticon-twitter"> </i>
                      <span className="rlr-share__title">Twitter </span>
                    </a>
                  </li>
                  <li className="rlr-share__list rlr-js--reddit">
                    <a
                      href="#"
                      className="rlr-icon-text rlr-icon-text--anchor rlr-icon-text__block rlr-share__item"
                    >
                      <i className="rlr-icon-font flaticon-instagram"> </i>
                      <span className="rlr-share__title">Reddit </span>
                    </a>
                  </li>
                  <li className="rlr-share__list rlr-js--whatsapp">
                    <a
                      href="#"
                      className="rlr-icon-text rlr-icon-text--anchor rlr-icon-text__block rlr-share__item"
                    >
                      <i className="rlr-icon-font flaticon-whatsapp"> </i>
                      <span className="rlr-share__title">Whatsapp </span>
                    </a>
                  </li>
                  <li className="rlr-share__list rlr-js--messenger">
                    <a
                      href="#"
                      className="rlr-icon-text rlr-icon-text--anchor rlr-icon-text__block rlr-share__item"
                    >
                      <i className="rlr-icon-font flaticon-messenger"> </i>
                      <span className="rlr-share__title">Messenger </span>
                    </a>
                  </li>
                  <li className="rlr-share__list rlr-js--email">
                    <a
                      href="#"
                      className="rlr-icon-text rlr-icon-text--anchor rlr-icon-text__block rlr-share__item"
                    >
                      <i className="rlr-icon-font flaticon-email-1"> </i>
                      <span className="rlr-share__title">Email </span>
                    </a>
                  </li>
                </ul>
                <div className="rlr-copylink">
                  <label className="rlr-copylink__title">Share link</label>
                  <div className="rlr-copylink__wrapper">
                    <input
                      type="text"
                      autoComplete="off"
                      className="form-control rlr-copylink__input"
                      value="join.untitledui.com/project"
                    />
                    <i className="rlr-icon-font flaticon-copy"> </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="rlr-product-detail-header__button-wrapper">
              <button
                type="button"
                className="btn rlr-button rlr-button--circle rlr-wishlist rlr-wishlist-button rlr-js-action-wishlist"
                aria-label="Save to Wishlist"
              >
                <i className="rlr-icon-font flaticon-heart-1"> </i>
              </button>
              <span className="rlr-product-detail-header__helptext rlr-js-helptext"></span>
            </div>
            {/* TODO */}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: service.moreInfo || "" }}></div>
      </div>
    </section>
  );
};

export default ContnetDetailSectionComponent;
