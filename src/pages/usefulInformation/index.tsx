import type { NextPage } from "next";
import FooterComponent from "../../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../../modules/comon/components/Header/Header.component";
import UsefulInformationCardComponent from "../../modules/usefulinformation/components/UsefulInformationCard/UsefulInformationCard.component";
import UsefulInformationFilterComponent from "../../modules/usefulinformation/components/UsefulInformationFilter/UsefulInformationFilter.component";

const UsefulInformaton: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <main id="rlr-main" className="rlr-main--fixed-top">
        <div className="rlr-search-results-page container">
          <div className="row rlr-search-results-page__product-details">
            <UsefulInformationFilterComponent />
            <UsefulInformationCardComponent />
          </div>
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default UsefulInformaton;
