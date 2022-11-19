import {
  IServicesMappedData,
} from "../../../comon/services/services-api-gen";
import { IServiceApiName } from "../../../comon/services/IServiceApiName";

export interface HomeCardItemProps {
  className?: string;
  item: IServicesMappedData;
  isSearchListing?: boolean;
  service: IServiceApiName;
}
