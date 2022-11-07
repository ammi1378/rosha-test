import React from "react";
import ServicesModalBodyComponent from "../ServicesModalBody/ServicesModalBody.component";
import { HotelInfoModalProps } from "./HotelInfoModal.props";

const hotelInfoModalComponent = "hotelInfoModalComponent";

const servicesModalBodyData = {
  titleBanner: "",
  describtion: "",
  services: [
    {
      service: "wifi",
      condition: "yes",
    },
    {
      service: "location",
      condition: "tehran",
    },{
      service: "location 2",
      condition: "mashahad",
    },
  ],
};

const HotelInfoModalComponent: React.FC<HotelInfoModalProps> = ({
  className,
  index,
  title,
}) => {
  return (
    <div
      className={`${hotelInfoModalComponent} ${className} modal fade`}
      id={`myModal${index}`}
    >
      <div className="modal-dialog modal-dialog-centered mt-5">
        <div className="modal-content">
          {/* <!-- Modal Header --> */}
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          {/* <!-- Modal body --> */}
          <ServicesModalBodyComponent
            titleBanner={servicesModalBodyData.titleBanner}
            describtion={servicesModalBodyData.describtion}
            services={servicesModalBodyData.services}
          />

          <div className="modal-footer">
            <div className="row">
              <div className=" my-2">
                <a
                  href="Rosha-Form.html"
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

export default HotelInfoModalComponent;
