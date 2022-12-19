import UsefulInformationFilterComponent from "./UsefulInformationFilter.component";
import { UsefulInformationFilterData } from "./UsefulInformationFilter.mock";

export default {
  title: "Souvenirs Module/UsefulInformationFilterComponent",
  component: UsefulInformationFilterComponent,
};

export const DefaultUsefulInformationFilterComponent = () => {
  return <UsefulInformationFilterComponent {...UsefulInformationFilterData} />;
};
