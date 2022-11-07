import Link from "next/link";
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
              <a href="./index.html">
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
                <a href="./index.html">
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
              <Link href="/service/tour">
                <a className="navigation-link">Tours</a>
              </Link>
            </li>
            {/* <!-- Mega menu --> */}
            <li className="navigation-item">
              <Link href="/service/daily-tour">
                <a className="navigation-link">Daly Tours</a>
              </Link>
            </li>
            {/* <!-- Dropdown menu 1 --> */}
            <li className="navigation-item has-submenu">
              <a className="navigation-link" href="#">
                Services
              </a>
              <ul className="navigation-megamenu navigation-submenu">
                <li className="navigation-megamenu-container">
                  <ul className="navigation-row">
                    {/* <!-- Mega menu col 1 --> */}
                    <li className="navigation-col">
                      <ul className="navigation-list">
                        <li className="navigation-list-heading rlr-navigation-list-heading--tall">
                          <a href="#"> Reservation Services </a>
                        </li>
                        <li className="rlr-icon-text">
                          <span className="rlr-step__icon rlr-step__icon--active">
                            <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-ph-hand-waving-light"></i>
                          </span>
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <Link href="/service/hotel">
                                <a>Hotel Booking</a>
                              </Link>
                            </span>
                            <span className="rlr-icon-text__subtext">
                              Lorem ipsum dolor sit amet, consectetur
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <span className="rlr-step__icon rlr-step__icon--active">
                            <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-dinner"></i>
                          </span>
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <Link href="/service/restaurant">
                                <a>Restaurant Reservation</a>
                              </Link>
                            </span>
                            <span className="rlr-icon-text__subtext">
                              Add your menu subtext here
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <span className="rlr-step__icon rlr-step__icon--active">
                            <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-sidebar-1"></i>
                          </span>
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <Link href="/service/meeting-room">
                                <a> Meeting Room & Salon Raservation</a>
                              </Link>
                            </span>
                            <span className="rlr-icon-text__subtext">
                              Add your menu subtext here
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <span className="rlr-step__icon rlr-step__icon--active">
                            <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-shopping"></i>
                          </span>
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <Link href="/service/shopping">
                                <a> Shopping Tour</a>
                              </Link>
                            </span>
                            <span className="rlr-icon-text__subtext">
                              Add your menu subtext here
                            </span>
                          </div>
                        </li>
                      </ul>
                    </li>
                    {/* <!-- Mega menu col 2 --> */}
                    <li className="navigation-col">
                      <ul className="navigation-list">
                        <li className="navigation-list-heading rlr-navigation-list-heading--tall">
                          <a href="#"> Transportation Services</a>
                        </li>
                        <li className="rlr-icon-text">
                          <span className="rlr-step__icon rlr-step__icon--active">
                            <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-whatsapp"></i>
                          </span>
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <Link href="/service/flight">
                                <a> Fights Booking</a>
                              </Link>
                            </span>
                            <span className="rlr-icon-text__subtext">
                              Lorem ipsum dolor sit amet, consectetur
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <span className="rlr-step__icon rlr-step__icon--active">
                            <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-train"></i>
                          </span>
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <Link href="/service/train">
                                <a> Train Booking</a>
                              </Link>
                            </span>
                            <span className="rlr-icon-text__subtext">
                              Lorem ipsum dolor sit amet, consectetur
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <span className="rlr-step__icon rlr-step__icon--active">
                            <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-bus"></i>
                          </span>
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <Link href="/service/bus">
                                <a> Bus Booking</a>
                              </Link>
                            </span>
                            <span className="rlr-icon-text__subtext">
                              Add your menu subtext here
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <span className="rlr-step__icon rlr-step__icon--active">
                            <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-wine"></i>
                          </span>
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <Link href="/service/airport">
                                <a> Airport Transportation</a>
                              </Link>
                            </span>
                            <span className="rlr-icon-text__subtext">
                              Add your menu subtext here
                            </span>
                          </div>
                        </li>
                      </ul>
                    </li>
                    {/* <!-- Mega menu col 4 --> */}
                    <li className="navigation-col">
                      <ul className="navigation-list">
                        <li className="navigation-list-heading rlr-navigation-list-heading--tall">
                          <a href="#"> VIP Services </a>
                        </li>
                        <li className="rlr-icon-text">
                          <span className="rlr-step__icon rlr-step__icon--active">
                            <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-feedback"></i>
                          </span>
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <Link href="/service/vip-domestic">
                                <a> VIP Domestic Airport Services</a>
                              </Link>
                            </span>
                            <span className="rlr-icon-text__subtext">
                              Lorem ipsum dolor sit amet, consectetur
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <span className="rlr-step__icon rlr-step__icon--active">
                            <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-feedback"></i>
                          </span>
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <Link href="/service/cip">
                                <a> CIP International Airport Services</a>
                              </Link>
                            </span>
                            <span className="rlr-icon-text__subtext">
                              Lorem ipsum dolor sit amet, consectetur
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <span className="rlr-step__icon rlr-step__icon--active">
                            <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-feedback"></i>
                          </span>
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <Link href="/service/private-jet">
                                <a> Privat Jet Reservation</a>
                              </Link>
                            </span>
                            <span className="rlr-icon-text__subtext">
                              Lorem ipsum dolor sit amet, consectetur
                            </span>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <li className="navigation-col">
                      <ul className="navigation-list">
                        <li className="navigation-list-heading rlr-navigation-list-heading--tall">
                          <a href="#"> Other Services </a>
                        </li>
                        <li className="rlr-icon-text">
                          <span className="rlr-step__icon rlr-step__icon--active">
                            <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-feedback"></i>
                          </span>
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <Link href="/service/insurance">
                                <a> Travel Insurance Service</a>
                              </Link>
                            </span>
                            <span className="rlr-icon-text__subtext">
                              Lorem ipsum dolor sit amet, consectetur
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <span className="rlr-step__icon rlr-step__icon--active">
                            <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-feedback"></i>
                          </span>
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <Link href="/service/tour-guid">
                                <a> Tour Guid</a>
                              </Link>
                            </span>
                            <span className="rlr-icon-text__subtext">
                              Lorem ipsum dolor sit amet, consectetur
                            </span>
                          </div>
                        </li>
                        <li className="rlr-icon-text">
                          <span className="rlr-step__icon rlr-step__icon--active">
                            <i className="rlr-icon-font rlr-icon-font--megamenu flaticon-feedback"></i>
                          </span>
                          <div className="rlr-icon-text__text-wrapper">
                            <span className="rlr-icon-text__title">
                              <a href="Rosha-Service-Translating.html"></a>
                              <Link href="/service/translate">
                                <a> Translating and Interpreting Services</a>
                              </Link>
                            </span>
                            <span className="rlr-icon-text__subtext">
                              Lorem ipsum dolor sit amet, consectetur
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
              <Link href="/service/iran-visa">
                <a className="navigation-link">Iran Visa</a>
              </Link>
            </li>
            {/* <!-- Dropdown menu 2 --> */}
            <li className="navigation-item">
              <a
                className="navigation-link"
                href="http://localhost:3000/bloges/bloglist"
              >
                Blog
              </a>
              <ul className="navigation-dropdown">
                <li className="navigation-dropdown-item">
                  <a
                    className="navigation-dropdown-link"
                    href="Rosha-Blog-Business.html"
                  >
                    Business Travel
                  </a>
                </li>
                <li className="navigation-dropdown-item">
                  <a
                    className="navigation-dropdown-link"
                    href="Rosha-Blog-Useful.html"
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
              <a
                className="navigation-link"
                href="http://localhost:3000/aboutUs/aboutus"
              >
                About Us
              </a>
            </li>
            {/* <!-- Dropdown menu 2 --> */}
            <li className="navigation-item">
              <a
                className="navigation-link"
                href="http://localhost:3000/contactUs/contact"
              >
                Contact Us
              </a>
            </li>

            <li className="navigation-item">
              <a className="navigation-link" href="Rosha-Souvenirs.html">
                Souvenirs
              </a>
            </li>
          </ul>
          {/* <!-- User actions menu --> */}
          <ul className="navigation-menu rlr-navigation__menu align-to-right">
            {/* <!-- User account dropdown --> */}
            <li className="navigation-item">
              <a className="navigation-link" href="#">
                Sarah J
                <img
                  className="ui right spaced avatar image"
                  src="/images/blog-single-avatar.png"
                  alt="account avatar"
                />
              </a>
              <ul className="navigation-dropdown">
                <li className="navigation-dropdown-item">
                  <a
                    className="navigation-dropdown-link"
                    href="./my-account-pages--dashboard.html"
                  >
                    Profile
                  </a>
                </li>
                <li className="navigation-dropdown-item">
                  <a
                    className="navigation-dropdown-link"
                    href="./my-account-pages--order.html"
                  >
                    Your Orders
                  </a>
                </li>
                <li className="navigation-dropdown-item">
                  <a
                    className="navigation-dropdown-link"
                    href="./my-account-pages--subscription.html"
                  >
                    Subscriptions
                  </a>
                </li>
                <li className="navigation-dropdown-item">
                  <a
                    className="navigation-dropdown-link"
                    href="./search-results--no-sidebar.html"
                  >
                    Favorites
                  </a>
                </li>
                <li className="navigation-dropdown-item">
                  <hr className="dropdown-divider rlr-dropdown__divider" />
                </li>
                <li className="navigation-dropdown-item">
                  <a
                    className="navigation-dropdown-link"
                    href="./account-pages--login.html"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
