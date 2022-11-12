import Link from "next/link";
import { useRouter } from "next/router";
import QueryString from "qs";
import React, { useEffect, useState } from "react";
import {
  IRatesFilter,
  IServiceFilter,
  IServiceFilters,
  ITourFilters,
  ITourFiltersKey,
  TourServiceFilterProps,
} from "./TourServiceFilter.props";

const tourServiceFilterComponent = "tourServiceFilterComponent";
const ratings = [5, 4, 3, 2, 1];
const TourServiceFilterComponent: React.FC<TourServiceFilterProps> = ({
  className,
  service,
  serviceInfo,
}) => {
  const router = useRouter();

  const [filtersValue, setFiltersValue] = useState<ITourFilters>({
    keyword: "",
    rating: "",
    minDays: "1",
    maxDays: "4",
    tourType: "",
    city: "",
    date: "",
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
    },

    query: "",
  });

  useEffect(() => {
    // debugger;
    const query = router.query;
    const filters: ITourFilters = {
      keyword: "",
      rating: "",
      minDays: "1",
      maxDays: "4",
      tourType: "",
      city: "",
      date: "",
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

    const keywordFilter = parsedQueryString?.filters?.Name?.$contains;
    if (keywordFilter && localServicesFilters.filters.keywordFilter) {
      localServicesFilters.filters.keywordFilter.value = keywordFilter;
    }

    // const minDaysFilter = parsedQueryString?.filters?.$and[0]?.Duration?.$gt;
    // const maxDaysFilter = parsedQueryString?.filters?.$and[1]?.Duration?.$lt;

    // if (minDaysFilter) {
    //   filters.minDays = minDaysFilter;
    // }
    // if (maxDaysFilter) {
    //   filters.maxDays = maxDaysFilter;
    // }
    setFiltersValue(filters);
    setServicesFilters(localServicesFilters);
  }, [router]);

  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    const filters: { [key: string]: any } = {};
    if (servicesFilters.filters.rates?.value.length) {
      filters.Card = {
        CardStar: {
          $in: servicesFilters.filters.rates?.value,
        },
      };
    }

    if (servicesFilters.filters.keywordFilter?.value.length) {
      filters.Name = {
        $contains: servicesFilters.filters.keywordFilter?.value,
      };
    }

    // filters.$and = [
    //   {
    //     Duration: {
    //       $gt: filtersValue.minDays,
    //     },
    //   },
    //   {
    //     Duration: {
    //       $lt: filtersValue.maxDays,
    //     },
    //   },
    // ];

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
    // const foundedFilterIndex = localServicesFilters.filters.findIndex(
    //   (foundedFilter) => foundedFilter.type === filter.type
    // );

    if (
      filter.type === "keyword" &&
      localServicesFilters.filters.keywordFilter
    ) {
      localServicesFilters.filters.keywordFilter.value = value;
    }

    setServicesFilters(localServicesFilters);
  };

  const changeServiceRate = (filter: IRatesFilter, value: number) => {
    const items = filter.value;
    const itemIndex = items?.findIndex((item) => item === value);

    if (itemIndex === -1) {
      items?.push(value);
    } else {
      items?.splice(itemIndex!, 1);
    }

    serviceFilterChange(filter, items);
  };

  const filterChange = (key: ITourFiltersKey, value: string) => {
    const filters: ITourFilters = { ...filtersValue };
    filters[key] = value;
    setFiltersValue(filters);
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
                      onChange={(e) =>
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
                            <i key={index} className="rlr-icon-font flaticon-star-1"> </i>
                          );
                        })}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div className="row mt-3">
          <Link
            href={`/service/${service}/${
              filterQuery.length ? "?" + filterQuery : ""
            }`}
          >
            <a className="btn btn-success">Search</a>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default TourServiceFilterComponent;
