import { IServicesInfoListResponseDataItemModel } from "../../../../rosha-api/IServicesInfoListResponseDataItemModel";
import { IServiceApiName } from "../../../comon/services/IServiceApiName";
import { IKeywordFilter } from "../../common/IKeywordFilter";
import { IRatesFilter } from "../../common/IRatesFilter";
import { ISeasonFilter } from "../../common/ISeasonFilter";
import { ICityFilter } from "../../common/ICityFilter";
import { ICategoryFilter } from "../../common/ICategoryFilter";
import { IRangeDayFilter } from "../../common/IRangeDayFilter";

export interface TourServiceFilterProps {
  className?: string;
  service: IServiceApiName;
  serviceInfo?: IServicesInfoListResponseDataItemModel | null;
}

export interface ITourFilters {
  keyword: null | string;
  rating: null | string;
  city: null | string;
  seasons: null | string;
  category: null | string;
  minDay:null | number;
  maxDay: null |number;
}

export interface IServiceFilters {
  filters: {
    keywordFilter?: IKeywordFilter;
    rates?: IRatesFilter;
    seasons?: ISeasonFilter;
    rangeDay?: IRangeDayFilter;
    category?: ICategoryFilter;
    city?: ICityFilter;
  };
  query: string;
}
export type IServiceFilter =
  | IKeywordFilter
  | IRatesFilter
  | ISeasonFilter
  | IRangeDayFilter
  | ICityFilter
  | ICategoryFilter;

export type ITourFiltersKey = keyof ITourFilters;
