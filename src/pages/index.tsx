import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

import FooterComponent from "../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../modules/comon/components/Header/Header.component";
import { servicesDataMapper } from "../modules/comon/services/services-api-gen";
// import {  } from "../modules/comon/util/strapi-query";
import CategoryCarouselComponent from "../modules/home/components/CategoryCarousel/CategoryCarousel.component";
import HeroBannerComponent from "../modules/home/components/HeroBanner/HeroBanner.component";
import ProductCarouselComponent from "../modules/home/components/ProductCarousel/ProductCarousel.component";
import VideoBlockComponent from "../modules/home/components/VideoBlock/VideoBlock.component";
import {
  HomePageDetailApi,
  IAboutAboutCardsComponentImageDataModel,
  IHomePageDetailListResponseDataItemModel,
  TourApi,
} from "../rosha-api/api";
import Head from "next/head";
import LogoCarouselComponent from "../modules/home/components/LogoCarousel/LogoCarousel.component";
import ExhibitionListComponent from "../modules/home/components/ExhibitionList/ExhibitionList.component";
import SalesAndSupportComponent from "../modules/home/components/SalesAndSupport/SalesAndSupport.component";

const Home = ({
  newTours,
  bestSellingTours,
  homePageDtails,
}: InferGetServerSidePropsType<typeof getServerSideProps> & {
  homePageDtails: any;
}) => {
  return (
    <>
      <Head>
        <title>Rosha travel</title>
      </Head>
      <HeaderComponent />
      <main id="rlr-main" className="rlr-main--fixed-top">
        {/* <!-- Hero Banner --> */}
        {homePageDtails && (
          <HeroBannerComponent
            homePageDtails={
              homePageDtails as IHomePageDetailListResponseDataItemModel
            }
          />
        )}
        {/* <!-- Product Carousel --> */}
        {newTours.tours && (
          <ProductCarouselComponent
            header={newTours.header}
            subHeader={newTours.subHeader}
            items={newTours.tours}
          />
        )}
        {bestSellingTours.tours && (
          <ProductCarouselComponent
            header={bestSellingTours.header}
            subHeader={bestSellingTours.subHeader}
            items={bestSellingTours.tours}
          />
        )}
        <CategoryCarouselComponent />
        {/* <ExhibitionListComponent /> */}
        <LogoCarouselComponent
          images={
            homePageDtails.attributes.TrustedByPicture
              .data as IAboutAboutCardsComponentImageDataModel[]
          }
        />
        <VideoBlockComponent
          video={
            homePageDtails.attributes
              .IntroduceVideo?.data as IAboutAboutCardsComponentImageDataModel
          }
        />
        <SalesAndSupportComponent />
      </main>
      <FooterComponent />
    </>
  );
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const toursApi = new TourApi();
  const newTours = await toursApi
    .getTours({ sort: "publishedAt:desc" })
    .then((res) => servicesDataMapper(res.data));
  const newToursData = {
    header: "New Tours",
    subHeader: "Most Brilliant reasons Emprise should be your one-stop-shop!",
    tours: newTours,
  };

  const bestSellingTours = await toursApi
    .getTours({}, { params: "filters[TopSelling][$eq]=true" })
    .then((res) => servicesDataMapper(res.data));

  const bestSellingToursData = {
    header: "Best Selling Tours",
    subHeader: "Most Brilliant reasons Emprise should be your one-stop-shop!",
    tours: bestSellingTours,
  };

  const homePageDetailApi = new HomePageDetailApi();
  const homePageDtails = await homePageDetailApi
    .getHomePageDetail()
    .then((res) => res.data.data);
  return {
    props: {
      newTours: newToursData,
      bestSellingTours: bestSellingToursData,
      homePageDtails,
    },
  };
};

export default Home;
