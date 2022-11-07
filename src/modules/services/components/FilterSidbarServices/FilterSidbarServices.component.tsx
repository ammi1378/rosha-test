import React from "react";
import { FilterSidbarServicesProps } from "./FilterSidbarServices.props";

const filterSidbarServicesComponent = "filterSidbarServicesComponent";

const FilterSidbarServicesComponent: React.FC<FilterSidbarServicesProps> = ({
  className,
}) => {
  return (
    <aside
      className={`${filterSidbarServicesComponent} ${className} col-xl-3 rlr-search-results-page__sidebar`}
    >
      <div className="rlr-product-filters__filters-wrapper">
        {/* <!-- Search filter --> */}
        <div className="rlr-sidebar--search widget_search">
          <form
            role="search"
            method="get"
            action="http://railar.net/staging/"
            className="wp-block-search__button-outside wp-block-search__text-button wp-block-search"
          >
            <label
              htmlFor="wp-block-search__input-1"
              className="wp-block-search__label"
            >
              Search
            </label>
            <div className="wp-block-search__inside-wrapper">
              <input
                type="search"
                id="wp-block-search__input-1"
                className="wp-block-search__input"
                name="s"
                value=""
                placeholder=""
                required
              />
            </div>
          </form>
        </div>
        {/* <!-- text filter --> */}
        <div className="rlr-sidebar--text mt-2">
          <h4>About Hotel Services</h4>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet nostrud amet nostrud amet nostrud
            amet.
          </p>
        </div>

        {/* <!-- Tour rating filter --> */}
        <div className="rlr-product-filters__filter">
          <label className="rlr-form-label rlr-form-label-- rlr-product-filters__label">
            Tour Rating
          </label>
          <ul className="rlr-checkboxes">
            <li className="form-check form-check-block">
              <input
                className="form-check-input rlr-form-check-input rlr-product-filters__checkbox"
                id="rlr-filter-rating-1"
                type="checkbox"
              />
              <label aria-label="rating-1" htmlFor="rlr-filter-rating-1">
                <span className="rlr-product-filters__hidden">rating 1</span>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star-1"> </i>
              </label>
            </li>
            <li className="form-check form-check-block">
              <input
                className="form-check-input rlr-form-check-input rlr-product-filters__checkbox"
                id="rlr-filter-rating-2"
                type="checkbox"
              />
              <label aria-label="rating-2" htmlFor="rlr-filter-rating-2">
                <span className="rlr-product-filters__hidden">rating 2</span>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star"> </i>
              </label>
            </li>
            <li className="form-check form-check-block">
              <input
                className="form-check-input rlr-form-check-input rlr-product-filters__checkbox"
                id="rlr-filter-rating-3"
                type="checkbox"
              />
              <label aria-label="rating-3" htmlFor="rlr-filter-rating-3">
                <span className="rlr-product-filters__hidden">rating 3</span>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star"> </i>
                <i className="rlr-icon-font flaticon-star"> </i>
              </label>
            </li>
            <li className="form-check form-check-block">
              <input
                className="form-check-input rlr-form-check-input rlr-product-filters__checkbox"
                id="rlr-filter-rating-4"
                type="checkbox"
              />
              <label aria-label="rating-4" htmlFor="rlr-filter-rating-4">
                <span className="rlr-product-filters__hidden">rating 4</span>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star"> </i>
                <i className="rlr-icon-font flaticon-star"> </i>
                <i className="rlr-icon-font flaticon-star"> </i>
              </label>
            </li>
            <li className="form-check form-check-block">
              <input
                className="form-check-input rlr-form-check-input rlr-product-filters__checkbox"
                id="rlr-filter-rating-5"
                type="checkbox"
              />
              <label aria-label="rating-5" htmlFor="rlr-filter-rating-5">
                <span className="rlr-product-filters__hidden">rating 5</span>
                <i className="rlr-icon-font flaticon-star-1"> </i>
                <i className="rlr-icon-font flaticon-star"> </i>
                <i className="rlr-icon-font flaticon-star"> </i>
                <i className="rlr-icon-font flaticon-star"> </i>
                <i className="rlr-icon-font flaticon-star"> </i>
              </label>
            </li>
          </ul>
        </div>

        <div className="rlr-fieldrow__item rlr-booking-card__form-item">
          <label
            className="rlr-form-label rlr-form-label--dark rlr-booking-card__label"
            htmlFor="rlr-booking-dateranges-input"
          >
            Dates
          </label>
          <div
            className="rlr-input-group rlr-input-group__datefield rlr-js-booking-form-daterange"
            id="rlr-booking-startRange"
          >
            <input
              type="text"
              autoComplete="off"
              id="rlr-booking-dateranges-input"
              className="form-control form-input"
              placeholder="Select preferred dates"
            />
          </div>
        </div>
        {/* Price range filter */}
        <div className="rlr-product-filters__filter mt-2">
          <label className="rlr-form-label rlr-form-label-- rlr-product-filters__label">
            Days
          </label>
          <div className="rlr-range-slider">
            <span className="rlr-range-slider__price-box">
              <input
                type="number"
                autoComplete="off"
                className="form-control"
                value="0"
                data-name-min="0"
                data-name-max="30"
              />
              <input
                type="number"
                autoComplete="off"
                className="form-control"
                value="10"
                data-name-min="0"
                data-name-max="30"
              />
            </span>
            <input defaultValue="0" min="0" max="30" step="1" type="range" />
            <input defaultValue="10" min="0" max="30" step="1" type="range" />
          </div>
        </div>

        {/* Popular tags filter  */}
        <div className="row mt-3">
          <div className="col-xl-10">
            <label
              className="rlr-form-label rlr-form-label--dark"
              htmlFor="rlr-product-form-product-sub-category"
            >
              Physical
            </label>
            <select
              required
              id="rlr-product-form-product-sub-category"
              className="form-select rlr-form-select"
            >
              <option value="" disabled selected>
                Select
              </option>
              <option value="1">WildLife Tours</option>
              <option value="2">Persian food Tours</option>
              <option value="3">Ski Tours</option>
              <option value="3">Desert Tours</option>
              <option value="3">Adventure Tours</option>
              <option value="3">Nomadic Tours</option>
              <option value="3">Historical Tours</option>
              <option value="3">Eco Tours</option>
              <option value="3">Cultural Tours</option>
              <option value="3">Trekking Tours</option>
              <option value="3">Camping Tours</option>
              <option value="3">Safari Tours</option>
              <option value="3">Combination Tours</option>
              <option value="3">Multi Country</option>
              <option value="3">All Tours</option>
              <option value="3">Religious Tours</option>
              <option value="3">Exhibition Tours</option>
              <option value="3">Medical Tours</option>
            </select>
          </div>
          <div className="col-xl-2">
            <button
              type="button"
              className="btn rlr-button btn rlr-button rlr-button--form-tooltip rlr-button--transparent rlr-js-tool-tip"
              data-tippy-content='&lt;span className&#x3D;"type-lead-semibold"&gt;Product Title&lt;/span&gt; &lt;p&gt;are used to describe the product your are about to add to Emprise&lt;/p&gt;'
            >
              <i className="rlr-icon-font flaticon-information-button"> </i>
            </button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-xl-10">
            <label
              className="rlr-form-label rlr-form-label--dark"
              htmlFor="rlr-product-form-product-sub-category"
            >
              Cities
            </label>
            <select
              required
              id="rlr-product-form-product-sub-category"
              className="form-select rlr-form-select"
            >
              <option value="" disabled selected>
                Select
              </option>
              <option value="1">Tehran</option>
              <option value="2">Kish</option>
              <option value="3">Mashhad</option>
              <option value="3">Esfehan</option>
              <option value="3">Gheshm</option>
            </select>
          </div>
          <div className="col-xl-2">
            <button
              type="button"
              className="btn rlr-button btn rlr-button rlr-button--form-tooltip rlr-button--transparent rlr-js-tool-tip"
              data-tippy-content='&lt;span className&#x3D;"type-lead-semibold"&gt;Product Title&lt;/span&gt; &lt;p&gt;are used to describe the product your are about to add to Emprise&lt;/p&gt;'
            >
              <i className="rlr-icon-font flaticon-information-button"> </i>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidbarServicesComponent;
