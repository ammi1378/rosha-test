import React from "react";
import { VideoBlockProps } from "./VideoBlock.props";

const videoBlockComponent = "videoBlockComponent";

const VideoBlockComponent: React.FC<VideoBlockProps> = ({ className }) => {
  return <div className={`${videoBlockComponent} ${className} container`}>
    <div className="rlr-section__title">
      <h2 className="rlr-section__title--main"> videos </h2>
      <span className="rlr-section__title--sub">Sost Brilliant reasons Emprise should be your one-stop-shop!</span>
    </div>
    <div className="Rosha-height-home-banner">
      <video className="Rosha-style-banner rounded" controls>
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
      </video>
    </div>
  </div>
};

export default VideoBlockComponent;