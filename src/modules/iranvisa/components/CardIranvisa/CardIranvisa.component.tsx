import React from "react";
import IranVisaCardItemComponent from "../IranVisaCardItem/IranVisaCardItem.component";
import { CardIranvisaProps } from "./CardIranvisa.props";

const cardIranvisaComponent = "cardIranvisaComponent";

const questiontitleData = [
  {
    questiontitle: "What You Shoud Know before Applying?",
  },
];

const iranVisaCardData = [
  {
    image: ["./NewImages/new-traveler-booking-journey-sojern.webp"],

    title: "Passport Expiration",
    describtion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam itaque voluptate cumque soluta, fuga fugiat eos excepturi, sit qui, cum ducimus recusandae. Minima cupiditate perspiciatis deleniti tenetur ducimus, nesciunt iste. Solutadolorum reiciendis cum earum asperiores nam pariatur tempore sequi excepturi eius et similique illo error, provident accusamus illum harum enim impedit natus dolore architecto.Quam earum harum obcaecati porro? Quod sequi, voluptate cupiditate vero utassumenda odit fuga expedita tempora iure minus! Omnis veritatis provident fugit esse explicabo ut cupiditate possimus? Dicta eligendi assumenda, harum non ipsa sunt asperiores?",
  },
  {
    image: ["./NewImages/new-traveler-booking-journey-sojern.webp"],
    title: "",
    describtion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam itaque voluptate cumque soluta, fuga fugiat eos excepturi, sit qui, cum ducimus recusandae. Minima cupiditate perspiciatis deleniti tenetur ducimus, nesciunt iste. Solutadolorum reiciendis cum earum asperiores nam pariatur tempore sequi excepturi eius et similique illo error, provident accusamus illum harum enim impedit natus dolore architecto.Quam earum harum obcaecati porro? Quod sequi, voluptate cupiditate vero utassumenda odit fuga expedita tempora iure minus! Omnis veritatis provident fugit esse explicabo ut cupiditate possimus? Dicta eligendi assumenda, harum non ipsa sunt asperiores?",
  },
];
const CardIranvisaComponent: React.FC<CardIranvisaProps> = ({
  className,
  items,
}) => {
  return (
    <div
      className={`${cardIranvisaComponent} ${className} rlr-search-results-page__product-list col-lg-9`}
    >
      <div>
        <div
          className=" rlr-secondary-menu-desc"
          data-id="rlr-product-sec-overview"
        >
          <div className="rlr-secondary-menu-desc__details">
            {/* {iranVisaCardData.map((iranVisaCardItem) => {
              return (
                <IranVisaCardItemComponent
                  image={iranVisaCardItem.image}
                  title={iranVisaCardItem.title}
                  describtion={iranVisaCardItem.describtion}
                />
              );
            })} */}
            {items.map((iranVisaCardItem) => {
              return (
                <IranVisaCardItemComponent
                  image={iranVisaCardItem.images?.at(0)?.url}
                  title={iranVisaCardItem.title}
                  describtion={iranVisaCardItem.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIranvisaComponent;
