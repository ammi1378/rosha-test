import { ITourListResponseModel } from "../../../../rosha-api/api";
import {
  IServiceApiName,
  IServicesMappedData,
} from "../../../comon/services/services-api-gen";

export interface CardToursProps {
  className?: string;
  tours: IServicesMappedData[];
  service: IServiceApiName;
}
