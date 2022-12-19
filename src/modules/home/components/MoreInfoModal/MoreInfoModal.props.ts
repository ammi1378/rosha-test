import { IServiceApiName } from "../../../comon/services/IServiceApiName";
import { IServicesMappedData } from "../../../comon/services/services-api-gen";

export interface MoreInfoModalProps {
  service: IServiceApiName;
  item: IServicesMappedData;
}
