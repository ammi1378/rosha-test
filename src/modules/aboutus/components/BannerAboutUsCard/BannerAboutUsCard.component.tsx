import React from "react";
import { BannerAboutUsCardProps } from "./BannerAboutUsCard.props";

const bannerAboutUsCardComponent = "bannerAboutUsCardComponent";

const BannerAboutUsCardComponent: React.FC<BannerAboutUsCardProps> = ({
   className,
   question,
   descrintion 
  }) => {
  return <div className={`${ bannerAboutUsCardComponent } ${className}`}>
    <div className="rlr-about-hero-card" data-aos="fade-up" data-aos-offset="250" data-aos-duration="700">
          <h5 className="type-h5-semibold rlr-about-hero-card__title">
            {question}
          </h5>
          <p className="type-lead rlr-about-hero-card__desc">
            {descrintion}
          </p>
        </div>
  </div>
};

export default BannerAboutUsCardComponent;