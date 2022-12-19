import { IServicesInfoListResponseDataItemModel } from "../../../../rosha-api/IServicesInfoListResponseDataItemModel";
import { IServiceApiName } from "../../../comon/services/IServiceApiName";
import { ICityFilter } from "../../common/ICityFilter";
import { IKeywordFilter } from "../../common/IKeywordFilter";
import { IRatesFilter } from "../../common/IRatesFilter";
import { ISeasonFilter } from '../../common/ISeasonFilter';

export interface DailyTourServiceFilterProps {
  className?: string;
  service: IServiceApiName;
  serviceInfo?: IServicesInfoListResponseDataItemModel | null;
}

export interface IDailyTourFilters {
  keyword: null | string;
  rating: null | string;
  city: null | string;
  seasons: null | string;
}

export interface IServiceFilters {
  filters: {
    keywordFilter?: IKeywordFilter;
    rates?: IRatesFilter;
    seasons?: ISeasonFilter;
    city?: ICityFilter;
  };
  query: string;
}
export type IServiceFilter =
  | IKeywordFilter
  | IRatesFilter
  | ISeasonFilter
  | ICityFilter
export type IDailyTourFiltersKey = keyof IDailyTourFilters;
