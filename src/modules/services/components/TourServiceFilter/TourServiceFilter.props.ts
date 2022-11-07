import { IServicesInfoListResponseDataItemModel } from "../../../../rosha-api/api";
import { IServiceApiName } from "../../../comon/services/services-api-gen";

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
  date: null | string;
}

export interface IServiceFilters {
  filters: {
    keywordFilter?: IKeywordFilter;
    rates?: IRatesFilter;
  };
  query: string;
}
export type IServiceFilter = IKeywordFilter | IRatesFilter;

export interface IKeywordFilter {
  type: "keyword";
  fields: string[];
  value: string;
}
export interface IRatesFilter {
  type: "rate";
  fields: string;
  value: number[];
}

export type ITourFiltersKey = keyof ITourFilters;
