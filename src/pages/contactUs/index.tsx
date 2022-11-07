import type { NextPage } from "next";
import FooterComponent from "../../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../../modules/comon/components/Header/Header.component";
import ContactUsMainContactComponent from "../../modules/contactus/components/ContactUsMainContact/ContactUsMainContact.component";



const ContactUs: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <main id="rlr-main" className="rlr-main--fixed-top">
      <ContactUsMainContactComponent />
      </main>
      <FooterComponent />
    </>
  );
};

export default ContactUs;
