import React from "react";
import { serverImage } from "../../../comon/util/image-utils";
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
  rtl,
  data,
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
          <h2 className="rlr-section__title--main">
            {data?.attributes?.Vision?.Header}
          </h2>
          <span className="rlr-section__title--sub">
            {data?.attributes?.Vision?.SubHeader}
          </span>
        </div>
        <div className="row gy-5">
          {data?.attributes?.Vision?.VisionItem?.map(
            (ourVisionAboutuCardItem, i) => {
              return (
                <OurVisionAboutUsCardComponent
                  number={i + 1}
                  describtion={ourVisionAboutuCardItem.Description}
                />
              );
            }
          )}
        </div>
      </div>
      <div
        className={`offset-xl-1 col-lg-5 ${
          rtl ? "flex-sm-column-reverse rlr-dotted-image" : ""
        }`}
      >
        <div
          className={`rlr-img ${
            rtl ? "rlr-img--dotted-reversed" : "rlr-img--dotted img-fluid"
          }`}
          style={{ height: "100%" }}
        >
          <img
            className="img-fluid"
            src={serverImage(
              data?.attributes?.Vision?.Image?.data?.attributes?.url || ""
            )}
            alt=" image our vision"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurVisionAboutusComponent;
