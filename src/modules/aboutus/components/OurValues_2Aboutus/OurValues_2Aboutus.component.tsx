import React from "react";
import { OurValues_2AboutusProps } from "./OurValues_2Aboutus.props";

const ourValues_2AboutusComponent = "ourValues_2AboutusComponent";

const OurValues_2AboutusComponent: React.FC<OurValues_2AboutusProps> = ({ className }) => {
  return <section className={`${ ourValues_2AboutusComponent } ${className} rlr-about rlr-section rlr-section__my`}>
        <div className="container">
          <div className="row">
            <div className="offset-xl-1 col-lg-5 flex-sm-column-reverse rlr-dotted-image">
              <div className="rlr-img rlr-img--dotted-reversed">
                <img className="img-fluid" src="./assets/images/about-02.jpg " alt=" image our values" />
              </div>
            </div>
            <div className="col-lg-6">
              {/* <!-- Section heading --> */}
              <div className="rlr-section__title">
                <h2 className="rlr-section__title--main">Our Values</h2>
                <span className="rlr-section__title--sub">Sost Brilliant reasons Emprise should be your one-stop-shop!</span>
              </div>
              <div className="row gy-5">
                <div className="col-xl-6" data-aos="fade-up" data-aos-offset="250" data-aos-duration="500">
                  {/* <!-- Text card --> */}
                  <div className="rlr-text-card rlr-text-card--numbered">
                    <h5 className="rlr-text-card__title">1</h5>
                    <p className="rlr-text-card__desc">Etiam elementum ex vel tortor laoreet auctor. Aenean iaculis, ipsum eget eleifend ornare, arcu ante efficitur urna, id faucibus leo nunc sit amet elit.</p>
                  </div>
                </div>
                <div className="col-xl-6" data-aos="fade-up" data-aos-offset="275" data-aos-duration="600">
                  {/* <!-- Text card --> */}
                  <div className="rlr-text-card rlr-text-card--numbered">
                    <h5 className="rlr-text-card__title">2</h5>
                    <p className="rlr-text-card__desc">Etiam elementum ex vel tortor laoreet auctor. Aenean iaculis, ipsum eget eleifend ornare, arcu ante efficitur urna, id faucibus leo nunc sit amet elit.</p>
                  </div>
                </div>
                <div className="col-xl-6" data-aos="fade-up" data-aos-offset="300" data-aos-duration="700">
                  {/* <!-- Text card --> */}
                  <div className="rlr-text-card rlr-text-card--numbered">
                    <h5 className="rlr-text-card__title">3</h5>
                    <p className="rlr-text-card__desc">Etiam elementum ex vel tortor laoreet auctor. Aenean iaculis, ipsum eget eleifend ornare, arcu ante efficitur urna, id faucibus leo nunc sit amet elit.</p>
                  </div>
                </div>
                <div className="col-xl-6" data-aos="fade-up" data-aos-offset="325" data-aos-duration="800">
                  {/* <!-- Text card --> */}
                  <div className="rlr-text-card rlr-text-card--numbered">
                    <h5 className="rlr-text-card__title">4</h5>
                    <p className="rlr-text-card__desc">Etiam elementum ex vel tortor laoreet auctor. Aenean iaculis, ipsum eget eleifend ornare, arcu ante efficitur urna, id faucibus leo nunc sit amet elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </section>
};

export default OurValues_2AboutusComponent;