import SouvenirsMainContentFilterComponent from "./SouvenirsMainContentFilter.component";
import { SouvenirsMainContentFilterData } from "./SouvenirsMainContentFilter.mock";

export default {
  title: "Souvenirs Module/SouvenirsMainContentFilterComponent",
  component: SouvenirsMainContentFilterComponent,
};

export const DefaultSouvenirsMainContentFilterComponent = () => {
  return <SouvenirsMainContentFilterComponent {...SouvenirsMainContentFilterData} />;
};
