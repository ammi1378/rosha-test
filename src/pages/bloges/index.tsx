import type { NextPage } from "next";
import AsidBlogesComponent from "../../modules/blogList/components/AsidBloges/AsidBloges.component";
import BloglistComponent from "../../modules/blogList/components/Bloglist/Bloglist.component";
import FooterComponent from "../../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../../modules/comon/components/Header/Header.component";


const BlogList: NextPage = () => {
  return (
    <>
      <HeaderComponent />
      <main id="rlr-main" className="rlr-main--fixed-top">
        <div className="container">
          <BloglistComponent />
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export default BlogList;
