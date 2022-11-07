import React from "react";
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
  title,
  image,
}) => {
  return (
    <section className="rlr-about-hero">
      <div className="container">
        <div className={`${heroBannerAboutusComponent} ${className}`}>
          <div className="rlr-about-hero__content">
            <img
              className="rlr-about-hero__bg"
              src="./images/about-hero-3.jpg"
              alt="..."
            />
            <div className="rlr-about-hero__content-inner">
              <h1 className="type-d1 rlr-about-hero__title">{title}</h1>
              <div className="rlr-about-hero__cards">
                {BannerAboutUsCardData.map((BannerAboutUsCardItem) => {
                  return (
                    <BannerAboutUsCardComponent
                      question={BannerAboutUsCardItem.question}
                      descrintion={BannerAboutUsCardItem.describtion}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerAboutusComponent;
