import React from "react";
import CategoryCarouselItemComponent from "../CategoryCarouselItem/CategoryCarouselItem.component";
import { CategoryCarouselProps } from "./CategoryCarousel.props";

const categoryCarouselComponent = "categoryCarouselComponent";

const categoryCarouselData = [
  {
    rate: "4.9",
    icon: "rlr-icon-font flaticon-beach",
    title: "Tours",
    link: "/service/tour",
    activities: ["196", "Activities"],
  },
  {
    rate: "5.0",
    icon: "rlr-icon-font flaticon-bungee",
    title: "Daly Tours",
    link: "/service/daily-tour",
    activities: ["217", "Activities"],
  },
  {
    rate: "3.7",
    icon: "rlr-icon-font flaticon-city-tours",
    title: "Hotel Booking",
    link: "/service/hotel",
    activities: ["412", "Activities"],
  },
  {
    rate: "4.8",
    icon: "rlr-icon-font flaticon-hiking",
    title: "Restaurant Reservation",
    link: "/service/restaurant",
    activities: ["371", "Activities"],
  },
  {
    rate: "4.2",
    icon: "rlr-icon-font flaticon-jungle",
    title: "Meeting Room & Salon Raservation",
    link: "/service/meeting-room",

    activities: ["712", "Activities"],
  },
  {
    rate: "4.2",
    icon: "rlr-icon-font flaticon-jungle",
    title: "Shopping Tour",
    link: "/service/shopping",
    activities: ["712", "Activities"],
  },
  {
    rate: "4.2",
    icon: "rlr-icon-font flaticon-jungle",
    title: "Fights Booking",
    link: "/service/flight",
    activities: ["712", "Activities"],
  },
  {
    rate: "4.2",
    icon: "rlr-icon-font flaticon-jungle",
    title: "Touristic train",
    link: "/service/train",
    activities: ["712", "Activities"],
  },
  {
    rate: "4.2",
    icon: "rlr-icon-font flaticon-jungle",
    title: "Bus Booking",
    link: "/service/bus",
    activities: ["712", "Activities"],
  },
  {
    rate: "4.2",
    icon: "rlr-icon-font flaticon-jungle",
    title: "Airport Transportation",
    link: "/service/airport",

    activities: ["712", "Activities"],
  },
  {
    rate: "4.2",
    icon: "rlr-icon-font flaticon-jungle",
    title: "VIP Domestic Airport Services",
    link: "/service/vip-domestic",

    activities: ["712", "Activities"],
  },
  {
    rate: "4.2",
    icon: "rlr-icon-font flaticon-jungle",
    title: "CIP International Airport Services",
    link: "/service/cip",

    activities: ["712", "Activities"],
  },
  {
    rate: "4.2",
    icon: "rlr-icon-font flaticon-jungle",
    title: "Privat Jet Reservation",
    link: "/service/private-jet",

    activities: ["712", "Activities"],
  },
  {
    rate: "4.2",
    icon: "rlr-icon-font flaticon-jungle",
    title: "Travel Insurance Service",
    link: "/service/insurance",

    activities: ["712", "Activities"],
  },
  {
    rate: "4.2",
    icon: "rlr-icon-font flaticon-jungle",
    title: "Tour Guid",
    link: "/service/tour-guid",

    activities: ["712", "Activities"],
  },
  {
    rate: "4.2",
    icon: "rlr-icon-font flaticon-jungle",
    title: "Translating and Interpreting Services",
    link: "/service/insurance",

    activities: ["712", "Activities"],
  },
];
const CategoryCarouselComponent: React.FC<CategoryCarouselProps> = ({
  className,
}) => {
  return (
    <section
      className={`${categoryCarouselComponent} ${className} rlr-section rlr-section__mb`}
    >
      <div className="container">
        {/* <!-- Swiper --> */}
        <div className="rlr-carousel__items">
          <div className="swiper rlr-js-category-card-swiper">
            {/* <!-- Carousel header --> */}
            <div className="rlr-section-header">
              {/* <!-- Section heading --> */}
              <div className="rlr-section__title">
                <h2 className="rlr-section__title--main">Services</h2>
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
              {categoryCarouselData.map((categoryCarouselItem, index) => {
                return (
                  <CategoryCarouselItemComponent
                    rate={categoryCarouselItem.rate}
                    icon={categoryCarouselItem.icon}
                    title={categoryCarouselItem.title}
                    activities={categoryCarouselItem.activities}
                    link={categoryCarouselItem.link}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarouselComponent;
