import { AxiosError } from "axios";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import FooterComponent from "../../../modules/comon/components/Footer/Footer.component";
import HeaderComponent from "../../../modules/comon/components/Header/Header.component";
import {
  getServicesApi,
  IServiceApiName,
  IServicesMappedData,
  ValidApis,
} from "../../../modules/comon/services/services-api-gen";
import CardIranvisaComponent from "../../../modules/iranvisa/components/CardIranvisa/CardIranvisa.component";
import BreadcrumbComponent from "../../../modules/services/components/Breadcrumb/Breadcrumb.component";
import SearchResultHeadersComponent from "../../../modules/services/components/SearchResultHeaders/SearchResultHeaders.component";
import ServiceFilterContainerComponent from "../../../modules/services/components/ServiceFilterContainer/ServiceFilterContainer.component";
import TourServiceFilterComponent from "../../../modules/services/components/TourServiceFilter/TourServiceFilter.component";
import CardToursComponent from "../../../modules/Tours/components/CardTours/CardTours.component";
import {
  IServicesInfoListResponseDataItemModel,
  ServicesInfoApi,
} from "../../../rosha-api/api";

const ToursPage = ({
  items,
  service,
  serviceInfo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  debugger
  const GetFilterComponent = () => {
    return (
      <TourServiceFilterComponent service={service} serviceInfo={serviceInfo} />
    );
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
  console.log({ foundedInfo });

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
