import QuickNavbarComponent from "./QuickNavbar.component";
import { OuickNavbarData } from "./QuickNavbar.mock";

export default {
  title: "Souvenirs Module/QuickNavbarComponent",
  component: QuickNavbarComponent,
};

export const DefaultQuickNavbarComponent = () => {
  return <QuickNavbarComponent {...OuickNavbarData} />;
};
