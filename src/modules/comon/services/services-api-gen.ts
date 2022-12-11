import {
  AirportTransportationServiceApi,
  BusinessTravelApi,
  BusServiceApi,
  CipInternationalAirportServiceApi,
  DailyTourApi,
  FlightServiceApi,
  IranVisaApi,
  ITourListResponseDataItemModel,
  ITourListResponseModel,
  MeetingRoomServiceApi,
  PrivateJetServiceApi,
  RestaurantServiceApi,
  ShoppingServiceApi,
  SouvenirApi,
  TourApi,
  TourGuideServiceApi,
  TrainServiceApi,
  TranslatingInterpretingServiceApi,
  TravelInsuranceServiceApi,
  UseFullInformationApi,
  VipDomesticAirportServiceApi,
} from "../../../rosha-api/api";
import { IServiceApiName } from "./IServiceApiName";

export const getServicesApi = (
  type: IServiceApiName,
  queryString: string
): Promise<IServicesMappedData[] | undefined> => {
  console.log({ type });

  const toursApi = new TourApi();
  if (type === "tour") {
    return toursApi
      .getTours({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "airport") {
    const airportTransportationServiceApi =
      new AirportTransportationServiceApi();

    return airportTransportationServiceApi
      .getAirportTransportationServices({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data as any));
  } else if (type === "business-travel") {
    const businessTravelApi = new BusinessTravelApi();

    return businessTravelApi
      .getBusinessTravels({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "bus") {
    const busServiceApi = new BusServiceApi();

    return busServiceApi
      .getBusServices({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "cip") {
    const cipInternationalAirportServiceApi =
      new CipInternationalAirportServiceApi();

    return cipInternationalAirportServiceApi
      .getCipInternationalAirportServices({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "flight") {
    const flightServiceApi = new FlightServiceApi();

    return flightServiceApi
      .getFlightServices({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "meeting-room") {
    const meetingRoomServiceApi = new MeetingRoomServiceApi();

    return meetingRoomServiceApi
      .getMeetingRoomServices({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "restaurant") {
    const restaurantServiceApi = new RestaurantServiceApi();

    return restaurantServiceApi
      .getRestaurantServices({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "shopping") {
    const shoppingServiceApi = new ShoppingServiceApi();

    return shoppingServiceApi
      .getShoppingServices({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "tour-guid") {
    const tourGuideServiceApi = new TourGuideServiceApi();

    return tourGuideServiceApi
      .getTourGuideServices({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "train") {
    const trainServiceApi = new TrainServiceApi();

    return trainServiceApi
      .getTrainServices({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "private-jet") {
    const privateJetServiceApi = new PrivateJetServiceApi();

    return privateJetServiceApi
      .getPrivateJetServices({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "translate") {
    const translatingInterpretingServiceApi =
      new TranslatingInterpretingServiceApi();

    return translatingInterpretingServiceApi
      .getTranslatingInterpretingServices({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "insurance") {
    const travelInsuranceServiceApi = new TravelInsuranceServiceApi();

    return travelInsuranceServiceApi
      .getTravelInsuranceServices({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "daily-tour") {
    const dailyTourApi = new DailyTourApi();

    return dailyTourApi
      .getDailyTours({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "vip-domestic") {
    const vipDomesticAirportServiceApi = new VipDomesticAirportServiceApi();

    return vipDomesticAirportServiceApi
      .getVipDomesticAirportServices({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "iran-visa") {
    const iranVisaApi = new IranVisaApi();

    return iranVisaApi
      .getIranVisas({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "souvenirs") {
    const souvenirApi = new SouvenirApi();

    return souvenirApi
      .getSouvenirs({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  } else if (type === "usefull-information") {
    const useFullInformationApi = new UseFullInformationApi();

    return useFullInformationApi
      .getUseFullInformations({}, { params: queryString })
      .then((res) => servicesDataMapper(res.data));
  }

  return toursApi
    .getTours({}, { params: queryString })
    .then((res) => servicesDataMapper(res.data));
};

export const servicesDataMapper = (
  data: ITourListResponseModel
): IServicesMappedData[] | undefined => {
  return data.data?.map((item) => serviceItemMapper(item));
};

const serviceItemMapper = (item: any): IServicesMappedData => {
  return {
    id: item.id,
    title: item.attributes?.Name,
    images: item.attributes?.Card?.CardImage?.data?.map((img: any) => {
      return {
        url: img.attributes?.url,
        alt: img.attributes?.alternativeText,
        id: img.id,
      };
    }),
    description: item.attributes?.Card?.CardDescription,
    star: item.attributes?.Card?.CardStar,
    season: item.attributes?.Card?.CardSeason,

    city: item.attributes?.Cities?.CityName,
    duration: item.attributes?.Duration || 1,
    features: item.attributes?.Services?.map((service: any) => service.Service),
    moreInfo: item.attributes?.MoreInfo as string,
  };
};

export interface IServicesMappedData {
  features?: (string | undefined)[];
  star?: number;
  duration?: number;
  city?: string;
  description?: string;
  images?: { url?: string; alt?: string; id?: number }[];
  id?: number;
  title?: string;
  featured?: boolean;
  season?: string;
  moreInfo?: string;
}

export const ValidApis: Array<IServiceApiName> = [
  "tour",
  "airport",
  "business-travel",
  "bus",
  "cip",
  "daily-tour",
  "flight",
  "meeting-room",
  "private-jet",
  "restaurant",
  "shopping",
  "tour-guid",
  "train",
  "translate",
  "insurance",
  "hotel",
  "vip-domestic",
  "iran-visa",
  "souvenirs",
  "usefull-information",
];
