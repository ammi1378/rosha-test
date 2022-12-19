import { IServicesInfoListResponseDataItemModel } from "../../../../rosha-api/IServicesInfoListResponseDataItemModel";
import { IServiceApiName } from "../../../comon/services/IServiceApiName";
import { IKeywordFilter } from "../../common/IKeywordFilter";
import { IRatesFilter } from "../../common/IRatesFilter";
import { ISeasonFilter } from "../../common/ISeasonFilter";
import { ICityFilter } from "../../common/ICityFilter";
import { ICategoryFilter } from "../../common/ICategoryFilter";
import { IRangeDayFilter } from "../../common/IRangeDayFilter";
import { IGenderFilter } from "../../common/IGenderFilter";
import { ILanguageFilter } from "../../common/ILanguageFilter";

export interface TranslateServiceFilterProps {
  className?: string;
  service: IServiceApiName;
  serviceInfo?: IServicesInfoListResponseDataItemModel | null;
}

export interface ITranslateFilters {
  keyword: null | string;
  rating: null | string;
  translatorGender: null | string;
  languages: null | string;
}

export interface IServiceFilters {
  filters: {
    keywordFilter?: IKeywordFilter;
    rates?: IRatesFilter;
    translatorGender?: IGenderFilter;
    languages?: ILanguageFilter;
  };
  query: string;
}
export type IServiceFilter =
  | IKeywordFilter
  | IRatesFilter
  | ILanguageFilter
  | IGenderFilter;

export type ITranslateFiltersKey = keyof ITranslateFilters;
