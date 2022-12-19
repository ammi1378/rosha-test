import { IServicesInfoListResponseDataItemModel } from "../../../../rosha-api/IServicesInfoListResponseDataItemModel";
import { IServiceApiName } from "../../../comon/services/IServiceApiName";
import { IKeywordFilter } from "../../common/IKeywordFilter";
import { IRatesFilter } from "../../common/IRatesFilter";
import { ISeasonFilter } from "../../common/ISeasonFilter";
import { ICityFilter } from "../../common/ICityFilter";
import { ICategoryFilter } from "../../common/ICategoryFilter";
import { IRangeDayFilter } from "../../common/IRangeDayFilter";

export interface ResturantServiceFilterProps {
  className?: string;
  service: IServiceApiName;
  serviceInfo?: IServicesInfoListResponseDataItemModel | null;
}

export interface IResturantFilters {
  keyword: null | string;
  rating: null | string;
  city: null | string;
  foods: null | string;
}

export interface IServiceFilters {
  filters: {
    keywordFilter?: IKeywordFilter;
    rates?: IRatesFilter;
    foods?: ISeasonFilter;
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

export type IResturantFiltersKey = keyof IResturantFilters;
