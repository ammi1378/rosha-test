import { IServicesInfoListResponseDataItemModel } from "../../../../rosha-api/api";

export interface FormBookingProps {
  className?: string;
  onSubmit: (data: any) => void;
  status: "fail" | "success" | null;
  service: string;
  serviceInfo: IServicesInfoListResponseDataItemModel | null;
}
