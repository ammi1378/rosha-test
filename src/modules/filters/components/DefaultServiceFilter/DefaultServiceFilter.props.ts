import { IServicesInfoListResponseDataItemModel } from "../../../../rosha-api/IServicesInfoListResponseDataItemModel";
import { IServiceApiName } from "../../../comon/services/IServiceApiName";
import { IKeywordFilter } from "../../common/IKeywordFilter";
import { IRatesFilter } from "../../common/IRatesFilter";
import { ISeasonFilter } from "../../common/ISeasonFilter";
import { ICityFilter } from "../../common/ICityFilter";
import { ICategoryFilter } from "../../common/ICategoryFilter";
import { IRangeDayFilter } from "../../common/IRangeDayFilter";

export interface DefaultServiceFilterProps {
  className?: string;
  service: IServiceApiName;
  serviceInfo?: IServicesInfoListResponseDataItemModel | null;
}

export interface IDefaultFilters {
  keyword: null | string;
  rating: null | string;
}

export interface IServiceFilters {
  filters: {
    keywordFilter?: IKeywordFilter;
    rates?: IRatesFilter;
  };
  query: string;
}
export type IServiceFilter =
  | IKeywordFilter
  | IRatesFilter

export type IDefaultFiltersKey = keyof IDefaultFilters;
