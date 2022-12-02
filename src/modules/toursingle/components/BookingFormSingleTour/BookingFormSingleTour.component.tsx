import React from "react";
import { BookingFormSingleTourProps } from "./BookingFormSingleTour.props";

const bookingFormSingleTourComponent = "bookingFormSingleTourComponent";

const BookingFormSingleTourComponent: React.FC<BookingFormSingleTourProps> = ({
  className,
  product,
}) => {
  return (
    <aside
      className={`${bookingFormSingleTourComponent} ${className} col-xl-4 col-xxxl-3 d-xl-block offset-xxxl-1 mt-5 mt-lg-0`}
    >
      <form className="rlr-booking-card">
        <fieldset className="rlr-fieldrow">
          <legend className="rlr-booking-card__legend--hide">
            Booking form
          </legend>
          <article
            itemScope
            itemType="https://schema.org/Offer"
            className="rlr-booking-card__price-details rlr-fieldrow__form-element"
          >
            <header className="rlr-booking-card__offer">
              <h2
                className="rlr-booking-card__price"
                itemScope
                itemType="https://schema.org/AggregateOffer"
              >
                <span
                  className="rlr-booking-card__current-price rlr-booking-card--currency"
                  itemProp="priceCurrency"
                ></span>
                <span
                  itemProp="lowPrice"
                  className="rlr-booking-card__current-price rlr-booking-card--low-price"
                >
                  {product.title}
                </span>
                <span
                  itemProp="category"
                  className="rlr-booking-card__price-type rlr-booking-card__price-type--result"
                >
                  Location
                </span>
              </h2>
              <svg
                width="56"
                height="57"
                viewBox="0 0 56 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#a)">
                  <rect
                    y=".411"
                    width="56"
                    height="56"
                    rx="28"
                    fill="#28B0A6"
                  />
                  <path
                    d="M24.253 40.365a1.629 1.629 0 0 1-2.31 0l-9.225-9.226a2.45 2.45 0 0 1 0-3.466l1.155-1.155a2.45 2.45 0 0 1 3.466 0l5.76 5.76L38.66 16.715a2.45 2.45 0 0 1 3.466 0l1.155 1.155a2.45 2.45 0 0 1 0 3.465l-19.029 19.03z"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(0 .411)"
                      d="M0 0h56v56H0z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </header>
            {/* <span className="rlr-booking-card__info">
              *London to Ancient Rome Short Weekend Tour
            </span> */}
          </article>
        </fieldset>
        <fieldset className="rlr-booking-card__results rlr-booking-card__results--found">
          <ul className="rlr-booking-card__result-list">
            <li className="rlr-icon-text">
              <i className="rlr-icon-font flaticon-three-o-clock-clock"> </i>
              <div className="rlr-icon-text__text-wrapper">
                <span className="">10:00 AM </span>
                <span className="rlr-icon-text__subtext">Starting Time</span>
              </div>
            </li>
          </ul>
          <div className="rlr-icon-text rlr-booking-card__message">
            <i className="rlr-icon-font flaticon-carbon-result"> </i>
            <div className="rlr-icon-text__text-wrapper">
              <span className="">About Tour Service </span>
              <span className="rlr-icon-text__subtext">
                Once you confirm booking, you&#x27;ll receive details to print.
              </span>
            </div>
          </div>
        </fieldset>

        {/* <a
          href={`/service/${service}/${item.id}/request`}
          className="btn rlr-button rlr-booking-card__button"
        > */}
        <a
          href={`./${product.id}/request`}
          className="btn rlr-button rlr-booking-card__button"
        >
          Proceed to Booking
        </a>
      </form>
    </aside>
  );
};

export default BookingFormSingleTourComponent;
