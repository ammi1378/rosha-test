import { AxiosError } from "axios";
import type { GetServerSidePropsContext, NextPage } from "next";
import AboutUsMainContentComponent from "../../modules/aboutus/components/AboutUsMainContent/AboutUsMainContent.component";
import FooterComponent from "../../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../../modules/comon/components/Header/Header.component";
import {
  AboutPageDetailApi,
  IAboutPageDetailListResponseDataItemModel,
} from "../../rosha-api/api";

const AbourUs = ({
  data,
}: {
  data: IAboutPageDetailListResponseDataItemModel | undefined;
}) => {
  return (
    <>
      <HeaderComponent />
      <main id="rlr-main" className="rlr-main--fixed-top">
        <AboutUsMainContentComponent data={data} />
      </main>
      <FooterComponent />
    </>
  );
};

export const getServerSideProps = async ({}: GetServerSidePropsContext) => {
  try {
    const aboutPageDetailApi = new AboutPageDetailApi();
    const data = await aboutPageDetailApi
      .getAboutPageDetail()
      .then((res) => res.data.data);
    return {
      props: { data },
    };
  } catch (e: any) {
    console.log(e);

    if (e instanceof AxiosError) {
      if (e.response?.status === 404)
        return {
          notFound: true,
        };
    }
  }
};
export default AbourUs;
