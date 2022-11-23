import { IServicesInfoListResponseDataItemModel } from "../../../../rosha-api/IServicesInfoListResponseDataItemModel";
import { IServiceApiName } from "../../../comon/services/IServiceApiName";
import { IKeywordFilter } from "../../common/IKeywordFilter";
import { IRatesFilter } from "../../common/IRatesFilter";
import { ISeasonFilter } from "../../common/ISeasonFilter";
import { ICityFilter } from "../../common/ICityFilter";
import { IMettingRoomFilter } from "../../common/IMettingRoomFilter";
import { IHotelFilter } from "../../common/IHotelFilter";
import { IRangeFilter } from "../../common/IRangeFilter";

export interface HotelServiceFilterProps {
  className?: string;
  service: IServiceApiName;
  serviceInfo?: IServicesInfoListResponseDataItemModel | null;
}

export interface IHotelFilters {
  keyword: null | string;
  rating: null | string;
  city: null | string;
  peopleRange: null | string;
  isItForHotel: null | boolean;
  mettingRoom: null | string;
}

export interface IServiceFilters {
  filters: {
    keywordFilter?: IKeywordFilter;
    rates?: IRatesFilter;
    seasons?: ISeasonFilter;
    peopleRange?: IRangeFilter;
    city?: ICityFilter;
    isItForHotel?: IHotelFilter;
    mettingRoom: IMettingRoomFilter;
  };
  query: string;
}
export type IServiceFilter =
  | IKeywordFilter
  | IRatesFilter
  | IRangeFilter
  | ICityFilter
  | IMettingRoomFilter
  | IHotelFilter;

export type IHotelFiltersKey = keyof IHotelFilters;
