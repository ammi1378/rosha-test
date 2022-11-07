import type { NextPage } from "next";
import AboutUsMainContentComponent from "../../modules/aboutus/components/AboutUsMainContent/AboutUsMainContent.component";
import FooterComponent from "../../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../../modules/comon/components/Header/Header.component";

const AbourUs: NextPage = () => {
  return (
    <>
      <HeaderComponent /> 
      <main id="rlr-main" className="rlr-main--fixed-top">
        <AboutUsMainContentComponent />
      </main>
      <FooterComponent />
    </>
  );
};

export default AbourUs ;
