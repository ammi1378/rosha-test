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
  data,
}) => {
  return (
    <div className={`${aboutUsMainContentComponent} ${className}`}>
      <HeroBannerAboutusComponent data={data} />
      <section className="rlr-about rlr-section rlr-section__my">
        <div className="container">
          <OurVisionAboutusComponent rtl={false} data={data} />
        </div>
      </section>

      <section className="rlr-about rlr-section rlr-section__my">
        <div className="container">
          {OurTeamAboutusData.map((OurTeamAboutusItem) => {
            return <OurTeamAboutusComponent data={data} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default AboutUsMainContentComponent;
