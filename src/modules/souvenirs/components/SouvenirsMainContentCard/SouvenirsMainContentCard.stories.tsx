import SouvenirsMainContentCardComponent from "./SouvenirsMainContentCard.component";
import { SouvenirsMainContentCardData } from "./SouvenirsMainContentCard.mock";

export default {
  title: "Souvenirs Module/SouvenirsMainContentCardComponent",
  component: SouvenirsMainContentCardComponent,
};

export const DefaultSouvenirsMainContentCardComponent = () => {
  return <SouvenirsMainContentCardComponent {...SouvenirsMainContentCardData} />;
};
