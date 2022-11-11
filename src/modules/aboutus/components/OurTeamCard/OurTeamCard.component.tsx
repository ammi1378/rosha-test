import React from "react";
import { serverImage } from "../../../comon/util/image-utils";
import { OurTeamCardProps } from "./OurTeamCard.props";

const ourTeamCardComponent = "ourTeamCardComponent";

const OurTeamCardComponent: React.FC<OurTeamCardProps> = ({
  className,
  image,
  title,
  name,
  describtion,
}) => {
  return (
    <div
      className={`${ourTeamCardComponent} ${className} col-xl-3 col-md-6`}
      data-aos="fade-up"
      data-aos-offset="250"
      data-aos-duration="500"
    >
      {/* <!-- Team card --> */}
      <div className="rlr-team-card rlr-team-card--v2">
        {/* <!-- Team thumb --> */}
        <div className="rlr-team-card__thumb">
          <img src={serverImage(image || "")} alt="Member Photo" />
        </div>
        {/* <!-- Team summary --> */}
        <div className="rlr-team-card__summary">
          <h3 className="rlr-team-card__title">
            <a href="#">{title}</a>
          </h3>
          <h3 className="rlr-team-card__subtitle">{name}</h3>
          {/* <!-- Team details --> */}
          <p className="rlr-team-card__desc">{describtion}</p>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCardComponent;
