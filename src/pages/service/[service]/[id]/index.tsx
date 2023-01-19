import { AxiosError } from "axios";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import FooterComponent from "../../../../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../../../../modules/comon/components/Header/Header.component";
import {
  getServiceApi,
  IServiceDetail,
} from "../../../../modules/comon/services/service-api-gen";
import { ValidApis } from "../../../../modules/comon/services/services-api-gen";
import { IServiceApiName } from "../../../../modules/comon/services/IServiceApiName";
import MediaSliderComponent from "../../../../modules/toursingle/components/MediaSlider/MediaSlider.component";
import ProductDetailSectionComponent from "../../../../modules/toursingle/components/ProductDetailSection/ProductDetailSection.component";
import SimilarProductsComponent from "../../../../modules/toursingle/components/SimilarProducts/SimilarProducts.component";
import ContnetDetailSectionComponent from "../../../../modules/toursingle/components/ContnetDetailSection/ProductDetailSection.component";
import BlogElementComponent from "../../../../modules/blogsingle/components/BlogElement/BlogElement.component";

const toursingle = ({
  service,
  serviceName,
}: {
  service: IServiceDetail | null;
  serviceName: IServiceApiName;
}) => {
  return (
    <>
      <title>
        Rosha travel | {serviceName} - {service?.title}
      </title>
      <HeaderComponent />
      <main id="rlr-main" className="rlr-main--fixed-top">
        <div className="container">
          {serviceName === "iran-visa" ||
          serviceName === "souvenirs" ||
          serviceName === "usefull-information" ? (
            service && (
              <>
                <BlogElementComponent
                  title={service.title}
                  content={service.moreInfo}
                  media={service.gallery}
                />
                {/* <ContnetDetailSectionComponent service={service} /> */}
              </>
            )
          ) : (
            <>
              {service && service.gallery && (
                <MediaSliderComponent media={service.gallery} />
              )}
              {service && <ProductDetailSectionComponent service={service} />}
            </>
          )}
          {/* <SimilarProductsComponent /> */}
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const service = params?.service as IServiceApiName;
  const id = params?.id;
  console.log({
    service,
    id,
  });

  let item: IServiceDetail | null = {};
  if (!id?.length || !service?.length || !ValidApis.includes(service)) {
    return {
      notFound: true,
      props: { service: item },
    };
  }

  try {
    item = await getServiceApi(service, +id);

    return {
      props: { service: item, serviceName: service },
    };
  } catch (e: any) {
    if (e instanceof AxiosError) {
      if (e.response?.status === 404)
        return {
          notFound: true,
          props: { service: item },
        };
    }
  }
};

export default toursingle;
