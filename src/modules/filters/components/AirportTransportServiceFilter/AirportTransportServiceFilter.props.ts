import { IServicesInfoListResponseDataItemModel } from "../../../../rosha-api/IServicesInfoListResponseDataItemModel";
import { IServiceApiName } from "../../../comon/services/IServiceApiName";
import { IKeywordFilter } from "../../common/IKeywordFilter";
import { IRatesFilter } from "../../common/IRatesFilter";
import { ISeasonFilter } from "../../common/ISeasonFilter";
import { ICityFilter } from "../../common/ICityFilter";
import { IRangeFilter } from "../../common/IRangeFilter";


export interface AirportTransportServiceFilterProps {
  className?: string;
  service: IServiceApiName;
  serviceInfo?: IServicesInfoListResponseDataItemModel | null;
}

export interface IAirportTransportFilters {
  keyword: null | string;
  rating: null | string;
  min: null | number;
  max: null | number;
}

export interface IServiceFilters {
  filters: {
    keywordFilter?: IKeywordFilter;
    rates?: IRatesFilter;
    peopleRange?: IRangeFilter;
  };
  query: string;
}
export type IServiceFilter =
  | IKeywordFilter
  | IRatesFilter
  | IRangeFilter
  | ICityFilter;

export type IAirportTransportFiltersKey = keyof IAirportTransportFilters;
