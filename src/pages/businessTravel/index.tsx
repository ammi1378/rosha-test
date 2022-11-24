import type { NextPage } from "next";
import BusinessTravelCardComponent from "../../modules/businesstravel/components/BusinessTravelCard/BusinessTravelCard.component";
import BusinessTravelFilterComponent from "../../modules/businesstravel/components/BusinessTravelFilter/BusinessTravelFilter.component";
import FooterComponent from "../../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../../modules/comon/components/Header/Header.component";

const UsefulInformaton: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <main id="rlr-main" className="rlr-main--fixed-top">
        <div className="rlr-search-results-page container">
          <div className="row rlr-search-results-page__product-details">
            <BusinessTravelFilterComponent />
            <BusinessTravelCardComponent/>
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default UsefulInformaton;
