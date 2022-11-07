import React from "react";
import PaginationComponent from "../Pagination/Pagination.component";
import ServicesCardItemComponent from "../ServicesCardItem/ServicesCardItem.component";
import { CardServicesProps } from "./CardServices.props";

const cardServicesComponent = "cardServicesComponent";

const hotelsData = [
  {
    title: "Parsian Esteghlal International Hotel",
    images: [
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
      "/NewImages/hotels/esteghlal-hotel-tehran-n-17.jpg",
    ],
    describtion:
      "discribtion : Five star Parsian Esteghlal International Hotel owned",
  },
  {
    title: "ESPINAS PALACE International Hotel",
    images: [
      "/NewImages/hotels/iB8EOFAyqC94qgyNPfua.jpg",
      "/NewImages/hotels/small-photo.jpg",
    ],

    describtion:
      "discribtion : Espinas Palace Hotel is a hotel with a flair htmlFor services.",
  },
  {
    title: "Parsian Esteghlal International Hotel",
    images: [
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
      "/NewImages/hotels/esteghlal-hotel-tehran-n-17.jpg",
    ],
    describtion:
      "discribtion : Five star Parsian Esteghlal International Hotel owned",
  },
  {
    title: "ESPINAS PALACE International Hotel",
    images: [
      "/NewImages/hotels/iB8EOFAyqC94qgyNPfua.jpg",
      "/NewImages/hotels/small-photo.jpg",
    ],

    describtion:
      "discribtion : Espinas Palace Hotel is a hotel with a flair htmlFor services.",
  },
  {
    title: "Parsian Esteghlal International Hotel",
    images: [
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
      "/NewImages/hotels/esteghlal-hotel-tehran-n-17.jpg",
    ],
    describtion:
      "discribtion : Five star Parsian Esteghlal International Hotel owned",
  },
  {
    title: "ESPINAS PALACE International Hotel",
    images: [
      "/NewImages/hotels/iB8EOFAyqC94qgyNPfua.jpg",
      "/NewImages/hotels/small-photo.jpg",
    ],

    describtion:
      "discribtion : Espinas Palace Hotel is a hotel with a flair htmlFor services.",
  },
  {
    title: "Parsian Esteghlal International Hotel",
    images: [
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
      "/NewImages/hotels/esteghlal-hotel-tehran-n-17.jpg",
    ],
    describtion:
      "discribtion : Five star Parsian Esteghlal International Hotel owned",
  },
  {
    title: "ESPINAS PALACE International Hotel",
    images: [
      "/NewImages/hotels/iB8EOFAyqC94qgyNPfua.jpg",
      "/NewImages/hotels/small-photo.jpg",
    ],

    describtion:
      "discribtion : Espinas Palace Hotel is a hotel with a flair htmlFor services.",
  },
  {
    title: "Parsian Esteghlal International Hotel",
    images: [
      "/NewImages/hotels/parsian-esteghlal-internationa.jpg",
      "/NewImages/hotels/esteghlal-hotel-tehran-n-17.jpg",
    ],
    describtion:
      "discribtion : Five star Parsian Esteghlal International Hotel owned",
  },
  {
    title: "ESPINAS PALACE International Hotel",
    images: [
      "/NewImages/hotels/iB8EOFAyqC94qgyNPfua.jpg",
      "/NewImages/hotels/small-photo.jpg",
    ],

    describtion:
      "discribtion : Espinas Palace Hotel is a hotel with a flair htmlFor services.",
  },
];
const CardServicesComponent: React.FC<CardServicesProps> = ({ className }) => {
  return (
    <div
      className={`${cardServicesComponent} ${className} rlr-search-results-page__product-list col-lg-9`}
    >
      <div className="row rlr-search-results-page__card-wrapper">
        {hotelsData.map((hotelItem, index) => {
          return (
            <ServicesCardItemComponent
              title={hotelItem.title}
              images={hotelItem.images}
              describtion={hotelItem.describtion}
              index={index}
            />
          );
        })}
      </div>

      <PaginationComponent />
    </div>
  );
};

export default CardServicesComponent;
