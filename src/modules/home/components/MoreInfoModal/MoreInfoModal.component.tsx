import React from "react";
import { serverImage } from "../../../comon/util/image-utils";
import { MoreInfoModalProps } from "./MoreInfoModal.props";

const moreInfoModalComponent = "moreInfoModalComponent";

const MoreInfoModalComponent: React.FC<MoreInfoModalProps> = ({
  item,
  service,
}) => {
  return (
    <div className="modal fade" id={`myModal-${item.id}`}>
      <div className="modal-dialog modal-dialog-centered mt-5">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{item.title}</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <div className="Rosha-position-modal">
              {item?.images && item?.images[0] && (
                <img
                  itemProp="image"
                  data-sizes="auto"
                  data-src={serverImage(item?.images[0]?.url || "")}
                  className="lazyload Rosha-style-banner rounded"
                  alt={item?.images[0]?.alt}
                />
              )}
              <div className="Rosha-layer-on-benner rounded"></div>
              {/* <h2 className="Rosha-layer-title-benner modal-dialog-centered">
                {item.title}
              </h2> */}
            </div>
            <div
              className="mt-3"
              dangerouslySetInnerHTML={{ __html: item.moreInfo || "" }}
            ></div>
          </div>
          <div className="modal-footer">
            <div className="row">
              <div className=" my-2">
                <a
                  href={`/service/${service}/${item.id}/request`}
                  target="_blank"
                  className="btn rlr-icon-text__title Rosha-btn-moreinfo-style1"
                >
                  Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoModalComponent;
