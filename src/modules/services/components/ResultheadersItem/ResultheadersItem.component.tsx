import React from "react";
import { serverImage } from "../../../comon/util/image-utils";
import { ResultheadersItemProps } from "./ResultheadersItem.props";

const resultheadersItemComponent = "resultheadersItemComponent";

const ResultheadersItemComponent: React.FC<ResultheadersItemProps> = ({
  className,
  image,
  title,
  describtion,
}) => {
  return (
    <div
      className={`${resultheadersItemComponent} ${className} rlr-search-results-header__sorting-wrapper Rosha-height-banner`}
    >
      <img className="Rosha-style-banner rounded" src={serverImage(image || '')} />
      <div className="Rosha-layer-on-benner rounded"></div>
      <h1 className="Rosha-layer-title-benner mx-5"> {title} </h1>
      <p className="mx-5 Rosha-layer-discribtion-benner"> {describtion} </p>
    </div>
  );
};

export default ResultheadersItemComponent;
