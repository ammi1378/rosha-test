import Link from "next/link";
import React from "react";
import PaginationComponent from "../Pagination/Pagination.component";
import SouvenirsMainContentCardComponent from "../SouvenirsMainContentCard/SouvenirsMainContentCard.component";
import { SouvenirsMainContentProps } from "./SouvenirsMainContent.props";

const SouvenirsMainContentData = [
  {
    title: "What You Shoud Know before Applying?",
    cardsdetails: [
      {
        name: "Passport Expiration",
        image: ["/NewImages/new-traveler-booking-journey-sojern.webp"],
        describtion:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam itaque voluptate cumque soluta, fuga fugiat eos excepturi, sit qui, cum ducimus recusandae. Minima cupiditate perspiciatis deleniti tenetur ducimus, nesciunt iste. Soluta dolorum reiciendis cum earum asperiores nam pariatur tempore sequi excepturi eius et similique illo error, provident accusamus illum harum enim impedit natus dolore architecto. Quam earum harum obcaecati porro? Quod sequi, voluptate cupiditate vero ut assumenda odit fuga expedita tempora iure minus! Omnis veritatis provident fugit esse explicabo ut cupiditate possimus? Dicta eligendi assumenda, harum non ipsa sunt asperiores?",
      },
      {
        name: "Visa Type",
        image: ["/NewImages/new-traveler-booking-journey-sojern.webp"],
        describtion:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam itaque voluptate cumque soluta, fuga fugiat eos excepturi, sit qui, cum ducimus recusandae. Minima cupiditate perspiciatis deleniti tenetur ducimus, nesciunt iste. Soluta dolorum reiciendis cum earum asperiores nam pariatur tempore sequi excepturi eius et similique illo error, provident accusamus illum harum enim impedit natus dolore architecto. Quam earum harum obcaecati porro? Quod sequi, voluptate cupiditate vero ut assumenda odit fuga expedita tempora iure minus! Omnis veritatis provident fugit esse explicabo ut cupiditate possimus? Dicta eligendi assumenda, harum non ipsa sunt asperiores?",
      },
      {
        name: "Visa Eligibility",
        image: ["/NewImages/new-traveler-booking-journey-sojern.webp"],
        describtion:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam itaque voluptate cumque soluta, fuga fugiat eos excepturi, sit qui, cum ducimus recusandae. Minima cupiditate perspiciatis deleniti tenetur ducimus, nesciunt iste. Soluta dolorum reiciendis cum earum asperiores nam pariatur tempore sequi excepturi eius et similique illo error, provident accusamus illum harum enim impedit natus dolore architecto. Quam earum harum obcaecati porro? Quod sequi, voluptate cupiditate vero ut assumenda odit fuga expedita tempora iure minus! Omnis veritatis provident fugit esse explicabo ut cupiditate possimus? Dicta eligendi assumenda, harum non ipsa sunt asperiores?",
      },
    ],
  },
  {
    title: "How to Compelet the application?",
    cardsdetails: [
      {
        name: "Passport Expiration",
        image: ["/NewImages/new-traveler-booking-journey-sojern.webp"],
        describtion:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam itaque voluptate cumque soluta, fuga fugiat eos excepturi, sit qui, cum ducimus recusandae. Minima cupiditate perspiciatis deleniti tenetur ducimus, nesciunt iste. Soluta dolorum reiciendis cum earum asperiores nam pariatur tempore sequi excepturi eius et similique illo error, provident accusamus illum harum enim impedit natus dolore architecto. Quam earum harum obcaecati porro? Quod sequi, voluptate cupiditate vero ut assumenda odit fuga expedita tempora iure minus! Omnis veritatis provident fugit esse explicabo ut cupiditate possimus? Dicta eligendi assumenda, harum non ipsa sunt asperiores?",
      },
    ],
  },
  {
    title: "Important Notice",
    cardsdetails: [
      {
        name: "Passport Expiration",
        image: ["/NewImages/new-traveler-booking-journey-sojern.webp"],
        describtion:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam itaque voluptate cumque soluta, fuga fugiat eos excepturi, sit qui, cum ducimus recusandae. Minima cupiditate perspiciatis deleniti tenetur ducimus, nesciunt iste. Soluta dolorum reiciendis cum earum asperiores nam pariatur tempore sequi excepturi eius et similique illo error, provident accusamus illum harum enim impedit natus dolore architecto. Quam earum harum obcaecati porro? Quod sequi, voluptate cupiditate vero ut assumenda odit fuga expedita tempora iure minus! Omnis veritatis provident fugit esse explicabo ut cupiditate possimus? Dicta eligendi assumenda, harum non ipsa sunt asperiores?",
      },
    ],
  },
  {
    title: "Your Digital Image Of Your Passport Must",
    cardsdetails: [
      {
        name: "Passport Expiration",
        image: ["/NewImages/new-traveler-booking-journey-sojern.webp"],
        describtion:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam itaque voluptate cumque soluta, fuga fugiat eos excepturi, sit qui, cum ducimus recusandae. Minima cupiditate perspiciatis deleniti tenetur ducimus, nesciunt iste. Soluta dolorum reiciendis cum earum asperiores nam pariatur tempore sequi excepturi eius et similique illo error, provident accusamus illum harum enim impedit natus dolore architecto. Quam earum harum obcaecati porro? Quod sequi, voluptate cupiditate vero ut assumenda odit fuga expedita tempora iure minus! Omnis veritatis provident fugit esse explicabo ut cupiditate possimus? Dicta eligendi assumenda, harum non ipsa sunt asperiores?",
      },
    ],
  },
  {
    title: "Photo Requirements",
    cardsdetails: [
      {
        name: "Passport Expiration",
        image: ["/NewImages/new-traveler-booking-journey-sojern.webp"],
        describtion:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam itaque voluptate cumque soluta, fuga fugiat eos excepturi, sit qui, cum ducimus recusandae. Minima cupiditate perspiciatis deleniti tenetur ducimus, nesciunt iste. Soluta dolorum reiciendis cum earum asperiores nam pariatur tempore sequi excepturi eius et similique illo error, provident accusamus illum harum enim impedit natus dolore architecto. Quam earum harum obcaecati porro? Quod sequi, voluptate cupiditate vero ut assumenda odit fuga expedita tempora iure minus! Omnis veritatis provident fugit esse explicabo ut cupiditate possimus? Dicta eligendi assumenda, harum non ipsa sunt asperiores?",
      },
    ],
  },
  {
    title: "Start a visa application",
    cardsdetails: [
      {
        name: "Passport Expiration",
        image: ["/NewImages/new-traveler-booking-journey-sojern.webp"],
        describtion:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam itaque voluptate cumque soluta, fuga fugiat eos excepturi, sit qui, cum ducimus recusandae. Minima cupiditate perspiciatis deleniti tenetur ducimus, nesciunt iste. Soluta dolorum reiciendis cum earum asperiores nam pariatur tempore sequi excepturi eius et similique illo error, provident accusamus illum harum enim impedit natus dolore architecto. Quam earum harum obcaecati porro? Quod sequi, voluptate cupiditate vero ut assumenda odit fuga expedita tempora iure minus! Omnis veritatis provident fugit esse explicabo ut cupiditate possimus? Dicta eligendi assumenda, harum non ipsa sunt asperiores?",
      },
    ],
  },
  {
    title: "required documents for Visa",
    cardsdetails: [
      {
        name: "Passport Expiration",
        image: ["/NewImages/new-traveler-booking-journey-sojern.webp"],
        describtion:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam itaque voluptate cumque soluta, fuga fugiat eos excepturi, sit qui, cum ducimus recusandae. Minima cupiditate perspiciatis deleniti tenetur ducimus, nesciunt iste. Soluta dolorum reiciendis cum earum asperiores nam pariatur tempore sequi excepturi eius et similique illo error, provident accusamus illum harum enim impedit natus dolore architecto. Quam earum harum obcaecati porro? Quod sequi, voluptate cupiditate vero ut assumenda odit fuga expedita tempora iure minus! Omnis veritatis provident fugit esse explicabo ut cupiditate possimus? Dicta eligendi assumenda, harum non ipsa sunt asperiores?",
      },
    ],
  },
];

const souvenirsMainContentComponent = "souvenirsMainContentComponent";

const SouvenirsMainContentComponent: React.FC<SouvenirsMainContentProps> = ({
  className,
}) => {
  return (
    <div
      className={`${souvenirsMainContentComponent} ${className} rlr-search-results-page__product-list col-lg-9`}
    >
      {SouvenirsMainContentData.map((SouvenirsMainContentItem) => {
        return (
          <SouvenirsMainContentCardComponent
            key={SouvenirsMainContentItem.title}
            title={SouvenirsMainContentItem.title}
            cardsdetails={SouvenirsMainContentItem.cardsdetails}
          />
        );
      })}
      <PaginationComponent />
    </div>
  );
};

export default SouvenirsMainContentComponent;
