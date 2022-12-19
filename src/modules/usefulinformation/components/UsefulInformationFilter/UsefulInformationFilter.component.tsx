import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import QueryString from "qs";
import {
  IServiceFilter,
  IServiceFilters,
} from "../../../filters/components/HotelServiceFilter.props";
import { UsefulInformationFilterProps } from "./UsefulInformationFilter.props";

const ratings = [5, 4, 3, 2, 1];
const seasons = ["Spring", "Summer", "Fall", "Winter"];

const usefulInformationFilterComponent = "usefulInformationFilterComponent";

const UsefulInformationFilterComponent: React.FC<
  UsefulInformationFilterProps
> = ({ className, service, serviceInfo }) => {
  const router = useRouter();
  const [servicesFilters, setServicesFilters] = useState<IServiceFilters>({
    filters: {
      keywordFilter: {
        fields: ["Name"],
        type: "keyword",
        value: "",
      },
      city: {
        field: "city",
        type: "City",
        value: "",
      },
      rates: {
        type: "rate",
        fields: "Rate",
        value: [],
      },
      mettingRoom: {
        type: "meet",
        fields: "MettingRoom",
        values: [],
      },
      peopleRange: {
        field: "peoppleRange",
        type: "range",
        min: 0,
        max: 0,
      },
    },
    query: "",
  });
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    const query = router.query;
    let queryString = "";
    if (query) {
      Object.keys(query).map((key, index) => {
        if (key !== "service") {
          queryString += `${index === 0 ? "" : "&"}${key}=${query[key]}`;
        }
      });
    }
    const localServicesFilters = { ...servicesFilters };
    const parsedQueryString = QueryString.parse(queryString) as any;
    const ratesFilter = parsedQueryString?.filters?.Card?.CardStar?.$in as
      | string[]
      | undefined;
    if (ratesFilter && localServicesFilters.filters.rates) {
      localServicesFilters.filters.rates.value = ratesFilter.map((val) => +val);
    }
    const seasonFilter = parsedQueryString?.filters?.Card?.Season?.$in as
      | string[]
      | undefined;

    if (seasonFilter && localServicesFilters.filters.seasons) {
      localServicesFilters.filters.seasons.value = seasonFilter.map(
        (val) => val
      );
    }
    const minFilter = parsedQueryString?.filters?.Card?.MinDay?.$in as
      | number
      | undefined;

    if (minFilter && localServicesFilters.filters.rangeDay?.min) {
      localServicesFilters.filters.rangeDay.min = minFilter;
    }
    const maxFilter = parsedQueryString?.filters?.Card?.MaxDay?.$in as
      | number
      | undefined;
    if (maxFilter && localServicesFilters.filters.rangeDay?.max) {
      localServicesFilters.filters.rangeDay.max = maxFilter;
    }

    const keywordFilter = parsedQueryString?.filters?.Name?.$contains;
    if (keywordFilter && localServicesFilters.filters.keywordFilter) {
      localServicesFilters.filters.keywordFilter.value = keywordFilter;
    }
    setServicesFilters(localServicesFilters);
  }, []);
  useEffect(() => {
    const filters: { [key: string]: any } = {};
    filters.Card = {};
    if (servicesFilters.filters.rates?.value.length) {
      filters.Card.CardStar = {
        $in: servicesFilters.filters.rates?.value,
      };
    }

    if (servicesFilters.filters.seasons?.value.length) {
      filters.Card.CardSeason = {
        $in: servicesFilters.filters.seasons?.value,
      };
    }

    if (servicesFilters.filters.city?.value.length) {
      filters.Card.CardCity = {
        $in: servicesFilters.filters.city?.value,
      };
    }

    if (servicesFilters.filters.keywordFilter?.value.length) {
      filters.Name = {
        $contains: servicesFilters.filters.keywordFilter?.value,
      };
    }

    if (servicesFilters.filters.rangeDay?.min! > 0) {
      filters.Card.MinDay = {
        $contains: servicesFilters.filters.rangeDay?.min,
      };
    }
    if (servicesFilters.filters.rangeDay?.max! > 0) {
      filters.Card.MaxDay = {
        $contains: servicesFilters.filters.rangeDay?.max,
      };
    }

    const query = QueryString.stringify(
      {
        filters,
      },
      {
        encodeValuesOnly: true,
      }
    );
    setFilterQuery(query);
  }, [servicesFilters]);

  const serviceFilterChange = (filter: IServiceFilter, value: any) => {
    const localServicesFilters = { ...servicesFilters };

    if (filter.type === "City" && localServicesFilters.filters.city) {
      localServicesFilters.filters.city.value = value;
    }
    if (
      filter.type === "keyword" &&
      localServicesFilters.filters.keywordFilter
    ) {
      localServicesFilters.filters.keywordFilter.value = value;
    }

    setServicesFilters(localServicesFilters);
  };

  const changeServiceRate = (filter: any, value: any) => {
    const items = filter.value;
    const itemIndex = items?.findIndex((item: any) => item === value);

    if (itemIndex === -1) {
      items?.push(value);
    } else {
      items?.splice(itemIndex!, 1);
    }

    serviceFilterChange(filter, items);
  };
  return (
    <aside
      className={`${usefulInformationFilterComponent} ${className} col-xl-3 rlr-search-results-page__sidebar`}
    >
      <div className="rlr-product-filters__filters-wrapper rlr-sidebar">
        {/* <!-- Search filter --> */}
        {servicesFilters.filters.keywordFilter && (
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
                  value={servicesFilters.filters.keywordFilter.value}
                  placeholder=""
                  required
                  onChange={(e) =>
                    serviceFilterChange(
                      servicesFilters.filters.keywordFilter!,
                      e.target.value
                    )
                  }
                />
              </div>
            </form>
          </div>
        )}
        {/* <!-- text filter --> */}
        {serviceInfo && (
          <div className="rlr-sidebar--text mt-2">
            <h4>{serviceInfo.attributes?.FilterHeader}</h4>
            <p>{serviceInfo.attributes?.FilterDescription}</p>
          </div>
        )}
        {servicesFilters.filters.rates && (
          <div className="rlr-product-filters__filter">
            <label className="rlr-form-label rlr-form-label-- rlr-product-filters__label">
              Rating
            </label>
            <ul className="rlr-checkboxes">
              {ratings.map((rate, rateIndex) => {
                return (
                  <li
                    key={`star-item-${rate}`}
                    className="form-check form-check-block"
                  >
                    <input
                      className="form-check-input rlr-form-check-input rlr-product-filters__checkbox"
                      id={`rlr-filter-rating-${rate}`}
                      type="checkbox"
                      value={`${rate}`}
                      onChange={() =>
                        changeServiceRate(
                          servicesFilters.filters.rates!,
                          5 - rateIndex
                        )
                      }
                      checked={servicesFilters.filters.rates?.value?.includes(
                        rate
                      )}
                    />
                    <label
                      aria-label={`rating-${rate}`}
                      htmlFor={`rlr-filter-rating-${rate}`}
                    >
                      <span className="rlr-product-filters__hidden">
                        rating {rate}
                      </span>
                      {Array(rate)
                        .fill("")
                        .map((i, index) => {
                          return (
                            <i
                              key={index}
                              className="rlr-icon-font flaticon-star-1"
                            ></i>
                          );
                        })}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className="rlr-product-filters__filter mt-4">
          <label className="rlr-form-label rlr-form-label-- rlr-product-filters__label">
            Seasons
          </label>
          <ul className="rlr-checkboxes">
            {seasons.map((season) => {
              return (
                <li className="form-check form-check-block" key={season}>
                  <input
                    className="form-check-input rlr-form-check-input rlr-product-filters__checkbox"
                    type="checkbox"
                    value={`${season}`}
                    onChange={(e) =>
                      changeServiceRate(
                        servicesFilters.filters.seasons!,
                        season
                      )
                    }
                    checked={servicesFilters.filters.seasons?.value?.includes(
                      season
                    )}
                  />
                  <label className="rlr-form-label rlr-form-label--checkbox rlr-product-filters__checkbox-label">
                    {season}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        
        <div className="rlr-sidebar__widget rlr-sidebar--text">
          <h4>Text widget</h4>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="rlr-sidebar__widget">
          <h4>Tag cloud</h4>
          <p className="wp-block-tag-cloud">
            <a href="#">Travel</a>
            <a href="#">Walking</a>
            <a href="#">Outdoor Fun</a>
            <a href="#">Trekking</a>
            <a href="#">Water Sports</a>
            <a href="#">Cinema</a>
            <a href="#">Asia</a>
            <a href="#">Nomad</a>
            <a href="#">Jip Lining</a>
          </p>
        </div>
        <div className="rlr-sidebar__widget">
          <h4>Categories</h4>
          <ul className="wp-block-categories">
            <li>
              <a href="#">Hiking & Trekking</a>
            </li>
            <li>
              <a href="#">Rafting</a>
            </li>
            <li>
              <a href="#">Water Sports</a>
            </li>
            <li>
              <a href="#">Mountains</a>
            </li>
            <li>
              <a href="#">Summer Escapes</a>
            </li>
          </ul>
        </div>
        <div className="rlr-sidebar__widget rlr-sidebar--posts">
          <h4>Recent posts</h4>
          <ul>
            <li>
              <a href="#">
                <img src="/images/blog-list-01.jpg" alt="recent image" />
                <div className="rlr-sidebar--posts__column">
                  <span>How to stay safe in pandemic</span>
                  <time dateTime="2011-06-19">14th Jan 2016</time>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/blog-list-02.jpg" alt="recent image" />
                <div className="rlr-sidebar--posts__column">
                  <span>Stoics ways of traveling</span>
                  <time dateTime="2011-06-19">14th Jan 2016</time>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/blog-list-03.jpg" alt="recent image" />
                <div className="rlr-sidebar--posts__column">
                  <span>Ways of living with the locals</span>
                  <time dateTime="2011-06-19">14th Jan 2016</time>
                </div>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </aside>
  );
};

export default UsefulInformationFilterComponent;
