import React from "react";
import OurTeamAboutusComponent from "../../../aboutus/components/OurTeamAboutus/OurTeamAboutus.component";
import OurVisionAboutusComponent from "../../../aboutus/components/OurVisionAboutus/OurVisionAboutus.component";
import { ContactUsMainContactProps } from "./ContactUsMainContact.props";

const contactUsMainContactComponent = "contactUsMainContactComponent";

const ourVisionContactusData = [
  {
    title: "Our Vision",
    image: [
      "/images/about-01.jpg",
    ],
    describtion: "Sost Brilliant reasons Emprise should be your one-stop-shop!",
  }
]
const OurTeamContactusData = [
  {
    title:"Our Team",
    describtion :"Sost Brilliant reasons Emprise should be your one-stop-shop!",
  }
]
const ContactUsMainContactComponent: React.FC<ContactUsMainContactProps> = ({ className }) => {
  return <div className={`${ contactUsMainContactComponent } ${className}`}>
    <section className="rlr-about rlr-section rlr-section__my">
      <div className="container">
        {/* {ourVisionContactusData.map((ourVisionContactusItem) => {
          return (
            <OurVisionAboutusComponent
            title={ourVisionContactusItem.title}
            describtion={ourVisionContactusItem.describtion} 
            image={ourVisionContactusItem.image}
            />
          )
        })} */}
      </div>
    </section>
    {/* <section className="rlr-about rlr-section rlr-section__my">
      <div className="container">
        {OurValues_2AboutusData.map((OurValues_2AboutusItem) => {
          return (
            <OurValues_2AboutusComponent
            title={OurValues_2AboutusItem.title}
            describtion={OurValues_2AboutusItem.describtion}
            image={OurValues_2AboutusItem.image}
            />
          )
        })}
      </div>
    </section> */}
    <section className="rlr-about rlr-section rlr-section__my">
      <div className="container">
        {OurTeamContactusData.map((OurTeamContactusItem) => {
          return (
            <OurTeamAboutusComponent
            title={OurTeamContactusItem.title}
            describtion={OurTeamContactusItem.describtion}
            />
          )
        })}
      </div>
    </section>
  </div>
};

export default ContactUsMainContactComponent;