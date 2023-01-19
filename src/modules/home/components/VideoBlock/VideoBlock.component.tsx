import React from "react";
import { VideoBlockProps } from "./VideoBlock.props";
import { serverImage } from "../../../comon/util/image-utils";

const videoBlockComponent = "videoBlockComponent";

const VideoBlockComponent: React.FC<VideoBlockProps> = ({
  className,
  video,
}) => {
  return (
    <div
      className={`${videoBlockComponent} ${className} container rlr-section rlr-section__mb`}
    >
      <div className="rlr-section__title">
        <h2 className="rlr-section__title--main"> videos </h2>
        <span className="rlr-section__title--sub">
          Sost Brilliant reasons Emprise should be your one-stop-shop!
        </span>
      </div>
      <div className="Rosha-height-home-banner">
        <video
          className="Rosha-style-banner rounded"
          controls
          muted
          loop
          autoPlay
        >
          <source
            src={serverImage(video?.attributes?.url || "")}
            type={video?.attributes?.mime}
          />
        </video>
      </div>
    </div>
  );
};

export default VideoBlockComponent;
