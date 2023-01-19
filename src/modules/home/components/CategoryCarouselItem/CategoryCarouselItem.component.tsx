import { title } from "process";
import React from "react";
import { CategoryCarouselItemProps } from "./CategoryCarouselItem.props";

const categoryCarouselItemComponent = "categoryCarouselItemComponent";

const CategoryCarouselItemComponent: React.FC<CategoryCarouselItemProps> = ({
  className,
  rate,
  icon,
  title,
  activities,
  link,
}) => {
  return (
    <div
      className={`${categoryCarouselItemComponent} ${className} swiper-slide`}
      data-aos={`fade-up`}
      data-aos-duration={`700`}
      data-aos-once={`true`}
    >
      {/* <!-- Category card item --> */}
      <article className="rlr-category-card">
        <div className="rlr-category-card__badge">
          <span className="rlr-badge rlr-badge--right rlr-badge--">{rate}</span>
        </div>
        <div className="rlr-category-card__icon">
          <i className={`${icon}`}></i>
        </div>
        <header>
          <a href={link} className="rlr-category-card__title">
            <h4>{title}</h4>
          </a>
          <a href={link} className="rlr-category-card__sub-title">
            <span>{activities}</span>
          </a>
        </header>
      </article>
    </div>
  );
};

export default CategoryCarouselItemComponent;
