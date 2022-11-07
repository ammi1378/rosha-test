import React from "react";
import OurVisionAboutUsCardComponent from "../OurVisionAboutUsCard/OurVisionAboutUsCard.component";
import { OurVisionAboutusProps } from "./OurVisionAboutus.props";

const ourVisionAboutusComponent = "ourVisionAboutusComponent";

const ourVisionAboutuCardData = [
  {
    number: "1",
    describtion:
      "Etiam elementum ex vel tortor laoreet auctor. Aenean iaculis, ipsum eget eleifend ornare, arcu ante efficitur urna, id faucibus leo nunc sit amet elit.",
  },
  {
    number: "2",
    describtion:
      "Etiam elementum ex vel tortor laoreet auctor. Aenean iaculis, ipsum eget eleifend ornare, arcu ante efficitur urna, id faucibus leo nunc sit amet elit.",
  },
  {
    number: "3",
    describtion:
      "Etiam elementum ex vel tortor laoreet auctor. Aenean iaculis, ipsum eget eleifend ornare, arcu ante efficitur urna, id faucibus leo nunc sit amet elit.",
  },
  {
    number: "4",
    describtion:
      "Etiam elementum ex vel tortor laoreet auctor. Aenean iaculis, ipsum eget eleifend ornare, arcu ante efficitur urna, id faucibus leo nunc sit amet elit.",
  },
];
const OurVisionAboutusComponent: React.FC<OurVisionAboutusProps> = ({
  className,
  title,
  image,
  describtion,
  rtl,
}) => {
  return (
    <section
      className={`${ourVisionAboutusComponent} ${className} row ${
        rtl ? "flex-row-reverse" : ""
      }`}
    >
      <div className="col-lg-6">
        {/* <!-- Section heading --> */}
        <div className="rlr-section__title">
          <h2 className="rlr-section__title--main">{title}</h2>
          <span className="rlr-section__title--sub">{describtion}</span>
        </div>
        <div className="row gy-5">
          {ourVisionAboutuCardData.map((ourVisionAboutuCardItem) => {
            return (
              <OurVisionAboutUsCardComponent
                number={ourVisionAboutuCardItem.number}
                describtion={ourVisionAboutuCardItem.describtion}
              />
            );
          })}
        </div>
      </div>
      <div
        className={`offset-xl-1 col-lg-5 ${
          rtl ? "flex-sm-column-reverse rlr-dotted-image" : ""
        }`}
      >
        {image.map((image) => {
          return (
            <div
              className={`rlr-img ${
                rtl ? "rlr-img--dotted-reversed" : "rlr-img--dotted img-fluid"
              }`}
            >
              <img className="img-fluid" src={image} alt=" image our vision" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurVisionAboutusComponent;
