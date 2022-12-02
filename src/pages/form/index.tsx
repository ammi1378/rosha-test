import AboutUsMainContentComponent from "../../modules/aboutus/components/AboutUsMainContent/AboutUsMainContent.component";
import FooterComponent from "../../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../../modules/comon/components/Header/Header.component";
import FormComponent from "../../modules/Form/Form.component";


const AbourUs = () => {
  return (
    <>
      <HeaderComponent />
      <main id="rlr-main" className="rlr-main--fixed-top">
        <FormComponent />
      </main>
      <FooterComponent />
    </>
  );
};


export default AbourUs;
