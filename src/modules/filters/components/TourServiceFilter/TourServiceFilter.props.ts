import { IServicesInfoListResponseDataItemModel } from "../../../../rosha-api/IServicesInfoListResponseDataItemModel";
import { IServiceApiName } from "../../../comon/services/IServiceApiName";
import { IKeywordFilter } from "../../common/IKeywordFilter";
import { IRatesFilter } from "../../common/IRatesFilter";
import { ISeasonFilter } from '../../common/ISeasonFilter';

export interface TourServiceFilterProps {
  className?: string;
  service: IServiceApiName;
  serviceInfo?: IServicesInfoListResponseDataItemModel | null;
}

export interface ITourFilters {
  keyword: null | string;
  rating: null | string;
  minDays: null | string;
  maxDays: null | string;
  tourType: null | string;
  city: null | string;
  seasons: null | string;
}

export interface IServiceFilters {
  filters: {
    keywordFilter?: IKeywordFilter;
    rates?: IRatesFilter;
    seasons?: ISeasonFilter
  };
  query: string;
}
export type IServiceFilter = IKeywordFilter | IRatesFilter | ISeasonFilter;

export type ITourFiltersKey = keyof ITourFilters;
