import { SouvenirsDescriptionData } from "./SouvenirsDescription.mock";
import SouvenirsDescriptionComponent from './SouvenirsDescription.component';

export default {
  title: "Souvenirs Module/SouvenirsDescriptionComponent",
  component: SouvenirsDescriptionComponent,
};

export const DefaultSouvenirsDescriptionComponent = () => {
  return <SouvenirsDescriptionComponent {...SouvenirsDescriptionData} />;
};
