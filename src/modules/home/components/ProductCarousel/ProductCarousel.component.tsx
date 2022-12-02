import React from "react";
import HomeCardItemComponent from "../HomeCardItem/HomeCardItem.component";
import { ProductCarouselProps } from "./ProductCarousel.props";

const productCarouselComponent = "productCarouselComponent";

const homeCardData = [
  {
    title: "Tour Services",
    images: [
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
    ],
    duration: "7 Days",
    describtion: ["New on Emprise ", "Free Cancellation "],
    Historical: "Historical Tours",
    cities: "tehran",
  },
  {
    title: "Tour Services",
    images: [
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
    ],
    duration: "7 Days",
    describtion: ["New on Emprise ", "Free Cancellation "],
    Historical: "Historical Tours",
    cities: "tehran",
  },
  {
    title: "Tour Services",
    images: [
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
    ],
    duration: "7 Days",
    describtion: ["New on Emprise ", "Free Cancellation "],
    Historical: "Historical Tours",
    cities: "tehran",
  },
  {
    title: "Tour Services",
    images: [
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
    ],
    duration: "7 Days",
    describtion: ["New on Emprise ", "Free Cancellation "],
    Historical: "Historical Tours",
    cities: "tehran",
  },
];

const ProductCarouselComponent: React.FC<ProductCarouselProps> = ({
  className,
  items,
  header,
  subHeader,
}) => {
  return (
    <section
      className={`${productCarouselComponent} ${className} rlr-section rlr-section__mb`}
      style={{ paddingTop: "100px!important" }}
    >
      <div className="container">
        {/* <!-- Swiper --> */}
        <div className="rlr-carousel__items">
          <div className="swiper rlr-js-product-card-swiper">
            {/* <!-- Carousel header --> */}
            <div className="rlr-section-header">
              {/* <!-- Section heading --> */}
              <div className="rlr-section__title">
                <h2 className="rlr-section__title--main">{header}</h2>
                {subHeader && subHeader.length && (
                  <span className="rlr-section__title--sub">{subHeader}</span>
                )}
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
              {items?.map((homeCardItem) => {
                return (
                  <HomeCardItemComponent
                    item={homeCardItem}
                    isSearchListing={false}
                    service={"tour"}
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

export default ProductCarouselComponent;
