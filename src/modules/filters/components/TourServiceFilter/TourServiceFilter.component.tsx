import { useRouter } from "next/router";
import QueryString from "qs";
import React, { useEffect, useState } from "react";
import { IRangeDayFilter } from "../../common/IRangeDayFilter";
import {
  IServiceFilter,
  IServiceFilters,
  ITourFilters,
  TourServiceFilterProps,
} from "./TourServiceFilter.props";

const tourServiceFilterComponent = "tourServiceFilterComponent";
const ratings = [5, 4, 3, 2, 1];
const seasons = ["Spring", "Summer", "Fall", "Winter"];
const categories = ["WildLife Tours", "Persian food Tours", "Ski Tours"];
const cities = ["Tehran", "Kish", "Mashhad", "Esfehan"];

const TourServiceFilterComponent: React.FC<TourServiceFilterProps> = ({
  className,
  service,
  serviceInfo,
}) => {
  const router = useRouter();
  const [filtersValue, setFiltersValue] = useState<ITourFilters>({
    keyword: "",
    rating: "",
    minDay: 0,
    maxDay: 0,
    category: "",
    city: "",
    seasons: "",
  });
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
      category: {
        field: "category",
        type: "Category",
        value: "",
      },
      rates: {
        type: "rate",
        fields: "Rate",
        value: [],
      },
      seasons: {
        type: "season",
        fields: "Season",
        value: [],
      },
      rangeDay: {
        field: "rangeDays",
        type: "rangeDay",
        minDay: 0,
        maxDay: 0,
      }
    },
    query: "",
  });
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    debugger;
    const query = router.query;
    const filters: ITourFilters = {
      keyword: "",
      rating: "",
      category: "",
      city: "",
      seasons: "",
      minDay: 0,
      maxDay: 0,
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
    const seasonFilter = parsedQueryString?.filters?.Card?.Season?.$in as
      | string[]
      | undefined;

    if (seasonFilter && localServicesFilters.filters.seasons) {
      localServicesFilters.filters.seasons.value = seasonFilter.map(
        (val) => val
      );
    }
    const minDayFilter = parsedQueryString?.filters?.Card?.MinDay?.$in as
      | number
      | undefined;

    if (minDayFilter && localServicesFilters.filters.rangeDay?.minDay) {
      localServicesFilters.filters.rangeDay.minDay = minDayFilter;
    }
    const maxDayFilter = parsedQueryString?.filters?.Card?.MaxDay?.$in as
      | number
      | undefined;
    if (maxDayFilter && localServicesFilters.filters.rangeDay?.maxDay) {
      localServicesFilters.filters.rangeDay.maxDay = maxDayFilter;
    }

    const keywordFilter = parsedQueryString?.filters?.Name?.$contains;
    if (keywordFilter && localServicesFilters.filters.keywordFilter) {
      localServicesFilters.filters.keywordFilter.value = keywordFilter;
    }
    setFiltersValue(filters);
    setServicesFilters(localServicesFilters);
  }, []);

  //   useEffect()
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

    if (servicesFilters.filters.category?.value.length) {
      filters.Card.CardCategory = {
        $in: servicesFilters.filters.category?.value,
      };
    }
    if (servicesFilters.filters.keywordFilter?.value.length) {
      filters.Name = {
        $contains: servicesFilters.filters.keywordFilter?.value,
      };
    }

    if (servicesFilters.filters.rangeDay?.minDay! > 0) {
      filters.Card.MinDay = {
        $in: servicesFilters.filters.rangeDay?.minDay,
      };
    }
    if (servicesFilters.filters.rangeDay?.maxDay! > 0) {
      filters.Card.MaxDay = {
        $in: servicesFilters.filters.rangeDay?.maxDay,
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
    if (filter.type === "Category" &&
      localServicesFilters.filters.category) {
      localServicesFilters.filters.category.value = value;
    }
    if (filter.type === "City" &&
      localServicesFilters.filters.city) {
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
  const changeServiceRangeDayMin = (filter: IRangeDayFilter, value: any) => {

     filter.minDay = value;
    serviceFilterChange(filter, value);
  };

  const changeServiceRangeDayMax = (filter: IRangeDayFilter, value: any) => {
    filter.maxDay = value;
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
        <div className="rlr-range-slider">
          <label className="rlr-form-label rlr-form-label-- rlr-product-filters__label">
            Days Between:
          </label>
          <span className="rlr-range-slider__price-box">
            <input
              type="number"
              className="form-control"
              defaultValue={servicesFilters.filters.rangeDay?.minDay!}
              value={servicesFilters.filters.rangeDay?.minDay!}
              onChange={((e) => {
                changeServiceRangeDayMin(
                  servicesFilters.filters.rangeDay!,
                  e.target.value
                )
              })}
            />
            <input
              type="number"
              className="form-control"
              defaultValue={servicesFilters.filters.rangeDay?.maxDay!}
              value={servicesFilters.filters.rangeDay?.maxDay!}
              onChange={((e) => {
                changeServiceRangeDayMax(
                  servicesFilters.filters.rangeDay!,
                  e.target.value
                )
              })}
            />
          </span>
        </div>
        <div className="row">
          <div className="col-xl-10">
            <label className="rlr-form-label rlr-form-label--dark">
              Tour Type
            </label>
            <select
              id="rlr-product-form-product-sub-category"
              className="form-select rlr-form-select"
              onChange={(e) => {
                serviceFilterChange(servicesFilters.filters.category!,
                  e.target.value)
              }}
            >
              <option value="" disabled selected>
                Select
              </option>
              {categories.map((category) => {
                return (<option key={category} value={category}>{category}</option>)
              })}
            </select>
          </div>
          <div className="col-xl-2"></div>
        </div>

        <div className="row mt-3">
          <div className="col-xl-10">
            <label className="rlr-form-label rlr-form-label--dark">
              Cities
            </label>
            <select className="form-select rlr-form-select"
              onChange={(e) => {
                serviceFilterChange(servicesFilters.filters.city!,
                  e.target.value)
              }}>
              <option value="" disabled selected>
                Select
              </option>
              {cities.map((city) => {
                return (<option
                  key={city}
                  value={city}
                >{city}</option>)
              })}
            </select>
          </div>
          <div className="col-xl-2"></div>
        </div>
      </div>
    </aside>
  );
};

export default TourServiceFilterComponent;
