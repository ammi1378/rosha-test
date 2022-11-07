import React from "react";
import CategoryCarouselItemComponent from "../CategoryCarouselItem/CategoryCarouselItem.component";
import { CategoryCarouselProps } from "./CategoryCarousel.props";

const categoryCarouselComponent = "categoryCarouselComponent";

const categoryCarouselData = [
  {
    rate: "4.9",
    icon: "rlr-icon-font flaticon-beach",
    title: "Hotel Services",
    activities: ["196", "Activities"],
  },
  {
    rate: "5.0",
    icon: "rlr-icon-font flaticon-bungee",
    title: "Flight Service",
    activities: ["217", "Activities"],
  },
  {
    rate: "3.7",
    icon: "rlr-icon-font flaticon-city-tours",
    title: "Bus Services",
    activities: ["412", "Activities"],
  },
  {
    rate: "4.8",
    icon: "rlr-icon-font flaticon-hiking",
    title: "Hiking Trips",
    activities: ["371", "Activities"],
  },
  {
    rate: "4.2",
    icon: "rlr-icon-font flaticon-jungle",
    title: "Jungle Safari",
    activities: ["712", "Activities"],
  }
]
const CategoryCarouselComponent: React.FC<CategoryCarouselProps> = ({ className }) => {
  return (
    <section className={`${categoryCarouselComponent} ${className} rlr-section rlr-section__mb`}>
      <div className="container">
        {/* <!-- Swiper --> */}
        <div className="rlr-carousel__items">
          <div className="swiper rlr-js-category-card-swiper">
            {/* <!-- Carousel header --> */}
            <div className="rlr-section-header">
              {/* <!-- Section heading --> */}
              <div className="rlr-section__title">
                <h2 className="rlr-section__title--main">Services</h2>
                <span className="rlr-section__title--sub">Sost Brilliant reasons Emprise should be your one-stop-shop!</span>
              </div>
              <div className="button-row">
                <button type="button" className="btn rlr-button button button--previous rlr-button--carousel" aria-label="Previous">
                  <i className="rlr-icon-font flaticon-left-chevron"> </i>
                </button>
                <div className="button-group button-group--cells">
                  <button className="button is-selected">1</button>
                  <button className="button">2</button>
                </div>
                <button type="button" className="btn rlr-button button button--next rlr-button--carousel" aria-label="Next">
                  <i className="rlr-icon-font flaticon-chevron"> </i>
                </button>
              </div>
            </div>
            <div className="swiper-wrapper">
              {categoryCarouselData.map((categoryCarouselItem) => {
                return (
                  <CategoryCarouselItemComponent
                    rate={categoryCarouselItem.rate}
                    icon={categoryCarouselItem.icon}
                    title={categoryCarouselItem.title}
                    activities={categoryCarouselItem.activities}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )

};

export default CategoryCarouselComponent;