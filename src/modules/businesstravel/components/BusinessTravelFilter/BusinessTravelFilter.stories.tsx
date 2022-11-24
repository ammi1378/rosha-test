import BusinessTravelFilterComponent from "./BusinessTravelFilter.component";
import { BusinessTravelFilterData } from "./BusinessTravelFilter.mock";

export default {
  title: "Souvenirs Module/BusinessTravelFilterComponent",
  component: BusinessTravelFilterComponent,
};

export const DefaultBusinessTravelFilterComponent = () => {
  return <BusinessTravelFilterComponent {...BusinessTravelFilterData} />;
};
