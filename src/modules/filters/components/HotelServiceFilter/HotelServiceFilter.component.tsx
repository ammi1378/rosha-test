import { useRouter } from "next/router";
import QueryString from "qs";
import React, { useEffect, useState } from "react";
import { IRangeFilter } from "../../common/IRangeFilter";
import {
  IServiceFilter,
  IServiceFilters,
  IHotelFilters,
  HotelServiceFilterProps,
} from "./HotelServiceFilter.props";

const tourServiceFilterComponent = "tourServiceFilterComponent";
const ratings = [5, 4, 3, 2, 1];
const cities = ["Tehran", "Kish", "Mashhad", "Esfehan"];
const meetingRoomTypes = ["Conference Room", "Meeting Room"];


const HotelServiceFilterComponent: React.FC<HotelServiceFilterProps> = ({
  className,
  service,
  serviceInfo,
}) => {
  const router = useRouter();
  const [filtersValue, setFiltersValue] = useState<IHotelFilters>({
    keyword: "",
    rating: "",
    city: "",
    isItForHotel: false,
    meetingRoom: false,
    max: 0,
    min: 0,
    meetingRoomType: "",

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
      rates: {
        type: "rate",
        fields: "Rate",
        value: [],
      },
      meetingRoom: {
        type: "hasMeetingRoom",
        field: "meetingRoom",
        value: false,
      },
      peopleRange: {
        field: "peoppleRange",
        type: "range",
        min: 0,
        max: 0,
      },
      meetingRoomType: {
        field: "meetingRoomType",
        type: "meetingRoomType",
        value: [],
      },
      isItForHotel: {
        field: "isItForHotel",
        type: "isItForHotel",
        value: false
      }
    },
    query: "",
  });
  const [filterQuery, setFilterQuery] = useState("");

  useEffect(() => {
    const query = router.query;
    const filters: IHotelFilters = {
      keyword: "",
      rating: "",
      city: "",
      isItForHotel: false,
      meetingRoom: false,
      min: 0,
      max: 0,
      meetingRoomType: "",
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

    const mettingTypeFilter = parsedQueryString?.filters?.Card?.CardMeetingRoomType?.$in as
      | string[]
      | undefined;
    if (mettingTypeFilter && localServicesFilters.filters.meetingRoomType) {
      localServicesFilters.filters.meetingRoomType.value = mettingTypeFilter.map((val) => val);
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
    const mettingFilter = parsedQueryString?.filters?.Card?.CardMeetingRoom?.$contains;
    if (mettingFilter && localServicesFilters.filters.meetingRoom) {
      localServicesFilters.filters.meetingRoom.value = mettingFilter;
    }

    const isItForHotelFilter = parsedQueryString?.filters?.Card?.CardForHotel?.$contains;
    if (isItForHotelFilter && localServicesFilters.filters.isItForHotel) {
      localServicesFilters.filters.isItForHotel.value = isItForHotelFilter;
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

    if (servicesFilters.filters.isItForHotel?.value) {
      filters.Card.CardForHotel = {
        $in: servicesFilters.filters.isItForHotel?.value,
      };
    }

    if (servicesFilters.filters.meetingRoom?.value) {
      filters.Card.CardMeetingRoom = {
        $in: servicesFilters.filters.meetingRoom?.value,
      };
    }

    if (servicesFilters.filters.city?.value.length) {
      filters.Card.CardCity = {
        $in: servicesFilters.filters.city?.value,
      };
    }


    if (servicesFilters.filters.meetingRoomType?.value.length) {
      filters.Card.CardMeetingRoomType = {
        $in: servicesFilters.filters.meetingRoomType?.value,
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

    if (filter.type === "isItForHotel"
      && localServicesFilters.filters.isItForHotel) {
      localServicesFilters.filters.isItForHotel.value = value;
    }

    if (filter.type === "city" && localServicesFilters.filters.city) {
      localServicesFilters.filters.city.value = value;
    }

    if (filter.type === "hasMeetingRoom"
      && localServicesFilters.filters.meetingRoom) {
      localServicesFilters.filters.meetingRoom.value = value;
    }

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


        <div className="rlr-product-filters__filter">
          <label className="rlr-form-label rlr-form-label-- rlr-product-filters__label">
            Type
          </label>
          <ul className="rlr-checkboxes">
            {meetingRoomTypes.map((roomType) => {
              return (
                <li className="form-check form-check-block" key={roomType}>
                  <input
                    className="form-check-input rlr-form-check-input rlr-product-filters__checkbox"
                    type="checkbox"
                    value={`${roomType}`}
                    onChange={() =>
                      changeService(
                        servicesFilters.filters.meetingRoomType!,
                        roomType
                      )
                    }
                    checked={servicesFilters.filters.meetingRoomType?.value?.includes(roomType)}
                  />
                  <label className="rlr-form-label rlr-form-label--checkbox rlr-product-filters__checkbox-label">
                    {roomType}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
        <hr />
        <div className="rlr-product-filters__filter">
          <ul className="rlr-checkboxes">
            <li className="form-check form-check-block">
              <input
                className="form-check-input rlr-form-check-input rlr-product-filters__checkbox"
                type="checkbox"
                value={`${servicesFilters.filters.isItForHotel?.value}`}
                onChange={(e) =>
                  serviceFilterChange(
                    servicesFilters.filters.isItForHotel!,
                    servicesFilters.filters.isItForHotel?.value ? false : true)
                }
                checked={servicesFilters.filters.isItForHotel?.value ? true : false}
              />
              <label className="rlr-form-label rlr-form-label--checkbox rlr-product-filters__checkbox-label">
                Is It For Hotel?
              </label>
            </li>
          </ul>
        </div>
        <hr />

        <div className="rlr-product-filters__filter">
          <ul className="rlr-checkboxes">
            <li className="form-check form-check-block">
              <input
                className="form-check-input rlr-form-check-input rlr-product-filters__checkbox"
                type="checkbox"
                value={`${servicesFilters.filters.meetingRoom?.value}`}
                onChange={(e) =>
                  serviceFilterChange(
                    servicesFilters.filters.meetingRoom!,
                    servicesFilters.filters.meetingRoom?.value ? false : true)
                }
                checked={servicesFilters.filters.meetingRoom?.value ? true : false}
              />
              <label className="rlr-form-label rlr-form-label--checkbox rlr-product-filters__checkbox-label">
                Has a meeting room?
              </label>
            </li>
          </ul>
        </div>
        <hr />

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

        <div className="row">
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

export default HotelServiceFilterComponent;
