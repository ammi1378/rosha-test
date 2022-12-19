/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { SouvenirsDescriptionProps } from "./SouvenirsDescription.props";

const souvenirsDescriptionComponent = "souvenirsDescriptionComponent";

const SouvenirsDescriptionComponent: React.FC<SouvenirsDescriptionProps> = ({
  className,
}) => {
  return (
    <div className={`${souvenirsDescriptionComponent} ${className}`}>
      <aside className="row">
        <div className="rlr-search-results-header rlr-search-results-header__wrapper">
          <div className="rlr-search-results-header__sorting-wrapper Rosha-height-banner">
            <img
              className="Rosha-style-banner rounded"
              src="/NewImages/female-guide-with-group-tourists-flat-.webp"
              alt="Photo"
            />

            <div className="Rosha-layer-on-benner rounded"></div>
            <h1 className="Rosha-layer-title-benner mx-5">
              Tours Reservation{" "}
            </h1>
            <p className="mx-5 Rosha-layer-discribtion-benner">
              The complex is raised high on a walled platform, with five
              "palaces" or halls of varying size, and grand entrances. The
              function of Persepolis remains quite unclear. The complex is
              raised high on a walled platform, with five "palaces" or halls of
              varying size, and grand entrances. The function of Persepolis
              remains quite unclear The complex is raised high on a walled
              platform, with five "palaces" or halls of varying size, and grand
              entrances. The function of Persepolis remains quite unclear . The
              complex is raised high on a walled platform, with five "palaces"
              or halls of varying size, and grand entrances. The function of
              Persepolis remains quite unclear .The complex is raised high on a
              walled platform, with five "palaces" or halls of varying size, and
              grand entrances. The function of Persepolis remains quite unclear
              . The complex is raised high on a walled platform, with five
              "palaces" or halls of varying size, and grand entrances. The
              function of Persepolis remains quite unclear
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SouvenirsDescriptionComponent;
