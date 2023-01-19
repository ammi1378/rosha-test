import React, { useState } from "react";
import { FooterProps } from "./Footer.props";
import { RequestApi } from "../../../../rosha-api/api";

const footerComponent = "footerComponent";

const FooterComponent: React.FC<FooterProps> = ({ className }) => {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    const formData = new FormData(e.currentTarget);
    const values = {} as any;
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
      values[pair[0]] = pair[1];
    }
    submit(values);
  };
  const [status, setStatus] = useState<"fail" | "success" | null>(null);

  const submit = (data: any) => {
    const requestApi = new RequestApi();
    const requestData = {
      service: { title: "email subscribe" },
      ...data,
    };
    requestApi
      .postRequests({
        iRequestRequestModel: {
          data: { GeneralRequests: { Identifiers: requestData } },
        },
      })
      .then((val) => {
        if (val.status === 200) {
          setStatus("success");
        } else {
          setStatus("fail");
        }
      })
      .catch((e) => {
        setStatus("fail");
      });
  };
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
                  <a href="/service/tour">Tour</a>
                </li>
                <li>
                  <a href="/service/daily-tour">Daily tour</a>
                </li>
                <li>
                  <a href="/service/hotel">Hotel</a>
                </li>
                <li>
                  <a href="/service/restaurant">Restaurant</a>
                </li>
              </ul>
            </nav>
            <nav className="rlr-footer__menu__col">
              {/* <!-- Footer menu col --> */}
              <h4>Blogs</h4>
              <ul>
                <li>
                  <a href="/service/usefull-information">Usefull information</a>
                </li>
                <li>
                  <a href="/service/business-travel">Business travel</a>
                </li>
                <li>
                  <a href="/service/iran-visa">Iran visa</a>
                </li>
                <li>
                  <a href="/service/meeting-room">Meeting room</a>
                </li>
              </ul>
            </nav>
            <nav className="rlr-footer__menu__col">
              {/* <!-- Footer menu col --> */}
              <h4>Others</h4>
              <ul>
                <li>
                  <a href="/service/daily-tour">Daily tour</a>
                </li>
                <li>
                  <a href="/service/tour">Tour</a>
                </li>
                <li>
                  <a href="/aboutUs">About Us</a>
                </li>
                <li>
                  <a href="/service/souvenirs">Souvenirs</a>
                </li>
              </ul>
            </nav>
            {/* <!-- Subscribe --> */}
            <nav className="rlr-footer__menu__col rlr-footer__menu__col--lg">
              <h4>Get In Touch</h4>
              <a href="#" className="rlr-footer__menu__col__letstalk">
                Let’s Talk
              </a>
              <form className="rlr-subscribe" onSubmit={(e) => submitForm(e)}>
                <input
                  type="email"
                  required
                  className="rlr-subscribe__input"
                  placeholder="Enter your email"
                />
                <button className="btn">Send Now!</button>
              </form>
              {status === "fail" && (
                <p className="text-danger mt-2">An error accured!</p>
              )}
              {status === "success" && (
                <p className="text-success mt-2">
                  We recieved your email address. Thanks for your submission
                </p>
              )}
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
                <span>
                  2023 © rosha Trvael created by:{" "}
                  <a href="http://adiaweb.io/">Adiaweb</a>
                </span>
              </div>
              {/* <!-- Footer payment thumbs --> */}
              <div className="rlr-footer__legal__row__col"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
