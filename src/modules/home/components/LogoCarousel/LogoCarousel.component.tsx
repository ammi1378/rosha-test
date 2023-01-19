import React from "react";
import { LogoCarouselProps } from "./LogoCarousel.props";
import { serverImage } from "../../../comon/util/image-utils";

const logoCarouselComponent = "logoCarouselComponent";

const LogoCarouselComponent: React.FC<LogoCarouselProps> = ({
  className,
  images,
}) => {
  return (
    <section
      id="features"
      className={`${logoCarouselComponent} ${className} rlr-section rlr-section__mb landding__plugin`}
    >
      {/*  */}
      <div className="container">
        <div className="rlr-logos-slider">
          <div className="rlr-logos-slider__items">
            <div className="slide-track">
              {images.map((image) => {
                return (
                  <div className="slide" key={image.id}>
                    <img
                      data-sizes="auto"
                      className="lazyload"
                      data-src={serverImage(
                        image?.attributes
                          ?.url || ""
                      )}
                      width="187px"
                      height="64px"
                      alt="partner logo"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarouselComponent;
