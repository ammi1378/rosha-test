import type { NextPage } from "next";
import FooterComponent from "../../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../../modules/comon/components/Header/Header.component";
import SearchResultProductIranVisaComponent from "../../modules/iranvisa/components/SearchResultProductIranVisa/SearchResultProductIranVisa.component";
import BreadcrumbComponent from "../../modules/services/components/Breadcrumb/Breadcrumb.component";
import SearchResultHeadersComponent from "../../modules/services/components/SearchResultHeaders/SearchResultHeaders.component";


const IranVisa: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <main id="rlr-main" className="rlr-main--fixed-top">
      <div className="rlr-search-results-page container">
      <BreadcrumbComponent />
      <SearchResultHeadersComponent />
      <SearchResultProductIranVisaComponent />
      </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default IranVisa;
