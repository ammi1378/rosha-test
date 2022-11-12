import {
  IServiceApiName,
  IServicesMappedData,
} from "../../../comon/services/services-api-gen";

export interface HomeCardItemProps {
  className?: string;
  item: IServicesMappedData;
  isSearchListing?: boolean;
  service: IServiceApiName;
}
