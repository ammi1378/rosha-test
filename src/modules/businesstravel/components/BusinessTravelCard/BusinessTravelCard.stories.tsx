import BusinessTravelCardComponent from "./BusinessTravelCard.component";
import { BusinessTravelCardData } from "./BusinessTravelCard.stories";

export default {
  title: "Tours Module/BusinessTravelCardComponent",
  component: BusinessTravelCardComponent,
};

export const DefaultBusinessTravelCardComponent = () => {
  return <BusinessTravelCardComponent {...BusinessTravelCardData} />;
};
