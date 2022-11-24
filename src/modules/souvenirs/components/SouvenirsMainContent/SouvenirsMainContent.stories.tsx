import SouvenirsMainContentComponent from "./SouvenirsMainContent.component";
import { SouvenirsMainContentData } from "./SouvenirsMainContent.mock";

export default {
  title: "Souvenirs Module/SouvenirsMainContentComponent",
  component: SouvenirsMainContentComponent,
};

export const DefaultSouvenirsMainContentComponent = () => {
  return <SouvenirsMainContentComponent {...SouvenirsMainContentData} />;
};
