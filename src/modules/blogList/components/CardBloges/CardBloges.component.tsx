import React from "react";
import PaginationComponent from "../../../services/components/Pagination/Pagination.component";
import BlogCardItemComponent from "../BlogCardItem/BlogCardItem.component";
import { CardBlogesProps } from "./CardBloges.props";

const cardBlogesComponent = "cardBlogesComponent";

const blogesData = [
  {
    title: "MT. Everest trekking theme",
    images: [
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
    ],
    describtion:
      "Sanjeev Jha | 19 Jan 2022",
    describtion2:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty",
  },
  {
    title: "MT. Everest trekking theme",
    images: [
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
    ],
    describtion:
      "Sanjeev Jha | 19 Jan 2022",
    describtion2:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty",
  },
  {
    title: "MT. Everest trekking theme",
    images: [
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
    ],
    describtion:
      "Sanjeev Jha | 19 Jan 2022",
    describtion2:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty",
  },
  {
    title: "MT. Everest trekking theme",
    images: [
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
    ],
    describtion:
      "Sanjeev Jha | 19 Jan 2022",
    describtion2:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty",
  },
];

const CardBlogesComponent: React.FC<CardBlogesProps> = ({ className }) => {
  return <section className={`${cardBlogesComponent} ${className} col-xl-9 rlr-search-results-page__product-list`}>
    <div className="row rlr-listings__header">
      {/* <!-- Breadcrumb --> */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb rlr-breadcrumb__items">
          <li className="breadcrumb-item rlr-breadcrumb__item"><a href="/">Home</a></li>
          <li className="breadcrumb-item rlr-breadcrumb__item"><a href="/">Destination</a></li>
          <li className="breadcrumb-item rlr-breadcrumb__item active" aria-current="page">Tour</li>
        </ol>
      </nav>
      <h1 className="rlr-section__heading--main">Blog List </h1>
    </div>
    <div className="row rlr-search-results-page__card-wrapper">
      {blogesData.map((blogItem) => {
        return (
          <BlogCardItemComponent 
            title={blogItem.title}
            images={blogItem.images}
            describtion={blogItem.describtion}
            describtion2={blogItem.describtion2} 
            />
        );
      })}
      <div className="col-md-6 col-lg-4">
        <article className="rlr-postcard">
          <img itemProp="image" data-sizes="auto" data-src="./assets/NewImages/59972106.jpg"
            data-srcset="./assets/NewImages/hotels/Dariush-Grand-Hotel10.jpg" className="lazyload Rosha-style-card-image rounded"
            alt="product-image" />
          <div className="rlr-postcard__summary">
            <span className="rlr-postcard__author">Sanjeev Jha | 19 Jan 2022</span>
            <a href="./single.html" className="rlr-product-card__anchor-title">
              <h2 className="rlr-product-card__title">MT. Everest trekking theme</h2>
            </a>
            <p>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
          </div>
        </article>
      </div>
    </div>
    <PaginationComponent />

  </section>
};

export default CardBlogesComponent;