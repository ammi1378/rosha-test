import React from "react";
import { FooterProps } from "./Footer.props";

const footerComponent = "footerComponent";

const FooterComponent: React.FC<FooterProps> = ({ className }) => {
  return (
    <div>
      <footer
        className={`${footerComponent} ${className} rlr-footer rlr-section rlr-section__mt`}
      >
        <div className="container">

          {/* <!-- Footer menu --> */}
          <div className="rlr-footer__menu">
            <nav className="rlr-footer__menu__col">
              {/* <!-- Footer menu col --> */}
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#">Budget Tours</a>
                </li>
                <li>
                  <a href="#">Expert Insight</a>
                </li>
                <li>
                  <a href="#">Independent</a>
                </li>
                <li>
                  <a href="#">Luxury Tours</a>
                </li>
                <li>
                  <a href="#">Safety Tips</a>
                </li>
                <li>
                  <a href="#">Tips n Tricks</a>
                </li>
              </ul>
            </nav>
            <nav className="rlr-footer__menu__col">
              {/* <!-- Footer menu col --> */}
              <h4>Adventures</h4>
              <ul>
                <li>
                  <a href="#">Beach Activity</a>
                </li>
                <li>
                  <a href="#">Bungee Jump</a>
                </li>
                <li>
                  <a href="#">City Tour</a>
                </li>
                <li>
                  <a href="#">Hiking Trips</a>
                </li>
                <li>
                  <a href="#">Jungle Safari</a>
                </li>
                <li>
                  <a href="#">Night City Walk</a>
                </li>
              </ul>
            </nav>
            <nav className="rlr-footer__menu__col">
              {/* <!-- Footer menu col --> */}
              <h4>Country</h4>
              <ul>
                <li>
                  <a href="#">USA</a>
                </li>
                <li>
                  <a href="#">Australia</a>
                </li>
                <li>
                  <a href="#">South Africa</a>
                </li>
                <li>
                  <a href="#">West Indies</a>
                </li>
                <li>
                  <a href="#">New Zealand</a>
                </li>
                <li>
                  <a href="#">Srilanka</a>
                </li>
              </ul>
            </nav>
            {/* <!-- Subscribe --> */}
            <nav className="rlr-footer__menu__col rlr-footer__menu__col--lg">
              <h4>Get In Touch</h4>
              <a href="#" className="rlr-footer__menu__col__letstalk">
                Let’s Talk
              </a>
              <form
                className="rlr-subscribe"
                data-aos="fade-up"
                data-aos-offset="250"
                data-aos-duration="700"
              >
                <input
                  type="email"
                  className="rlr-subscribe__input"
                  placeholder="Enter your email"
                />
                <button className="btn">Send Now!</button>
              </form>
            </nav>
          </div>
          {/* <!-- Footer bottom --> */}
          <div className="rlr-footer__legal">
            <div className="rlr-footer__legal__row rlr-footer__legal__row--top">
              <div className="rlr-footer__legal__row__col">
                <a href="#">Privacy Policy</a>
              </div>
              {/* <!-- Footer social links --> */}
              <div className="rlr-footer__legal__row__col">
                <a href="#">Linkedin</a>
                <span className="separate">/</span>
                <a href="#">Facebook</a>
                <span className="separate">/</span>
                <a href="#">Instagram</a>
              </div>
            </div>
            {/* <!-- Footer copyright --> */}
            <div className="rlr-footer__legal__row rlr-footer__legal__row--bottom">
              <div className="rlr-footer__legal__row__col">
                <span>2022 © Railar Solutions</span>
              </div>
              {/* <!-- Footer payment thumbs --> */}
              <div className="rlr-footer__legal__row__col">
                <img src="/images/ele-payments.png" alt="Payments" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
