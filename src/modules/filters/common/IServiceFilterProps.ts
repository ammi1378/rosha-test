import { IServicesInfoListResponseDataItemModel } from "../../../rosha-api/IServicesInfoListResponseDataItemModel";
import { IServiceApiName } from "../../comon/services/IServiceApiName";


export interface IServiceFilterProps {
  className?: string;
  service: IServiceApiName;
  serviceInfo?: IServicesInfoListResponseDataItemModel | null;
}
