import { IServicesInfoListResponseDataItemModel } from "../../../../rosha-api/IServicesInfoListResponseDataItemModel";
import { IServiceApiName } from "../../../comon/services/IServiceApiName";
import { IKeywordFilter } from "../../common/IKeywordFilter";
import { IRatesFilter } from "../../common/IRatesFilter";
import { ISeasonFilter } from "../../common/ISeasonFilter";
import { ICityFilter } from "../../common/ICityFilter";
import { IRangeFilter } from "../../common/IRangeFilter";
import { IMeetingRoomTypeFilter } from "../../common/IMeetingRoomTypeFilter";
import { IMeetingRoomFilter } from "../../common/IMeetingRoomFilter";

export interface PrivateJetServiceFilterProps {
  className?: string;
  service: IServiceApiName;
  serviceInfo?: IServicesInfoListResponseDataItemModel | null;
}

export interface IPrivateJetFilters {
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

export type IPrivateJetFiltersKey = keyof IPrivateJetFilters;
