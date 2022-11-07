import React from "react";
import { serverImage } from "../../../comon/util/image-utils";
import { MediaSliderProps } from "./MediaSlider.props";

const mediaSliderComponent = "mediaSliderComponent";

const MediaSliderComponent: React.FC<MediaSliderProps> = ({
  className,
  media,
}) => {
  return (
    <aside className={`${mediaSliderComponent} ${className} row`}>
      {/* <!-- Media main image carousel --> */}
      <div className="col-md-10 rlr-media">
        <div className="splide rlr-media--wrapper rlr-js-media">
          {/* <!-- Arrows --> */}
          <div className="splide__arrows">
            <button className="rlr-media__arrow splide__arrow splide__arrow--prev">
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.889 14.942 8.47 8.36 1.889 1.778"
                  stroke="var(--white)"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <button className="rlr-media__arrow splide__arrow splide__arrow--next">
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.889 14.942 8.47 8.36 1.889 1.778"
                  stroke="var(--white)"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          {/* <!-- Media main images --> */}
          <div className="splide__track rlr-media__strack">
            <ul id="image-preview" className="splide__list">
              {media?.map((mediaItem, index) => {
                return (
                  <li
                    className="splide__slide rlr-media__image-view"
                    key={index}
                  >
                    <img
                      className="rlr-media__thumb lazyload"
                      data-src={serverImage(mediaItem.url || "")}
                      alt={mediaItem.alt}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <!-- Media pagination counter --> */}
          <div className="rlr-media__custom-pagination rlr-js-custom-pagination">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.2 0C.542 0 0 .558 0 1.235v11.53C0 13.442.542 14 1.2 14h15.6c.658 0 1.2-.558 1.2-1.235V1.235C18 .558 17.458 0 16.8 0H1.2zm0 .824h15.6c.228 0 .4.176.4.411v9.844l-3.506-3.95a.4.4 0 0 0-.588 0l-2.862 3.126L6.1 5.488a.4.4 0 0 0-.362-.135.4.4 0 0 0-.232.129L.8 10.687V1.235C.8 1 .972.823 1.2.823zm9.2 2.058c-.879 0-1.6.743-1.6 1.647 0 .905.721 1.647 1.6 1.647.879 0 1.6-.742 1.6-1.647 0-.904-.721-1.647-1.6-1.647zm0 .824c.447 0 .8.363.8.823 0 .46-.353.824-.8.824a.806.806 0 0 1-.8-.824c0-.46.353-.823.8-.823zm-4.606 2.67 5.912 6.8H1.2a.397.397 0 0 1-.4-.411v-.869l4.994-5.52zm7.6 1.64 3.806 4.285v.464a.397.397 0 0 1-.4.411h-4.019l-2-2.303 2.613-2.856z"
                fill="#212529"
              ></path>
            </svg>
            <span className="rlr-media__page-counter rlr-js-page"> 0 </span>
          </div>
        </div>
      </div>
      {/* <!-- Media Thumbnails --> */}
      <div className="col-md-2 rlr-media">
        {/* <!-- Media sidebar --> */}
        <div className="splide rlr-media--wrapper rlr-media--sidebar rlr-js-thumbnail-media">
          {/* <!-- Arrows --> */}
          <div className="splide__arrows">
            <button className="rlr-media__arrow splide__arrow splide__arrow--prev">
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.889 14.942 8.47 8.36 1.889 1.778"
                  stroke="var(--white)"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <button className="rlr-media__arrow splide__arrow splide__arrow--next">
              <svg
                width="10"
                height="16"
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.889 14.942 8.47 8.36 1.889 1.778"
                  stroke="var(--white)"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          {/* <!-- Thumbnails --> */}
          <div className="splide__track rlr-media__strack">
            <ul id="image-preview-thumb" className="splide__list">
              {media?.map((mediaItem, index) => {
                return (
                  <li
                    className="splide__slide rlr-media__image-view"
                    key={index}
                  >
                    <img
                      className="rlr-media__thumb lazyload"
                      data-src={serverImage(mediaItem.url || "")}
                      alt={mediaItem.alt}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MediaSliderComponent;
