import React from "react";
import HerobannerItemComponent from "../HerobannerItem/HerobannerItem.component";
import { HeroBannerProps } from "./HeroBanner.props";

const heroBannerComponent = "heroBannerComponent";

const ImageBannerData = [
  {
    image: "/NewImages/photo-1517248135467-4c7edcad34c4-1024x683.webp",
    title:
      "Find your next adventure",
    discribtion:
    "The Himalayan Mountain Ranges" ,
  },
  {
    image: "/NewImages/10401_InsideTrack_meeting_room_blog_hero.jpg",
    title: 
      " Next mountain to climb",
    discribtion:
      "Discribtion" ,
  }
]
const HeroBannerComponent: React.FC<HeroBannerProps> = ({ className }) => {
  return (
    <aside
      className={`${heroBannerComponent} ${className} rlr-hero--half-mast`}
    >
      <div className="container">
        <div
          id="rlr_banner_slider"
          className="splide rlr-banner-splide rlr-banner-splide--v3"
        >
          <div className="splide__track rlr-banner-splide__track">
            <ul className="splide__list">
              {/* <!-- Banner slide 1 --> */} 
              {/* {ImageBannerData.map((ImageBannerItem) => {
                return (
                  <HerobannerItemComponent 
                   image={ImageBannerItem.image}
                   title={ImageBannerItem.title}
                   discribtion={ImageBannerItem.discribtion}
                  />
                )
              }
              )} */}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default HeroBannerComponent;
