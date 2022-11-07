import { IServicesMappedData } from "../../../comon/services/services-api-gen";

export interface ProductCarouselProps {
  className?: string;
  items: IServicesMappedData[];
  header: string;
  subHeader?: string;
}
