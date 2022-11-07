import React from "react";
import HeroBannerAboutusComponent from "../HeroBannerAboutus/HeroBannerAboutus.component";
import OurTeamAboutusComponent from "../OurTeamAboutus/OurTeamAboutus.component";
import OurValues_2AboutusComponent from "../OurValues_2Aboutus/OurValues_2Aboutus.component";
import OurVisionAboutusComponent from "../OurVisionAboutus/OurVisionAboutus.component";
import { AboutUsMainContentProps } from "./AboutUsMainContent.props";

const aboutUsMainContentComponent = "aboutUsMainContentComponent";

const bannerAboutusData = {
  title: "About Us",
  image: ["/images/about-hero-3.jpg"],
};
const ourVisionAboutusData = [
  {
    title: "Our Vision",
    image: ["/images/about-01.jpg"],
    describtion: "Sost Brilliant reasons Emprise should be your one-stop-shop!",
  },
];
const OurTeamAboutusData = [
  {
    title: "Our Team",
    describtion: "Sost Brilliant reasons Emprise should be your one-stop-shop!",
  },
];
const AboutUsMainContentComponent: React.FC<AboutUsMainContentProps> = ({
  className,
}) => {
  return (
    <div className={`${aboutUsMainContentComponent} ${className}`}>
      <HeroBannerAboutusComponent
        title={bannerAboutusData.title}
        image={bannerAboutusData.image}
      />
      <section className="rlr-about rlr-section rlr-section__my">
        <div className="container">
          {ourVisionAboutusData.map((ourVisionAboutusItem) => {
            return (
              <OurVisionAboutusComponent
                rtl={false}
                title={ourVisionAboutusItem.title}
                describtion={ourVisionAboutusItem.describtion}
                image={ourVisionAboutusItem.image}
              />
            );
          })}
        </div>
      </section>

      <section className="rlr-about rlr-section rlr-section__my">
        <div className="container">
          {ourVisionAboutusData.map((ourVisionAboutusItem) => {
            return (
              <OurVisionAboutusComponent
                rtl={true}
                title={ourVisionAboutusItem.title}
                describtion={ourVisionAboutusItem.describtion}
                image={ourVisionAboutusItem.image}
              />
            );
          })}
        </div>
      </section>

      <section className="rlr-about rlr-section rlr-section__my">
        <div className="container">
          {OurTeamAboutusData.map((OurTeamAboutusItem) => {
            return (
              <OurTeamAboutusComponent
                title={OurTeamAboutusItem.title}
                describtion={OurTeamAboutusItem.describtion}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AboutUsMainContentComponent;
