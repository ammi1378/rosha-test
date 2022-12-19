import { useRouter } from "next/router";
import QueryString from "qs";
import React, { useEffect, useState } from "react";
import { IRangeFilter } from "../../common/IRangeFilter";
import {
  IServiceFilter,
  IServiceFilters,
  IAirportTransportFilters,
  AirportTransportServiceFilterProps,
} from "./AirportTransportServiceFilter.props";

const tourServiceFilterComponent = "tourServiceFilterComponent";
const ratings = [5, 4, 3, 2, 1];


const AirportTransportServiceFilterComponent: React.FC<AirportTransportServiceFilterProps> = ({
  className,
  service,
  serviceInfo,
}) => {
  const router = useRouter();
  const [filtersValue, setFiltersValue] = useState<IAirportTransportFilters>({
    keyword: "",
    rating: "",
    max: 0,
    min: 0,

  });
  const [servicesFilters, setServicesFilters] = useState<IServiceFilters>({
    filters: {
      keywordFilter: {
        fields: ["Name"],
        type: "keyword",
        value: "",
      },

      rates: {
        type: "rate",
        fields: "Rate",
        value: [],
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
    const filters: IAirportTransportFilters = {
      keyword: "",
      rating: "",
      min: 0,
      max: 0,
    };
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


    const minFilter = parsedQueryString?.filters?.Card?.MinDay?.$in as
      | number
      | undefined;

    if (minFilter && localServicesFilters.filters.peopleRange?.min) {
      localServicesFilters.filters.peopleRange.min = minFilter;
    }
    const maxFilter = parsedQueryString?.filters?.Card?.MaxDay?.$in as
      | number
      | undefined;
    if (maxFilter && localServicesFilters.filters.peopleRange?.max) {
      localServicesFilters.filters.peopleRange.max = maxFilter;
    }

    const keywordFilter = parsedQueryString?.filters?.Name?.$contains;
    if (keywordFilter && localServicesFilters.filters.keywordFilter) {
      localServicesFilters.filters.keywordFilter.value = keywordFilter;
    }

    setFiltersValue(filters);
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


    if (servicesFilters.filters.keywordFilter?.value.length) {
      filters.Name = {
        $contains: servicesFilters.filters.keywordFilter?.value,
      };
    }

    if (servicesFilters.filters.peopleRange?.min! > 0) {
      filters.Card.Min = {
        $contains: servicesFilters.filters.peopleRange?.min,
      };
    }
    if (servicesFilters.filters.peopleRange?.max! > 0) {
      filters.Card.Max = {
        $contains: servicesFilters.filters.peopleRange?.max,
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
    router.push(`/service/${service}/${query.length ? "?" + query : ""}`);
  }, [servicesFilters]);

  const serviceFilterChange = (filter: IServiceFilter, value: any) => {
    const localServicesFilters = { ...servicesFilters };


    if (
      filter.type === "keyword" &&
      localServicesFilters.filters.keywordFilter
    ) {
      localServicesFilters.filters.keywordFilter.value = value;
    }

    setServicesFilters(localServicesFilters);
  };

  const changeService = (filter: any, value: any) => {
    const items = filter.value;
    const itemIndex = items?.findIndex((item: any) => item === value);

    if (itemIndex === -1) {
      items?.push(value);
    } else {
      items?.splice(itemIndex!, 1);
    }

    serviceFilterChange(filter, items);
  };


  const changeServiceRangeMin = (filter: IRangeFilter, value: any) => {
    filter.min = value;
    serviceFilterChange(filter, value);
  };

  const changeServiceRangeMax = (filter: IRangeFilter, value: any) => {
    filter.max = value;
    serviceFilterChange(filter, value);
  };

  return (
    <aside
      className={`${tourServiceFilterComponent} ${className} col-xl-3 rlr-search-results-page__sidebar`}
    >
      <div className="rlr-product-filters__filters-wrapper">
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
                        changeService(
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



        <div className="rlr-range-slider">
          <label className="rlr-form-label rlr-form-label-- rlr-product-filters__label">
            people Between:
          </label>
          <span className="rlr-range-slider__price-box">
            <input
              type="number"
              className="form-control"
              defaultValue={1}
              value={servicesFilters.filters.peopleRange?.min}
              onChange={(e) => {
                changeServiceRangeMin(
                  servicesFilters.filters.peopleRange!,
                  e.target.value
                );
              }}
            />
            <input
              type="number"
              className="form-control"
              defaultValue={1}
              value={servicesFilters.filters.peopleRange?.max}
              onChange={(e) => {
                changeServiceRangeMax(
                  servicesFilters.filters.peopleRange!,
                  e.target.value
                );
              }}
            />
          </span>
        </div>


      </div>
    </aside>
  );
};

export default AirportTransportServiceFilterComponent;
