/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { HeaderProps } from "./Header.props";

const headerComponent = "headerComponent";

const HeaderComponent: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`${headerComponent} ${className}`}>
      <nav
        id="navigation"
        className="navigation rlr-navigation default-nav fixed-top"
      >
        {/* <!-- Logo --> */}
        <div className="navigation-header">
          <div className="navigation-brand-text">
            <div className="rlr-logo rlr-logo__navbar-brand rlr-logo--default">
              <a href="/">
                <img
                  src="/NewImages/logo-rosha-Copy.png"
                  alt="#"
                  className=""
                />
              </a>
            </div>
          </div>
          <div className="navigation-button-toggler">
            <span className="rlr-sVGIcon">
              <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-menu"></i>
            </span>
          </div>
        </div>
        <div className="navigation-body rlr-navigation__body container">
          <div className="navigation-body-header rlr-navigation__body-header">
            <div className="navigation-brand-text">
              <div className="rlr-logo rlr-logo__navbar-brand rlr-logo--default">
                <a href="/">
                  <img
                    src="/NewImages/logo-rosha-Copy.png"
                    width="170px"
                    height="170px"
                    alt="#"
                  />
                </a>
              </div>
            </div>
            <span className="rlr-sVGIcon navigation-body-close-button">
              <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-close"></i>
            </span>
          </div>

          {/* <!-- Main menu --> */}
          <ul className="navigation-menu rlr-navigation__menu rlr-navigation__menu--main-links">
            {/* <!-- Dropdown menu 1 --> */}
            <li className="navigation-item">
              <a href="/service/tour" className="navigation-link">
                Tours
              </a>
            </li>
            {/* <!-- Mega menu --> */}
            <li className="navigation-item">
              <a className="navigation-link" href="/service/daily-tour">
                Daly Tours
              </a>
            </li>
            <li className="navigation-item has-submenu">
              <a className="navigation-link" href="#">
                Services
              </a>
              <ul className="navigation-dropdown navigation-submenu">
                <li className="navigation-dropdown-container">
                  <ul className="navigation-row">
                    <li className="navigation-col">
                      <ul className="navigation-list">
                        <li className="rlr-icon-text">
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <a href="/service/hotel">Hotel Booking</a>
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <a href="/service/restaurant">
                                Restaurant Reservation
                              </a>
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">

                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <a href="/service/meeting-room">
                                Meeting Room & Salon Raservation
                              </a>
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <a href="/service/shopping"> Shopping Tour</a>
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <a href="/service/flight"> Fights Booking</a>
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <a href="/service/train"> Train Booking</a>
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <a href="/service/bus"> Bus Booking</a>
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">

                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <a href="/service/airport">
                                {" "}
                                Airport Transportation
                              </a>
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <a href="/service/vip-domestic">
                                {" "}
                                VIP Domestic Airport Services
                              </a>
                            </span>

                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <a href="/service/cip">
                                {" "}
                                CIP International Airport Services
                              </a>
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <a href="/service/private-jet">
                                {" "}
                                Privat Jet Reservation
                              </a>
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <a href="/service/insurance">
                                {" "}
                                Travel Insurance Service
                              </a>
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <a href="/service/tour-guid"> Tour Guid</a>
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <a href="/service/translate">
                                {" "}
                                Translating and Interpreting Services
                              </a>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="navigation-item">
              <a href="/service/iran-visa" className="navigation-link">
                Iran Visa
              </a>
            </li>

            <li className="navigation-item">
              <a href="/businessTravel" className="navigation-link">
                Business Travel
              </a>
            </li>
            <li className="navigation-item has-submenu">
              <a className="navigation-link" href="#">
                About Iran
              </a>
              <ul className="navigation-dropdown navigation-submenu">
                <li className="navigation-dropdown-item">
                  <a
                    className="navigation-dropdown-link"
                    href="/usefulInformation"
                  >
                    Useful Information
                  </a>
                </li>
                <li className="navigation-dropdown-item">
                  <a
                    className="navigation-dropdown-link"
                    href="Rosha-Blog-Unesco.html"
                  >
                    Unesco Site
                  </a>
                </li>
              </ul>
            </li>
            <li className="navigation-item">
              <a className="navigation-link" href="/service/souvenirs">
                Souvenirs
              </a>
            </li>
            <li className="navigation-item">
              <a href="/aboutUs" className="navigation-link">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
