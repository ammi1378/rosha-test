import React from "react";
import { serverImage } from "../../../comon/util/image-utils";
import { ProductDetailHeaderProps } from "./ProductDetailHeader.props";

const productDetailHeaderComponent = "productDetailHeaderComponent";

const ProductDetailHeaderComponent: React.FC<ProductDetailHeaderProps> = ({
  className,
  service,
}) => {
  return (
    <div
      className={`${productDetailHeaderComponent} ${className} rlr-product-detail-section__details col-xl-8`}
    >
      {/* <!-- Product Detail Header --> */}
      <div className="rlr-product-detail-header" id="rlr-js-detail-header">
        <div className="rlr-product-detail-header__contents">
          {/* <!-- Breadcrumb --> */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb rlr-breadcrumb__items">
              <li className="breadcrumb-item rlr-breadcrumb__item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item rlr-breadcrumb__item">
                <a href="/">Destination</a>
              </li>
              <li
                className="breadcrumb-item rlr-breadcrumb__item active"
                aria-current="page"
              >
                Tour
              </li>
            </ol>
          </nav>
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
                    return <i key={index} className="rlr-icon-font flaticon-star-1"> </i>;
                  })}
                {Array(5 - service.stars)
                  .fill("")
                  .map((i, index) => {
                    return <i key={index} className="rlr-icon-font flaticon-star"> </i>;
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
      {/* <!-- Secondary Menu --> */}
      <nav className="rlr-product-detail-secondary-menu">
        <ul
          className="rlr-product-detail-secondary-menu__tabitems"
          id="rlr-js-secondary-menu"
        >
          {service.sections?.map((section) => {
            return (
              <li
                className="rlr-product-detail-secondary-menu__tabitem js-tabitem"
                id={`rlr-product-sec-${section.title}`}
                key={section.title}
              >
                <span>{section.title}</span>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* <!-- Overview --> */}
      {service.sections?.map((section) => {
        if (section.type === "overview" && section.data.text?.length) {
          return (
            <div
              className="rlr-secondary-menu-desc"
              data-id={`rlr-product-sec-${section.title}`}
              key={section.title}
            >
              <div className="rlr-secondary-menu-desc__icon">
                <svg
                  width="41"
                  height="51"
                  viewBox="0 0 41 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.327 13.61H28.296c-.334 0-.558-.221-.558-.55l.002-11.852c0-.329.224-.55.558-.55.334 0 .558.221.558.55l-.002 11.304h11.473c.334 0 .558.22.558.55 0 .33-.224.547-.558.547z"
                    fill="#99A3AD"
                  />
                  <path
                    d="M36.54 50.707H4.568C2.005 50.707 0 48.73 0 46.207L.002 5.047c0-2.525 2.005-4.5 4.568-4.5h23.728c.11 0 .334.109.445.109L40.885 12.51c.11.11.11.22.11.439v33.255c.113 2.527-1.892 4.503-4.455 4.503zM4.568 1.756c-1.892 0-3.342 1.428-3.342 3.292v41.158c0 1.867 1.56 3.402 3.453 3.402H36.65c1.894 0 3.453-1.537 3.453-3.402l.002-32.926-11.92-11.524H4.567z"
                    fill="#99A3AD"
                  />
                  <path
                    d="M33.309 19.756h-19.27c-.335 0-.558-.22-.558-.55 0-.329.223-.549.557-.549h19.273c.334 0 .558.22.558.55-.002.329-.226.55-.56.55zM33.309 25.133H7.91c-.334 0-.558-.22-.558-.55 0-.328.224-.549.558-.549h25.399c.334 0 .558.22.558.55 0 .331-.224.55-.558.55zM33.309 30.622H7.91c-.334 0-.558-.22-.558-.55 0-.329.224-.55.558-.55h25.399c.334 0 .558.221.558.55 0 .33-.224.55-.558.55zM33.309 36.11H7.91c-.334 0-.558-.22-.558-.55 0-.329.224-.549.558-.549h25.399c.334 0 .558.22.558.55 0 .329-.224.55-.558.55zM33.309 41.487H7.91c-.334 0-.558-.22-.558-.549 0-.33.224-.55.558-.55h25.399c.334 0 .558.22.558.55 0 .33-.224.55-.558.55z"
                    fill="#99A3AD"
                  />
                </svg>
              </div>
              <div className="rlr-secondary-menu-desc__details">
                <div className="rlr-overview-detail">
                  <div className="rlr-readmore-desc rlr-overview-detail__description">
                    <p className="rlr-readmore-desc__content rlr-js-desc">
                      {section.data.text}
                    </p>
                    <span className="rlr-readmore-desc__readmore rlr-js-readmore">
                      Show more...
                    </span>
                  </div>
                  <div className="rlr-overview-detail__icon-groupset">
                    {section.data.serviceIcons.map((tourIconDetail: any) => {
                      return (
                        <div className="rlr-overview-detail__icon-group">
                          <span className="rlr-overview-detail__label">
                            {tourIconDetail.title}
                          </span>
                          <div className="rlr-overview-detail__icons">
                            <figure className="rlr-icon-text">
                              <i
                                className={`rlr-icon-font ${tourIconDetail.icon}`}
                              ></i>
                              <span className=""> {tourIconDetail.value}</span>
                            </figure>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (
          section.type === "service" &&
          section.data.services?.length
        ) {
          return (
            <div
              className="rlr-secondary-menu-desc"
              key={section.title}
              data-id={`rlr-product-sec-${section.title}`}
            >
              {/* <!-- Icon --> */}
              <div className="rlr-secondary-menu-desc__icon">
                <svg
                  width="50"
                  height="56"
                  viewBox="0 0 50 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.0157 0.127686H24.9679C21.6869 0.129864 18.4385 0.787955 15.4081 2.06438C12.3776 3.34081 9.62461 5.21058 7.30612 7.56694C4.98764 9.92329 3.14911 12.7201 1.89553 15.7976C0.641942 18.8752 -0.00215716 22.1732 5.42768e-06 25.5034C0.000252218 25.6667 0.0590139 25.8244 0.165333 25.9469C0.271652 26.0695 0.41827 26.1487 0.577845 26.1696C0.737421 26.1906 0.89906 26.1519 1.03262 26.0609C1.16618 25.9698 1.26255 25.8325 1.30374 25.6746C1.47986 24.998 2.10654 23.0634 2.89022 22.2039C3.99055 21.1594 5.33307 20.6056 6.77668 20.6172C8.20636 20.6136 9.57983 21.182 10.5995 22.1992C11.6258 23.3104 12.1684 24.6663 12.1684 26.1199C12.1684 26.2984 12.2382 26.4695 12.3626 26.5957C12.4869 26.7219 12.6555 26.7928 12.8313 26.7928C13.0071 26.7928 13.1758 26.7219 13.3001 26.5957C13.4244 26.4695 13.4942 26.2984 13.4942 26.1199C13.4942 24.6681 14.035 23.3147 15.058 22.2046C16.1518 21.1661 17.4853 20.6173 18.9187 20.6173C19.6312 20.6115 20.3379 20.7482 20.9984 21.0196C21.6589 21.2911 22.2602 21.6919 22.768 22.1993C23.7943 23.3105 24.3369 24.6665 24.3369 26.1199V44.326C24.3369 45.5699 23.8501 46.7629 22.9835 47.6424C22.1169 48.522 20.9416 49.0162 19.7161 49.0162C18.4905 49.0162 17.3152 48.522 16.4486 47.6424C15.582 46.7629 15.0952 45.5699 15.0952 44.326V42.1116C15.0952 41.9331 15.0253 41.762 14.901 41.6358C14.7767 41.5096 14.6081 41.4387 14.4323 41.4387C14.2565 41.4387 14.0878 41.5096 13.9635 41.6358C13.8392 41.762 13.7694 41.9331 13.7694 42.1116V44.326C13.7694 45.9268 14.3959 47.4621 15.5111 48.594C16.6263 49.7259 18.1389 50.3619 19.7161 50.3619C21.2932 50.3619 22.8058 49.7259 23.921 48.594C25.0362 47.4621 25.6628 45.9268 25.6628 44.326V26.1199C25.6628 24.6679 26.2034 23.3148 27.2265 22.2051C28.3203 21.1667 29.6536 20.6179 31.0872 20.6179H31.1138C32.5435 20.6143 33.917 21.1828 34.9366 22.2C35.9629 23.3111 36.5055 24.6665 36.5055 26.1206C36.5055 26.2991 36.5754 26.4702 36.6997 26.5964C36.824 26.7226 36.9926 26.7935 37.1685 26.7935C37.3443 26.7935 37.5129 26.7226 37.6372 26.5964C37.7615 26.4702 37.8314 26.2991 37.8314 26.1206C37.8314 24.6689 38.372 23.3155 39.3952 22.2052C40.489 21.1667 41.8224 20.618 43.2557 20.618H43.2824C44.7121 20.6144 46.0856 21.1827 47.1053 22.1999C47.8914 23.0567 48.5195 24.9971 48.6963 25.6745C48.7375 25.8324 48.8338 25.9697 48.9674 26.0608C49.101 26.1518 49.2626 26.1905 49.4222 26.1695C49.5818 26.1486 49.7284 26.0694 49.8347 25.9468C49.941 25.8242 49.9998 25.6665 50 25.5032V25.4707C49.9958 18.7479 47.3617 12.3019 42.6767 7.5496C37.9917 2.79732 31.6392 0.127744 25.0157 0.127686ZM48.0616 21.268C48.0558 21.2616 48.0497 21.2553 48.0435 21.2491C46.7765 19.9788 45.0662 19.2682 43.2853 19.272H43.2522C41.4716 19.272 39.8184 19.9522 38.4714 21.239C38.4617 21.2483 38.4522 21.258 38.443 21.2678C37.9254 21.8213 37.4952 22.4528 37.168 23.1398C36.841 22.4529 36.4112 21.8214 35.8938 21.268C35.8878 21.2616 35.8817 21.2552 35.8757 21.2491C34.6086 19.9788 32.8983 19.2682 31.1173 19.272H31.0842C29.3035 19.272 27.6503 19.9522 26.3035 21.239C26.2937 21.2483 26.2843 21.2579 26.2752 21.2677C25.7574 21.8211 25.3272 22.4525 24.9998 23.1395C24.6726 22.4525 24.2425 21.821 23.7248 21.2675C23.7189 21.2611 23.7129 21.2548 23.7067 21.2487C22.4397 19.9784 20.7294 19.2678 18.9485 19.2716H18.9154C17.1347 19.2716 15.4816 19.9517 14.1344 21.2386C14.1247 21.2479 14.1152 21.2575 14.106 21.2674C13.5885 21.8209 13.1586 22.4525 12.8314 23.1395C12.5042 22.4524 12.0741 21.821 11.5564 21.2675C11.5505 21.2611 11.5445 21.2548 11.5383 21.2487C10.2714 19.9785 8.56139 19.2678 6.78066 19.2715H6.74751C4.9668 19.2715 3.3136 19.9516 1.96655 21.2385C1.95683 21.2478 1.94733 21.2574 1.93816 21.2674C1.82613 21.3891 1.72132 21.5174 1.62426 21.6517C2.52389 16.0239 5.36592 10.9042 9.64244 7.20767C13.9189 3.51112 19.3512 1.47861 24.9683 1.47341H24.9998C25.0051 1.47273 25.0105 1.47273 25.0157 1.47341C30.6357 1.47473 36.0719 3.50557 40.3517 7.20259C44.6315 10.8996 47.4758 16.0216 48.3756 21.6523C48.2785 21.518 48.1737 21.3896 48.0616 21.268Z"
                    fill="#99A3AD"
                  />
                  <path
                    d="M49.6287 34.0793L39.8939 29.2311C39.8032 29.1859 39.7034 29.1624 39.6023 29.1624C39.5011 29.1624 39.4014 29.1859 39.3106 29.2311L29.5758 34.0655C29.4644 34.1209 29.3705 34.2069 29.3048 34.3137C29.2391 34.4206 29.2043 34.544 29.2043 34.67V43.919C29.2043 44.9461 29.4805 46.0925 30.0031 47.2341C30.6726 48.6962 31.6698 49.9592 32.739 50.6977L39.2287 55.1857C39.3387 55.2618 39.4688 55.3025 39.6019 55.3025C39.7351 55.3025 39.8651 55.2618 39.9751 55.1857L46.465 50.6976C48.447 49.3275 49.9997 46.3499 49.9997 43.9189V34.6834C49.9997 34.5576 49.9649 34.4343 49.8993 34.3275C49.8337 34.2207 49.74 34.1347 49.6287 34.0793ZM48.6738 43.9187C48.6738 45.8829 47.3205 48.4779 45.7186 49.5853L39.6019 53.8151L33.4852 49.5853C32.6078 48.9787 31.777 47.915 31.2054 46.6666C30.7699 45.7153 30.53 44.7394 30.53 43.9191V35.0895L39.6009 30.5845L48.6733 35.1027L48.6738 43.9187Z"
                    fill="#99A3AD"
                  />
                  <path
                    d="M35.9457 41.4619C35.8196 41.3385 35.6505 41.2707 35.4754 41.2734C35.3002 41.2761 35.1332 41.349 35.0109 41.4763C34.8885 41.6036 34.8208 41.7749 34.8225 41.9527C34.8242 42.1305 34.8952 42.3004 35.0199 42.4253L37.9605 45.3362C38.0844 45.4587 38.2505 45.5274 38.4234 45.5274C38.5964 45.5274 38.7625 45.4587 38.8863 45.3362L44.1839 40.0917C44.3086 39.9668 44.3796 39.7969 44.3813 39.6191C44.383 39.4413 44.3153 39.27 44.193 39.1427C44.0706 39.0154 43.9036 38.9425 43.7285 38.9398C43.5533 38.9371 43.3842 39.0049 43.2581 39.1284L38.4239 43.9146L35.9457 41.4619Z"
                    fill="#99A3AD"
                  />
                </svg>
              </div>
              {/* <!-- Overview --> */}
              <div className="rlr-secondary-menu-desc__details">
                <div className="rlr-readmore-desc">
                  <p className="rlr-readmore-desc__content rlr-js-desc">
                    {section.data.text}
                  </p>
                  <span className="rlr-readmore-desc__readmore rlr-js-readmore">
                    Show more...
                  </span>
                </div>
                <ul className="list-group list-group-flush rlr-secondary-menu-desc__list-group">
                  {section.data.services?.map((service, index) => {
                    return (
                      <li
                        className="rlr-icon-text rlr-secondary-menu-desc__list"
                        key={index}
                      >
                        <i className="rlr-icon-font flaticon-check-rounded"></i>
                        <span className="rlr-icon-text__text">{service}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        } else if (
          section.type === "media-expansion" &&
          section.data.mediaItems?.length
        ) {
          return (
            <div
              className="rlr-secondary-menu-desc"
              key={section.title}
              data-id={`rlr-product-sec-${section.title}`}
            >
              {/* <!-- Icon --> */}
              <div className="rlr-secondary-menu-desc__icon">
                <svg
                  width="43"
                  height="38"
                  viewBox="0 0 43 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43 .442c0-.016-.008-.03-.01-.047-.002-.015.003-.031 0-.047-.003-.014-.013-.024-.018-.037a.372.372 0 0 0-.035-.082.41.41 0 0 0-.177-.172.409.409 0 0 0-.08-.031.397.397 0 0 0-.085-.017C42.581.007 42.568 0 42.553 0c-.018 0-.032.008-.049.01-.016.002-.031-.003-.047 0L28.519 3.04 14.577.01h-.007c-.015-.003-.033 0-.05-.002-.013 0-.024-.008-.039-.008-.013 0-.025.006-.037.008-.018 0-.037 0-.054.003h-.004L.35 3.06c-.013.003-.024.013-.037.017a.44.44 0 0 0-.152.082.389.389 0 0 0-.059.062.438.438 0 0 0-.046.068.459.459 0 0 0-.049.165c0 .014-.008.025-.008.04v34.063c0 .017.008.03.01.047s-.001.03.002.047c.004.016.013.028.018.043a.377.377 0 0 0 .08.141c.014.017.026.033.042.047.026.023.056.04.087.058.017.009.031.02.049.026a.448.448 0 0 0 .255.022l13.94-3.03 13.94 3.03c.032.008.064.011.095.011.005 0 .01-.003.014-.003a.432.432 0 0 0 .082-.008l14.036-3.05c.014-.002.024-.012.037-.017a.47.47 0 0 0 .152-.082.44.44 0 0 0 .056-.06.43.43 0 0 0 .049-.07.432.432 0 0 0 .03-.075.374.374 0 0 0 .018-.089c0-.014.008-.025.008-.04V.443zM.894 3.85 14.037.993v16.584a.446.446 0 0 0-.272.136.44.44 0 0 0 .032.625c.082.073.158.151.24.225v15.589L.894 37.008V3.85zM14.93 19.413c.275.273.544.544.785.792a.448.448 0 0 0 .63.011.44.44 0 0 0 .012-.625 48.965 48.965 0 0 0-1.427-1.407V.993l13.144 2.856v21.217c-.259.11-.517.208-.776.284a.44.44 0 0 0 .125.866.446.446 0 0 0 .126-.019c.174-.051.35-.113.525-.178v10.988l-13.144-2.856V19.413zm14.036 6.215a9.751 9.751 0 0 0 1.137-.678.44.44 0 0 0 .11-.616.448.448 0 0 0-.62-.11 9.369 9.369 0 0 1-.627.398V3.85L42.108.993v33.159l-13.143 2.855V25.628z"
                    fill="#99A3AD"
                  />
                  <path
                    d="M5.452 26.484a26.968 26.968 0 0 1-.167-.966.445.445 0 0 0-.508-.37.442.442 0 0 0-.373.504c.055.352.105.634.147.857a2.365 2.365 0 0 0-1.848 2.297 2.37 2.37 0 0 0 2.378 2.358 2.37 2.37 0 0 0 2.378-2.358c-.001-1.174-.873-2.143-2.007-2.322zM5.08 30.28c-.82 0-1.487-.661-1.487-1.474S4.26 27.33 5.08 27.33c.82 0 1.486.662 1.486 1.475 0 .813-.667 1.474-1.486 1.474zM38.218 6.8l1.051-1.043a.44.44 0 0 0 0-.625.449.449 0 0 0-.63 0l-1.051 1.043-1.05-1.043a.449.449 0 0 0-.631 0 .44.44 0 0 0 0 .625L36.958 6.8l-1.051 1.043a.44.44 0 0 0 .316.755.45.45 0 0 0 .315-.13l.66-.656c.005.106.01.204.013.323.006.24.204.432.445.432h.012a.444.444 0 0 0 .434-.453l-.006-.185.542.539a.45.45 0 0 0 .631 0 .44.44 0 0 0 0-.626L38.22 6.8zM12.178 15.992c-.9-.55-1.764-.9-2.644-1.073a.441.441 0 1 0-.173.867c.773.152 1.542.466 2.35.959a.448.448 0 0 0 .613-.146.44.44 0 0 0-.146-.607zM4.551 23.348l.028-.001a.445.445 0 0 0 .418-.468 21.743 21.743 0 0 1-.042-1.335c0-.433.014-.869.048-1.3a.443.443 0 0 0-.41-.475c-.244-.032-.46.164-.479.406-.036.453-.05.913-.05 1.369 0 .47.015.938.043 1.388.014.235.21.416.444.416zM4.94 17.99a.447.447 0 0 0 .577-.254c.34-.877.834-1.479 1.47-1.788a.44.44 0 0 0 .202-.592.448.448 0 0 0-.596-.202c-.844.411-1.486 1.174-1.908 2.265a.439.439 0 0 0 .255.57zM18.24 21.53a.45.45 0 0 0-.63-.004.44.44 0 0 0-.003.626 27.948 27.948 0 0 0 2.017 1.868.444.444 0 0 0 .628-.057.44.44 0 0 0-.057-.623 27.215 27.215 0 0 1-1.954-1.81zM37.629 10.418a.443.443 0 0 0-.478.41c-.07.942-.19 1.822-.357 2.612a.442.442 0 0 0 .438.533c.206 0 .39-.143.435-.351.175-.828.301-1.746.374-2.729a.446.446 0 0 0-.412-.475zM36.584 15.69a.447.447 0 0 0-.594.209c-.051.105-.104.209-.16.311-.306.561-.686 1.257-1.138 2.015a.44.44 0 0 0 .157.606.45.45 0 0 0 .611-.155c.459-.77.845-1.476 1.155-2.045.062-.115.123-.232.18-.35a.44.44 0 0 0-.211-.59zM33.236 20.46a20.156 20.156 0 0 1-1.677 2.046.441.441 0 0 0 .326.745.446.446 0 0 0 .325-.14c.585-.62 1.174-1.339 1.75-2.137a.44.44 0 0 0-.102-.616.446.446 0 0 0-.622.101zM24.791 25.553a7.526 7.526 0 0 1-2.417-.754.446.446 0 0 0-.631.222.44.44 0 0 0 .21.558l.017.01c.904.448 1.816.731 2.712.842a.445.445 0 0 0 .498-.384.443.443 0 0 0-.389-.494z"
                    fill="#99A3AD"
                  />
                </svg>
              </div>
              <div className="rlr-secondary-menu-desc__details">
                {/* <!-- Itinerary item --> */}
                <div className="accordion rlr-accordion">
                  {section.data?.mediaItems?.map(
                    (itinerary: any, index: number) => {
                      return (
                        <div className="accordion-item rlr-accordion__item">
                          <div
                            className="accordion-header rlr-accordion__header"
                            id={`rlr-itinerary-header${index + 1}`}
                          >
                            <button
                              className="accordion-button rlr-accordion__button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#rlr-itinerary-collapse${
                                index + 1
                              }`}
                              aria-expanded="false"
                              aria-controls={`rlr-itinerary-collapse${
                                index + 1
                              }`}
                            >
                              <span className="rlr-accordion__badge">
                                {index + 1}
                              </span>
                              Day
                              {itinerary.title}
                            </button>
                          </div>
                          <div
                            id={`rlr-itinerary-collapse${index + 1}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`rlr-itinerary-header${index + 1}`}
                          >
                            <div className="accordion-body rlr-accordion__body">
                              <div className="rlr-readmore-desc">
                                <div
                                  className="rlr-readmore-desc__content rlr-js-desc"
                                  dangerouslySetInnerHTML={{
                                    __html: itinerary.description,
                                  }}
                                ></div>
                                <span className="rlr-readmore-desc__readmore rlr-js-readmore">
                                  Show more...
                                </span>
                              </div>
                              <div className="rlr-itinerary__media-group">
                                <div className="rlr-itinerary__media">
                                  <a
                                    data-fslightbox="demo-images"
                                    data-foo="bar"
                                    href="./assets/images/gallery/1568/suzy-brooks-nygy9pb5mp4-unsplash1568.jpg"
                                  >
                                    <figure className="rlr-lightbox--gallery__figure">
                                      <img
                                        className="rlr-lightbox--gallery__img"
                                        src="./assets/images/gallery/thumbs/suzy-brooks-nygy9pb5mp4-unsplash507.jpg"
                                        alt="Anchor Button"
                                      />
                                      <figcaption className="rlr-lightbox--gallery__figcaption">
                                        <span>
                                          <i className="rlr-icon-font flaticon-insert-picture-icon"></i>
                                        </span>
                                      </figcaption>
                                    </figure>
                                  </a>
                                </div>
                                <div className="rlr-itinerary__media">
                                  <a
                                    data-fslightbox="html5-demo-videos"
                                    data-video-poster="./assets/images/gallery/videos/spliderboat-sc.jpg"
                                    href="./assets/images/gallery/videos/spiderboat.mp4"
                                  >
                                    <figure className="rlr-lightbox--gallery__figure">
                                      <img
                                        className="rlr-lightbox--gallery__img img"
                                        src="./assets/images/gallery/videos/spliderboat-sc.jpg"
                                        alt="Anchor Button"
                                      />
                                      <figcaption className="rlr-lightbox--gallery__figcaption">
                                        <span>
                                          <i className="rlr-icon-font flaticon-play"></i>
                                        </span>
                                      </figcaption>
                                    </figure>
                                  </a>
                                </div>
                                <div className="rlr-itinerary__media">
                                  <div className="rlr-lightbox--gallery">
                                    <a
                                      data-fslightbox="custom-google-maps"
                                      data-className="d-block"
                                      href="#google-maps"
                                    >
                                      <figure className="rlr-lightbox--gallery__figure">
                                        <img
                                          className="rlr-lightbox--gallery__img"
                                          src="./assets/images/lightbox-map-thumb.jpg"
                                          alt="Itinerary Map"
                                        />
                                        <figcaption className="rlr-lightbox--gallery__figcaption">
                                          <span>
                                            <i className="rlr-icon-font flaticon-map-1"></i>
                                          </span>
                                        </figcaption>
                                      </figure>
                                    </a>
                                    <iframe
                                      src="https://www.google.com/maps/d/embed?mid&#x3D;1uTVu66YGp2Jy_bjtGs9SOZ16_ZQIwLjr&amp;ehbc&#x3D;2E312F"
                                      id="google-maps"
                                      allow="autoplay; fullscreen"
                                      width="1920"
                                      height="1080"
                                    ></iframe>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          );
        } else if (
          section.type === "comments" &&
          section.data.comments?.length
        ) {
          return (
            <div
              className="rlr-secondary-menu-desc"
              key={section.title}
              data-id={`rlr-product-sec-${section.title}`}
            >
              {/* <!-- Icon --> */}
              <div className="rlr-secondary-menu-desc__icon">
                <svg
                  width="51"
                  height="52"
                  viewBox="0 0 51 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51 26.0569C51 11.9289 39.5833 0.47583 25.5 0.47583C11.4167 0.47583 0 11.9289 0 26.0569C0 40.1849 11.4167 51.6379 25.5 51.6379C29.9108 51.6379 34.1604 50.5124 37.9266 48.4C37.9928 48.4321 38.0883 48.4895 38.2244 48.5807C38.2823 48.6195 38.741 48.9376 38.907 49.0479C39.2393 49.2688 39.5554 49.4601 39.9016 49.6434C42.0271 50.7687 44.7903 51.3004 48.7583 51.0338C49.483 50.9851 49.7938 50.0869 49.2549 49.5983C47.8766 48.3484 46.4596 46.762 45.4972 45.3922C45.0172 44.7088 44.6728 44.1109 44.498 43.6599C44.43 43.4842 44.3928 43.3435 44.383 43.2488C48.6135 38.5755 51 32.502 51 26.0569ZM40.6695 48.1838C40.3757 48.0282 40.1053 47.8646 39.8158 47.6722C39.6669 47.5732 39.2115 47.2574 39.1383 47.2083C38.4835 46.7696 38.0509 46.609 37.4761 46.7944C37.3816 46.8249 37.2904 46.8654 37.2024 46.9152C33.6605 48.9194 29.6586 49.9875 25.5 49.9875C12.3253 49.9875 1.64516 39.2734 1.64516 26.0569C1.64516 12.8403 12.3253 2.12622 25.5 2.12622C38.6747 2.12622 49.3548 12.8403 49.3548 26.0569C49.3548 32.125 47.0956 37.837 43.0914 42.2203C41.9783 43.4387 43.8851 46.5383 46.7284 49.4515C44.0844 49.4414 42.173 48.9798 40.6695 48.1838Z"
                    fill="#99A3AD"
                  />
                  <path
                    d="M31.9727 35.6478L25.6956 31.2659C25.4132 31.0688 25.0384 31.0688 24.756 31.2659L18.4789 35.6478L20.6934 28.3049C20.793 27.9745 20.6771 27.6169 20.403 27.4084L14.3091 22.7736L21.9548 22.6173C22.2987 22.6103 22.602 22.3892 22.715 22.0632L25.2258 14.8169L27.7366 22.0632C27.8496 22.3892 28.1529 22.6103 28.4969 22.6173L36.1425 22.7736L30.0486 27.4084C29.7745 27.6169 29.6586 27.9745 29.7582 28.3049L31.9727 35.6478ZM25.2258 32.9486L32.9755 38.3584C33.6156 38.8053 34.4585 38.191 34.2327 37.4421L31.4987 28.3766L39.0222 22.6545C39.6437 22.1819 39.3218 21.1879 38.542 21.1719L29.1027 20.979L26.0028 12.0327C25.7467 11.2937 24.7049 11.2937 24.4488 12.0327L21.349 20.979L11.9096 21.1719C11.1299 21.1879 10.8079 22.1819 11.4294 22.6545L18.9529 28.3766L16.219 37.4421C15.9931 38.191 16.836 38.8053 17.4761 38.3584L25.2258 32.9486Z"
                    fill="#99A3AD"
                  />
                </svg>
              </div>
              <div className="rlr-secondary-menu-desc__details">
                {/* <!-- Review --> */}
                {section.data.comments?.map((comment, commentIndex) => {
                  return (
                    <article
                      key={commentIndex}
                      className="rlr-review-card"
                      itemScope
                      itemType="https://schema.org/Product"
                    >
                      <div className="rlr-review-card__contact">
                        {/* <!--Using in Components --> */}
                        <div className="rlr-avatar">
                          {comment.avatar && (
                            <img
                              className="rlr-avatar__media--rounded"
                              src={serverImage(comment.avatar)}
                              itemProp="avatar"
                              alt="avatar icon"
                            />
                          )}

                          <span className="rlr-avatar__name" itemProp="name">
                            {comment.name}
                          </span>
                        </div>
                        <div
                          className="rlr-review-stars"
                          itemProp="ratingValue"
                          itemScope
                          itemType="https://schema.org/Product"
                        >
                          {Array(comment.star || 5)
                            .fill("")
                            .map((i) => {
                              return (
                                <i className="rlr-icon-font flaticon-star-1">
                                  {" "}
                                </i>
                              );
                            })}
                          {Array(5 - (comment.star || 5))
                            .fill("")
                            .map((i) => {
                              return (
                                <i className="rlr-icon-font flaticon-star"> </i>
                              );
                            })}
                        </div>
                      </div>
                      <div className="rlr-review-card__details">
                        <div className="rlr-review-card__title">
                          <h3 className="rlr-review-card__title-review">
                            “{comment.title}”
                          </h3>
                        </div>
                        <div
                          className="rlr-review-card__comments"
                          itemProp="review description"
                        >
                          <div className="rlr-readmore-desc">
                            <p className="rlr-readmore-desc__content rlr-js-desc">
                              {comment.comment}
                            </p>
                            <span className="rlr-readmore-desc__readmore rlr-js-readmore">
                              Show more...
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        } else if (
          section.type === "attractions" &&
          section.data.description?.length
        ) {
          return (
            <div
              className="rlr-secondary-menu-desc"
              key={section.title}
              data-id={`rlr-product-sec-${section.title}`}
            >
              <div className="rlr-secondary-menu-desc__icon">
                <svg
                  width="41"
                  height="51"
                  viewBox="0 0 41 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.327 13.61H28.296c-.334 0-.558-.221-.558-.55l.002-11.852c0-.329.224-.55.558-.55.334 0 .558.221.558.55l-.002 11.304h11.473c.334 0 .558.22.558.55 0 .33-.224.547-.558.547z"
                    fill="#99A3AD"
                  />
                  <path
                    d="M36.54 50.707H4.568C2.005 50.707 0 48.73 0 46.207L.002 5.047c0-2.525 2.005-4.5 4.568-4.5h23.728c.11 0 .334.109.445.109L40.885 12.51c.11.11.11.22.11.439v33.255c.113 2.527-1.892 4.503-4.455 4.503zM4.568 1.756c-1.892 0-3.342 1.428-3.342 3.292v41.158c0 1.867 1.56 3.402 3.453 3.402H36.65c1.894 0 3.453-1.537 3.453-3.402l.002-32.926-11.92-11.524H4.567z"
                    fill="#99A3AD"
                  />
                  <path
                    d="M33.309 19.756h-19.27c-.335 0-.558-.22-.558-.55 0-.329.223-.549.557-.549h19.273c.334 0 .558.22.558.55-.002.329-.226.55-.56.55zM33.309 25.133H7.91c-.334 0-.558-.22-.558-.55 0-.328.224-.549.558-.549h25.399c.334 0 .558.22.558.55 0 .331-.224.55-.558.55zM33.309 30.622H7.91c-.334 0-.558-.22-.558-.55 0-.329.224-.55.558-.55h25.399c.334 0 .558.221.558.55 0 .33-.224.55-.558.55zM33.309 36.11H7.91c-.334 0-.558-.22-.558-.55 0-.329.224-.549.558-.549h25.399c.334 0 .558.22.558.55 0 .329-.224.55-.558.55zM33.309 41.487H7.91c-.334 0-.558-.22-.558-.549 0-.33.224-.55.558-.55h25.399c.334 0 .558.22.558.55 0 .33-.224.55-.558.55z"
                    fill="#99A3AD"
                  />
                </svg>
              </div>
              <div className="rlr-secondary-menu-desc__details">
                <div className="rlr-overview-detail">
                  <div className="rlr-readmore-desc rlr-overview-detail__description">
                    <h3>{section.data.text}</h3>
                    <p
                      className="rlr-readmore-desc__content rlr-js-desc"
                      dangerouslySetInnerHTML={{
                        __html: section.data.description || "",
                      }}
                    ></p>
                    <span className="rlr-readmore-desc__readmore rlr-js-readmore">
                      Show more...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (section.type === "faq" && section.data.questions?.length) {
          return (
            <div
              className="rlr-secondary-menu-desc"
              key={section.title}
              data-id={`rlr-product-sec-${section.title}`}
            >
              {/* <!-- Icon --> */}
              <div className="rlr-secondary-menu-desc__icon">
                <svg
                  width="52"
                  height="54"
                  viewBox="0 0 52 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.9971 40.8774C51.3711 35.5059 52.6762 29.0842 51.6677 22.8163C50.6593 16.5484 47.4065 10.8647 42.5192 6.8308C37.6319 2.79691 31.4458 0.689826 25.1205 0.904586C18.7953 1.11935 12.7653 3.6412 8.16107 7.99736C3.55685 12.3535 0.694579 18.2448 0.110868 24.5668C-0.472843 30.8887 1.26209 37.2072 4.99041 42.3376C8.71873 47.468 14.1844 51.0581 20.3627 52.4347C26.541 53.8113 33.0077 52.8799 38.5504 49.8151L49.3317 52.6147C49.6365 52.693 49.9567 52.6867 50.2582 52.5963C50.5596 52.506 50.8309 52.3351 51.0428 52.1019C51.2548 51.8687 51.3995 51.582 51.4614 51.2726C51.5234 50.9632 51.5002 50.6427 51.3944 50.3455L47.9971 40.8774ZM38.6544 48.0328C38.4348 47.9753 38.2014 48.0065 38.0044 48.1198C32.8405 51.0625 26.7801 52.0034 20.971 50.7642C15.162 49.525 10.0076 46.1917 6.48404 41.3957C2.96052 36.5996 1.31253 30.6739 1.85219 24.7406C2.39186 18.8074 5.08169 13.2787 9.41227 9.2016C13.7429 5.12451 19.4135 2.78212 25.3502 2.61806C31.2869 2.454 37.0775 4.47967 41.6252 8.31141C46.173 12.1432 49.1622 17.5149 50.0266 23.4094C50.891 29.3038 49.5707 35.3116 46.3158 40.2949C46.2423 40.4065 46.1955 40.5336 46.1789 40.6663C46.1624 40.799 46.1766 40.9337 46.2204 41.06L49.7651 50.9367L38.6544 48.0328Z"
                    fill="#99A3AD"
                  />
                  <path
                    d="M25.5503 34.2444C24.8943 34.2199 24.2553 34.4575 23.7737 34.9051C23.5472 35.1221 23.3685 35.3843 23.2491 35.6748C23.1297 35.9652 23.0722 36.2775 23.0803 36.5916C23.0679 36.9042 23.1226 37.2158 23.2407 37.5053C23.3589 37.7947 23.5377 38.0554 23.765 38.2695C24.267 38.6903 24.9004 38.9209 25.5547 38.9209C26.2089 38.9209 26.8423 38.6903 27.3443 38.2695C27.5665 38.0555 27.7415 37.7972 27.858 37.5112C27.9744 37.2252 28.0297 36.9178 28.0203 36.609C28.0285 36.2949 27.971 35.9826 27.8516 35.6922C27.7322 35.4017 27.5535 35.1395 27.327 34.9225C27.0905 34.697 26.8116 34.5209 26.5066 34.4045C26.2016 34.288 25.8765 34.2336 25.5503 34.2444Z"
                    fill="#99A3AD"
                  />
                  <path
                    d="M30.872 17.7334C29.4476 16.6114 27.6615 16.0543 25.854 16.1684C24.0226 16.0615 22.2183 16.6514 20.8014 17.8203C20.1747 18.3996 19.6812 19.1086 19.355 19.8983C19.0287 20.688 18.8776 21.5394 18.912 22.3935H23.332C23.3148 21.6853 23.5692 20.9976 24.0427 20.4721C24.2777 20.2352 24.5595 20.0502 24.8699 19.929C25.1803 19.8077 25.5126 19.7528 25.8453 19.7678C27.4313 19.7678 28.2287 20.6373 28.2287 22.3761C28.2256 22.9526 28.0668 23.5174 27.7693 24.0106C27.2536 24.7605 26.6351 25.4336 25.932 26.0103C25.117 26.6886 24.4678 27.5451 24.034 28.5142C23.6467 29.6069 23.4702 30.7635 23.514 31.9224H27.414L27.4747 30.9921C27.5919 29.9917 28.0623 29.0664 28.8007 28.3838L30.04 27.2014C30.854 26.4594 31.5393 25.5867 32.068 24.6192C32.4542 23.8572 32.6533 23.0136 32.6487 22.1587C32.6975 21.3352 32.5635 20.511 32.2562 19.7457C31.949 18.9804 31.4762 18.2931 30.872 17.7334V17.7334Z"
                    fill="#99A3AD"
                  />
                </svg>
              </div>
              <div className="rlr-secondary-menu-desc__details">
                {/* <!-- Faq Items --> */}
                <div className="accordion rlr-accordion">
                  {section.data.questions.map((question, index) => {
                    return (
                      <div className="accordion-item rlr-accordion__item">
                        <div
                          className="accordion-header rlr-accordion__header"
                          id={`rlr-faq-collapse-header${index}`}
                        >
                          <button
                            className="accordion-button rlr-accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#rlr-faq-collapse${index}`}
                            aria-expanded="false"
                            aria-controls={`rlr-faq-collapse${index}`}
                          >
                            <span className="rlr-accordion__badge">?</span>
                            {question.question}
                          </button>
                        </div>
                        <div
                          id={`rlr-faq-collapse${index}`}
                          className="accordion-collapse collapse"
                          aria-labelledby={`rlr-faq-collapse-header${index}`}
                        >
                          <div className="accordion-body rlr-accordion__body">
                            <div className="rlr-readmore-desc">
                              <p className="rlr-readmore-desc__content rlr-js-desc">
                                {question.answer}
                              </p>
                              <span className="rlr-readmore-desc__readmore rlr-js-readmore">
                                Show more...
                              </span>
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
        }
      })}
    </div>
  );
};

export default ProductDetailHeaderComponent;
