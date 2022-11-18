import { ITourListResponseModel } from "../../../../rosha-api/api";
import {
  IServicesMappedData,
} from "../../../comon/services/services-api-gen";
import { IServiceApiName } from "../../../comon/services/IServiceApiName";

export interface CardToursProps {
  className?: string;
  tours: IServicesMappedData[];
  service: IServiceApiName;
}
