import type { NextPage } from "next";
import BlogElementComponent from "../../modules/blogsingle/components/BlogElement/BlogElement.component";
import NewsletterSobscriptionSingleblogComponent from "../../modules/blogsingle/components/NewsletterSobscriptionSingleblog/NewsletterSobscriptionSingleblog.component";
import FooterComponent from "../../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../../modules/comon/components/Header/Header.component";


const Blogsingle: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <main id="rlr-main" className="rlr-main--fixed-top">
        <div className="container-xxl">
          <BlogElementComponent />
          <NewsletterSobscriptionSingleblogComponent />
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default Blogsingle;
