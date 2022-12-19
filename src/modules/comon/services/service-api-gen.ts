import {
  AirportTransportationServiceApi,
  BusinessTravelApi,
  BusServiceApi,
  CipInternationalAirportServiceApi,
  DailyTourApi,
  FlightServiceApi,
  HotelServiceApi,
  IIranVisaResponseDataObjectModel,
  IranVisaApi,
  ITourResponseDataObjectModel,
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

export const getServiceApi = (
  type: IServiceApiName,
  id: number
): Promise<IServiceDetail | null> => {
  const toursApi = new TourApi();
  if (type === "tour") {
    return toursApi
      .getToursId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "airport") {
    const airportTransportationServiceApi =
      new AirportTransportationServiceApi();

    return airportTransportationServiceApi
      .getAirportTransportationServicesId({ id })
      .then((res) => serviceDataMapper(res.data.data as any));
  } else if (type === "business-travel") {
    const businessTravelApi = new BusinessTravelApi();

    return businessTravelApi
      .getBusinessTravelsId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "bus") {
    const busServiceApi = new BusServiceApi();

    return busServiceApi
      .getBusServicesId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "cip") {
    const cipInternationalAirportServiceApi =
      new CipInternationalAirportServiceApi();

    return cipInternationalAirportServiceApi
      .getCipInternationalAirportServicesId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "flight") {
    const flightServiceApi = new FlightServiceApi();

    return flightServiceApi
      .getFlightServicesId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "meeting-room") {
    const meetingRoomServiceApi = new MeetingRoomServiceApi();

    return meetingRoomServiceApi
      .getMeetingRoomServicesId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "restaurant") {
    const restaurantServiceApi = new RestaurantServiceApi();

    return restaurantServiceApi
      .getRestaurantServicesId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "shopping") {
    const shoppingServiceApi = new ShoppingServiceApi();

    return shoppingServiceApi
      .getShoppingServicesId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "tour-guid") {
    const tourGuideServiceApi = new TourGuideServiceApi();

    return tourGuideServiceApi
      .getTourGuideServicesId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "train") {
    const trainServiceApi = new TrainServiceApi();

    return trainServiceApi
      .getTrainServicesId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "private-jet") {
    const privateJetServiceApi = new PrivateJetServiceApi();

    return privateJetServiceApi
      .getPrivateJetServicesId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "translate") {
    const translatingInterpretingServiceApi =
      new TranslatingInterpretingServiceApi();

    return translatingInterpretingServiceApi
      .getTranslatingInterpretingServicesId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "insurance") {
    const travelInsuranceServiceApi = new TravelInsuranceServiceApi();

    return travelInsuranceServiceApi
      .getTravelInsuranceServicesId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "daily-tour") {
    const dailyTourApi = new DailyTourApi();

    return dailyTourApi
      .getDailyToursId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "hotel") {
    const hotelServiceApi = new HotelServiceApi();

    return hotelServiceApi
      .getHotelServicesId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "vip-domestic") {
    const vipDomesticAirportServiceApi = new VipDomesticAirportServiceApi();

    return vipDomesticAirportServiceApi
      .getVipDomesticAirportServicesId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "iran-visa") {
    const iranVisaApi = new IranVisaApi();

    return iranVisaApi
      .getIranVisasId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "souvenirs") {
    const souvenirApi = new SouvenirApi();

    return souvenirApi
      .getSouvenirsId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  } else if (type === "usefull-information") {
    const useFullInformationApi = new UseFullInformationApi();

    return useFullInformationApi
      .getUseFullInformationsId({ id })
      .then((res) => serviceDataMapper(res.data.data));
  }
  return toursApi
    .getToursId({ id })
    .then((res) => serviceDataMapper(res.data.data));
};

export const serviceDataMapper = (
  item: any | undefined
): IServiceDetail | null => {
  if (!item) return null;

  const image =
    item.attributes?.Gallery?.data || item.attributes?.Card?.CardImage?.data;
  return {
    id: item.id,
    title: item.attributes?.Name,
    stars: item.attributes?.Card?.CardStar,

    gallery: image?.map((image: any) => {
      return {
        alt: image.attributes?.alternativeText,
        url: image.attributes?.url,
        id: image.id,
      };
    }),
    sections: sectionGenerator(item),
    moreInfo: item.attributes?.MoreInfo as string,
  };
};

const sectionGenerator = (
  item: ITourResponseDataObjectModel
): IServiceSections => {
  const sections: IServiceSections = [];

  if (item.attributes?.Overview?.OverviewDescription) {
    sections.push({
      type: "overview",
      title: "overview",
      data: {
        text: item.attributes?.Overview?.OverviewDescription,
        serviceIcons: serviceIconsGenerator(item),
      },
    });
  }
  if (item?.attributes?.Services?.length) {
    sections.push({
      type: "service",
      title: "service",
      data: {
        text: item.attributes?.Overview?.OverviewDescription,
        services: item?.attributes?.Services?.map(
          (service) => service.Service || ""
        ),
      },
    });
  }
  if (item?.attributes?.Itinerary?.length) {
    sections.push({
      type: "media-expansion",
      title: "Itinerary",
      data: {
        mediaItems: item?.attributes?.Itinerary?.map((itenary) => {
          return {
            title: itenary.Day,
            description: itenary.ExcursionNote,
            images:
              itenary.Picture?.data?.map((img) => {
                return {
                  url: img.attributes?.url,
                  alt: img.attributes?.alternativeText,
                };
              }) || [],
          };
        }),
      },
    });
  }
  if (item?.attributes?.Reviews?.length) {
    sections.push({
      type: "comments",
      title: "comments",
      data: {
        comments: item?.attributes?.Reviews?.map((review) => {
          return {
            comment: review.DescriptionReviewer,
            name: review.NameReviewer,
            star: review.StarsReviewer,
            title: review.Title,
            avatar: review.PictureReviewer?.data?.attributes?.url || null,
          };
        }),
      },
    });
  }
  if (item?.attributes?.HighlightAttraction?.Description?.length) {
    sections.push({
      type: "attractions",
      title: "attractions",
      data: {
        description: item?.attributes?.HighlightAttraction?.Description,
        text: item?.attributes?.HighlightAttraction?.Title,
      },
    });
  }
  if (item.attributes?.FAQ?.length) {
    sections.push({
      type: "faq",
      title: "FAQ",
      data: {
        questions: item.attributes?.FAQ?.map((item) => {
          return {
            question: item.Question,
            answer: item.Respose,
          };
        }),
      },
    });
  }

  return sections;
};

const serviceIconsGenerator = (item: any): IOverviewServiceIcons[] => {
  const icons: IOverviewServiceIcons[] = [];
  if (item?.attributes?.Duration) {
    icons.push({
      icon: "flaticon-three-o-clock-clock",
      title: "Duration",
      value: item?.attributes?.Duration,
    });
  }
  if (item?.attributes?.Type) {
    icons.push({
      icon: "flaticon-beach",
      title: "Type",
      value: item?.attributes?.Type,
    });
  }
  if (item?.attributes?.Season) {
    icons.push({
      icon: "flaticon-beach",
      title: "Season",
      value: item?.attributes?.Season,
    });
  }
  if (item?.attributes?.StartTime) {
    icons.push({
      icon: "flaticon-three-o-clock-clock",
      title: "Start Time",
      value: item?.attributes?.StartTime,
    });
  }
  if (item?.attributes?.EndTime) {
    icons.push({
      icon: "flaticon-three-o-clock-clock",
      title: "End Time",
      value: item?.attributes?.EndTime,
    });
  }
  if (item?.attributes?.Destinations) {
    icons.push({
      icon: "flaticon-map-marker",
      title: "Destinations",
      value: item?.attributes?.Destinations,
    });
  }
  if (item?.attributes?.Cities?.CityName) {
    icons.push({
      icon: "flaticon-map-marker",
      title: "City",
      value: item?.attributes?.Cities?.CityName,
    });
  }
  if (item?.attributes?.Destination) {
    icons.push({
      icon: "flaticon-map-marker",
      title: "Destination",
      value: item?.attributes?.Destination,
    });
  }
  if (item?.attributes?.Origin) {
    icons.push({
      icon: "flaticon-map-marker",
      title: "Origin",
      value: item?.attributes?.Origin,
    });
  }

  return icons;
};

export interface IServiceDetail {
  id?: number;
  title?: string;
  stars?: number;
  sections?: IServiceSections;
  gallery?: { url?: string; alt?: string; id?: number }[];
  moreInfo?: string;
}

export type IServiceSections = Array<
  IOverView | IService | IMediaExpansion | IComments | IAttractions | IFAQ
>;
//  | IItinerary  | IAttractions | IComments

export type IServiceSectionsKeys = "overview";

interface IOverView {
  type: "overview";
  title: string;
  data: {
    text?: string;
    serviceIcons: IOverviewServiceIcons[];
  };
}

interface IOverviewServiceIcons {
  title: string;
  value?: string | number;
  icon: string;
}

interface IService {
  type: "service";
  title: string;
  data: {
    text?: string;
    services?: string[];
  };
}

interface IMediaExpansion {
  type: "media-expansion";
  title: string;
  data: {
    mediaItems?: {
      title: number | undefined;
      description: string | undefined;
      images: { url?: string; alt?: string }[];
    }[];
  };
}

interface IComments {
  type: "comments";
  title: string;
  data: {
    comments?: {
      name?: string;
      star?: number;
      comment?: string;
      title?: string;
      avatar?: string | null;
    }[];
  };
}
interface IAttractions {
  type: "attractions";
  title: string;
  data: {
    text?: string;
    description?: string;
  };
}
interface IFAQ {
  type: "faq";
  title: string;
  data: {
    questions?: { question?: string; answer?: string }[];
  };
}
