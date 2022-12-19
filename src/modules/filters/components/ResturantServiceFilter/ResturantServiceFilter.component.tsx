import { useRouter } from "next/router";
import QueryString from "qs";
import React, { useEffect, useState } from "react";
import { IRangeDayFilter } from "../../common/IRangeDayFilter";
import {
  IServiceFilter,
  IServiceFilters,
  IResturantFilters,
  ResturantServiceFilterProps,
} from "./ResturantServiceFilter.props";

const resturantServiceFilterComponent = "resturantServiceFilterComponent";
const ratings = [5, 4, 3, 2, 1];
const foods = ["Itailan", "Chinese", "Traditional", "Seafood"];
const cities = ["Tehran", "Kish", "Mashhad", "Esfehan"];

const ResturantServiceFilterComponent: React.FC<ResturantServiceFilterProps> = ({
  className,
  service,
  serviceInfo,
}) => {
  const router = useRouter();
  const [filtersValue, setFiltersValue] = useState<IResturantFilters>({
    keyword: "",
    rating: "",
    city: "",
    foods: "",
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
        type: "city",
        value: "",
      },

      foods: {
        type: "season",
        fields: "FoodType",
        value: [],
      },
      rates: {
        type: "rate",
        fields: "Rate",
        value: [],
      },
    },
    query: "",
  });
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    debugger;
    const query = router.query;
    const filters: IResturantFilters = {
      keyword: "",
      rating: "",
      city: "",
      foods: "",
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
    const foodsFilter = parsedQueryString?.filters?.Card?.FoodType?.$in as
      | string[]
      | undefined;

    if (foodsFilter && localServicesFilters.filters.foods) {
      localServicesFilters.filters.foods.value = foodsFilter.map(
        (val) => val
      );
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

    if (servicesFilters.filters.foods?.value.length) {
      filters.Card.FoodType = {
        $in: servicesFilters.filters.foods?.value,
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
    if (filter.type === "season" && localServicesFilters.filters.foods) {
      localServicesFilters.filters.foods.value = value;
    }
    if (filter.type === "city" && localServicesFilters.filters.city) {
      localServicesFilters.filters.city.value = value;
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
      className={`${resturantServiceFilterComponent} ${className} col-xl-3 rlr-search-results-page__sidebar`}
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
            Food Type
          </label>
          <ul className="rlr-checkboxes">
            {foods.map((food) => {
              return (
                <li className="form-check form-check-block" key={food}>
                  <input
                    className="form-check-input rlr-form-check-input rlr-product-filters__checkbox"
                    type="checkbox"
                    value={`${food}`}
                    onChange={() =>
                      changeServiceRate(
                        servicesFilters.filters.foods!,
                        food
                      )
                    }
                    checked={servicesFilters.filters.foods?.value?.includes(
                      food
                    )}
                  />
                  <label className="rlr-form-label rlr-form-label--checkbox rlr-product-filters__checkbox-label">
                    {food}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
  
        <div className="row mt-3">
          <div className="col-xl-10">
            <label className="rlr-form-label rlr-form-label--dark">
              Cities
            </label>
            <select
              className="form-select rlr-form-select"
              onChange={(e) => {
                serviceFilterChange(
                  servicesFilters.filters.city!,
                  e.target.value
                );
              }}
            >
              <option value="" disabled selected>
                Select
              </option>
              {cities.map((city) => {
                return (
                  <option key={city} value={city}>
                    {city}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-xl-2"></div>
        </div>
      </div>
    </aside>
  );
};

export default ResturantServiceFilterComponent;



