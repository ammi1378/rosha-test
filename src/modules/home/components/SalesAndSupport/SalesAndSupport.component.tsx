import React from "react";
import { SalesAndSupportProps } from "./SalesAndSupport.props";

const salesAndSupportComponent = "salesAndSupportComponent";

const SalesAndSupportComponent: React.FC<SalesAndSupportProps> = ({
  className,
}) => {
  return (
    <div>
      <section
        className={`${salesAndSupportComponent} ${className} rlr-section`}
      >
        <div className="container">
          <div className="rlr-section__title rlr-section__title--centered">
            <h2 className="rlr-section__title--main">Still have a question?</h2>
            <span className="rlr-section__title--sub">
              Sost Brilliant reasons Emprise should be your one-stop-shop!
            </span>
          </div>
          <div className="row">
            <div
              className="offset-lg-1 col-lg-5"
              data-aos="fade-down-right"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <div className="rlr-support-card rlr-support-card--sale">
                <div className="rlr-support-card__content">
                  <div className="rlr-support-card__img-wrapper">
                    <img src="/svg/headset.svg" alt="headset" />
                  </div>
                  <h2 className="rlr-support-card__title">For Sales</h2>
                  <p className="rlr-support-card__subtitle rlr-support-card__text">
                    The Brilliant reasons Emprise be your one-stop-shop!
                  </p>
                  <p className="rlr-support-card__text">sales@emprise.tours</p>
                  <p className="rlr-support-card__text">+977(985) 110-88-96</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="rlr-support-card rlr-support-card--help">
                <div className="rlr-support-card__content">
                  <div className="rlr-support-card__img-wrapper">
                    <img src="/svg/help-circle.svg" alt="headset" />
                  </div>
                  <h2 className="rlr-support-card__title">
                    Help &amp; Support
                  </h2>
                  <p className="rlr-support-card__subtitle rlr-support-card__text">
                    The Brilliant reasons Emprise be your one-stop-shop!
                  </p>
                  <p className="rlr-support-card__text">sales@emprise.tours</p>
                  <p className="rlr-support-card__text">+977(985) 110-88-96</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesAndSupportComponent;
