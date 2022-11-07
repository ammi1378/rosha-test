import React from "react";
import { OurVisionAboutUsCardProps } from "./OurVisionAboutUsCard.props";

const ourVisionAboutUsCardComponent = "ourVisionAboutUsCardComponent";

const OurVisionAboutUsCardComponent: React.FC<OurVisionAboutUsCardProps> = ({ 
  className,
  number,
  describtion
}) => {
  return <div className={`${ourVisionAboutUsCardComponent} ${className} col-xl-6`} data-aos="fade-up" data-aos-offset="250" data-aos-duration="500">
    {/* <!-- Text card --> */}
    <div className="rlr-text-card rlr-text-card--numbered">
      <h5 className="rlr-text-card__title">
        {number}
      </h5>
      <p className="rlr-text-card__desc">
        {describtion}
      </p>
    </div>
  </div>
};

export default OurVisionAboutUsCardComponent;