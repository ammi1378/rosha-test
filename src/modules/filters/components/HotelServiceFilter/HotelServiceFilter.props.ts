import { IServicesInfoListResponseDataItemModel } from "../../../../rosha-api/IServicesInfoListResponseDataItemModel";
import { IServiceApiName } from "../../../comon/services/IServiceApiName";
import { IKeywordFilter } from "../../common/IKeywordFilter";
import { IRatesFilter } from "../../common/IRatesFilter";
import { ISeasonFilter } from "../../common/ISeasonFilter";
import { ICityFilter } from "../../common/ICityFilter";
import { IHotelFilter } from "../../common/IHotelFilter";
import { IRangeFilter } from "../../common/IRangeFilter";
import { IMeetingRoomTypeFilter } from "../../common/IMeetingRoomTypeFilter";
import { IMeetingRoomFilter } from "../../common/IMeetingRoomFilter";

export interface HotelServiceFilterProps {
  className?: string;
  service: IServiceApiName;
  serviceInfo?: IServicesInfoListResponseDataItemModel | null;
}

export interface IHotelFilters {
  keyword: null | string;
  rating: null | string;
  city: null | string;
  min: null | number;
  max: null | number;
  isItForHotel: null | boolean;
  meetingRoom: null | boolean;
  meetingRoomType: null | string;
}

export interface IServiceFilters {
  filters: {
    keywordFilter?: IKeywordFilter;
    rates?: IRatesFilter;
    seasons?: ISeasonFilter;
    peopleRange?: IRangeFilter;
    city?: ICityFilter;
    isItForHotel?: IHotelFilter;
    meetingRoom: IMeetingRoomFilter;
    meetingRoomType: IMeetingRoomTypeFilter;
  };
  query: string;
}
export type IServiceFilter =
  | IKeywordFilter
  | IRatesFilter
  | IRangeFilter
  | ICityFilter
  | IMeetingRoomFilter
  | IHotelFilter
  | IMeetingRoomTypeFilter;

export type IHotelFiltersKey = keyof IHotelFilters;
