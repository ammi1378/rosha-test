import React from "react";
import { BlogCardItemProps } from "./BlogCardItem.props";

const blogCardItemComponent = "blogCardItemComponent";

const BlogCardItemComponent: React.FC<BlogCardItemProps> = ({ 
  className,
  describtion,
  describtion2,
  images,
  title,
 }) => {
  return <div className={`${blogCardItemComponent} ${className} col-md-6 col-lg-4`}>
    <article className="rlr-postcard">
      {images.map(
        (image) => {
          return (
            <img itemProp="image" data-sizes="auto" data-src={image}
          data-srcset={image} className="lazyload Rosha-style-card-image rounded"
          alt="product-image" 
          />
          )
      })}
      <div className="rlr-postcard__summary">
        <span className="rlr-postcard__author">
        {describtion}
        </span>
        <a href="./single.html" className="rlr-product-card__anchor-title">
          <h2 className="rlr-product-card__title">
          {title}
          </h2>
        </a>
        <p>
          {describtion2}
        </p>
      </div>
    </article>
  </div>
};

export default BlogCardItemComponent;