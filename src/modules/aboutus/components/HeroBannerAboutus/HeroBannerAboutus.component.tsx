import React from "react";
import { serverImage } from "../../../comon/util/image-utils";
import BannerAboutUsCardComponent from "../BannerAboutUsCard/BannerAboutUsCard.component";
import { HeroBannerAboutusProps } from "./HeroBannerAboutus.props";

const heroBannerAboutusComponent = "heroBannerAboutusComponent";

const BannerAboutUsCardData = [
  {
    question: "What started the emprise venture?",
    describtion:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    question: "What started the emprise venture?",
    describtion:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    question: "What started the emprise venture?",
    describtion:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
];
const HeroBannerAboutusComponent: React.FC<HeroBannerAboutusProps> = ({
  className,
  data,
}) => {
  return (
    <section className="rlr-about-hero">
      <div className="container">
        <div className={`${heroBannerAboutusComponent} ${className}`}>
          <div className="rlr-about-hero__content">
            <img
              className="rlr-about-hero__bg"
              src={serverImage(
                data?.attributes?.AboutCards?.Image?.data?.attributes?.url || ""
              )}
              alt="..."
            />
            <div className="rlr-about-hero__content-inner">
              <h1 className="type-d1 rlr-about-hero__title">
                {data?.attributes?.AboutCards?.Header}
              </h1>
              <div className="rlr-about-hero__cards">
                {data?.attributes?.AboutCards?.Cards?.map(
                  (BannerAboutUsCardItem) => {
                    return (
                      <BannerAboutUsCardComponent
                        question={BannerAboutUsCardItem.Title}
                        descrintion={BannerAboutUsCardItem.Description}
                      />
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerAboutusComponent;
