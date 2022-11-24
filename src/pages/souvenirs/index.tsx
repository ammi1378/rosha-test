import type { NextPage } from "next";
import QuickNavbarComponent from "../../modules/souvenirs/components/QuickNavbar/QuickNavbar.component";
import FooterComponent from "../../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../../modules/comon/components/Header/Header.component";
import SouvenirsDescriptionComponent from "../../modules/souvenirs/components/SouvenirsDescription/SouvenirsDescription.component";
import SouvenirsMainContentComponent from "../../modules/souvenirs/components/SouvenirsMainContent/SouvenirsMainContent.component";
import SouvenirsMainContentFilterComponent from "../../modules/souvenirs/components/SouvenirsMainContentFilter/SouvenirsMainContentFilter.component";

const Souvenirs: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <main id="rlr-main" className="rlr-main--fixed-top">
        <div className="rlr-search-results-page container">
          <QuickNavbarComponent />
          <SouvenirsDescriptionComponent />
          <div className="row rlr-search-results-page__product-details">
            <SouvenirsMainContentFilterComponent />
            <SouvenirsMainContentComponent/>
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default Souvenirs;
