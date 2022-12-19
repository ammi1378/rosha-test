import { IServicesInfoListResponseDataItemModel } from "../../../../rosha-api/IServicesInfoListResponseDataItemModel";
import { IServiceApiName } from "../../../comon/services/IServiceApiName";

export interface FormBookingProps {
  className?: string;
  onSubmit: (data: any) => void;
  status: "fail" | "success" | null;
  service: string;
  serviceInfo: IServicesInfoListResponseDataItemModel | null;
  serviceName: IServiceApiName;
}
