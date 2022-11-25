import { AxiosError } from "axios";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import FooterComponent from "../../../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../../../modules/comon/components/Header/Header.component";
import {
  getServicesApi,
  IServicesMappedData,
  ValidApis,
} from "../../../modules/comon/services/services-api-gen";
import { IServiceApiName } from "../../../modules/comon/services/IServiceApiName";
import CardIranvisaComponent from "../../../modules/iranvisa/components/CardIranvisa/CardIranvisa.component";
import SearchResultHeadersComponent from "../../../modules/services/components/SearchResultHeaders/SearchResultHeaders.component";
import ServiceFilterContainerComponent from "../../../modules/services/components/ServiceFilterContainer/ServiceFilterContainer.component";
import TourServiceFilterComponent from "../../../modules/filters/components/TourServiceFilter/TourServiceFilter.component";
import CardToursComponent from "../../../modules/Tours/components/CardTours/CardTours.component";
import {
  ServicesInfoApi,
} from "../../../rosha-api/api";
import { IServicesInfoListResponseDataItemModel } from "../../../rosha-api/IServicesInfoListResponseDataItemModel";
import HotelServiceFilterComponent from "../../../modules/filters/components/HotelServiceFilter/HotelServiceFilter.component";
import DailyTourServiceFilterComponent from "../../../modules/filters/components/DailyTourServiceFilter/DailyTourServiceFilter.component";
import PrivateJetServiceFilterComponent from "../../../modules/filters/components/PrivateJetServiceFilter/PrivateJetServiceFilter.component";
import ResturantServiceFilterComponent from "../../../modules/filters/components/ResturantServiceFilter/ResturantServiceFilter.component";
import DefaultServiceFilterComponent from "../../../modules/filters/components/DefaultServiceFilter/DefaultServiceFilter.component";
import TranslateServiceFilterComponent from "../../../modules/filters/components/TranslateServiceFilter/TranslateServiceFilter.component";
import VipServiceFilterComponent from "../../../modules/filters/components/VipServiceFilter/VipServiceFilter.component";
import CipServiceFilterComponent from "../../../modules/filters/components/CipServiceFilter/CipServiceFilter.component";
import AirportTransportServiceFilterComponent from "../../../modules/filters/components/AirportTransportServiceFilter/AirportTransportServiceFilter.component";
import BusportTransportServiceFilterComponent from "../../../modules/filters/components/BusportTransportServiceFilter/BusportTransportServiceFilter.component";


const ToursPage = ({
  items,
  service,
  serviceInfo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const GetFilterComponent = () => {
    switch (service) {
      case "tour":
        return (<TourServiceFilterComponent service={service} serviceInfo={serviceInfo} />);
      case "daily-tour":
        return (<DailyTourServiceFilterComponent service={service} serviceInfo={serviceInfo} />);
      case "hotel":
        return (<HotelServiceFilterComponent service={service} serviceInfo={serviceInfo} />);
      case "private-jet":
        return (<PrivateJetServiceFilterComponent service={service} serviceInfo={serviceInfo} />);
      case "restaurant":
        return (<ResturantServiceFilterComponent service={service} serviceInfo={serviceInfo} />);
      case "translate":
        return (<TranslateServiceFilterComponent service={service} serviceInfo={serviceInfo} />);
      case "vip-domestic":
        return (<VipServiceFilterComponent service={service} serviceInfo={serviceInfo} />);
      case "cip":
        return (<CipServiceFilterComponent service={service} serviceInfo={serviceInfo} />);
      case "airport":
        return (<AirportTransportServiceFilterComponent service={service} serviceInfo={serviceInfo} />);
      case "bus":
        return (<BusportTransportServiceFilterComponent service={service} serviceInfo={serviceInfo} />);
      default:
        return (<DefaultServiceFilterComponent service={service} serviceInfo={serviceInfo} />);
    }
  };
  return (
    <>
      <HeaderComponent />
      <main id="rlr-main" className="rlr-main--fixed-top">
        <div className="rlr-search-results-page container">
          {/* <BreadcrumbComponent /> */}
          {serviceInfo && (
            <SearchResultHeadersComponent serviceInfo={serviceInfo} />
          )}
          <ServiceFilterContainerComponent
            FilterSidedBar={GetFilterComponent()}
          >
            {items && items.length ? (
              service === "iran-visa" ? (
                <CardIranvisaComponent items={items} />
              ) : (
                <CardToursComponent service={service} tours={items} />
              )
            ) : (
              <>No item to show!</>
            )}
          </ServiceFilterContainerComponent>
        </div>
      </main>
      <FooterComponent />
    </>
  );
};

export const getServerSideProps = async ({
  query,
  params,
}: GetServerSidePropsContext) => {
  let queryString = "";
  let infoQueryString = "";
  const service = params?.service as IServiceApiName;
  let serviceInfo: IServicesInfoListResponseDataItemModel | null = {};
  if (query) {
    Object.keys(query).map((key, index) => {
      if (key !== "service") {
        queryString += `${index === 0 ? "" : "&"}${key}=${query[key]}`;
      }
      if (key === "service") {
        infoQueryString += `filters[Service][$eq]=${service}`;
      }
    });
  }

  console.log({ query });

  let items: IServicesMappedData[] | undefined;

  if (!ValidApis.includes(service)) {
    return {
      notFound: true,
      props: { items, service, serviceInfo },
    };
  }

  const servicesInfoApi = new ServicesInfoApi();

  const foundedInfo = await servicesInfoApi
    .getServicesInfos({}, { params: infoQueryString })
    .then((res) => (res.data?.data?.length ? res.data.data[0] : null));

  try {
    items = await getServicesApi(service, queryString);
  } catch (e: any) {
    if (e instanceof AxiosError) {
      if (e.response?.status === 404)
        return {
          notFound: true,
          props: { items, service, serviceInfo },
        };
    }
  }
  return {
    props: { items, service, serviceInfo: foundedInfo },
  };
};

export default ToursPage;