import { IServicesMappedData } from "../../../comon/services/services-api-gen";

export interface CardIranvisaProps {
  className?: string;
  service?: "iran-visa" | "souvenirs" | "usefull-information";
  items: IServicesMappedData[];
}
