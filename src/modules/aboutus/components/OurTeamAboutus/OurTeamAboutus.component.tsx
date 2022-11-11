import React from "react";
import OurTeamCardComponent from "../OurTeamCard/OurTeamCard.component";
import { OurTeamAboutusProps } from "./OurTeamAboutus.props";

const ourTeamAboutusComponent = "ourTeamAboutusComponent";

const OurTeamAboutusCardData = [
  {
    image: ["/images/team/team-03.jpg"],
    title: "Devon Lane",
    name: "Founder",
    describtion: "ed non iaculis sem",
  },
  {
    image: ["/images/team/team-03.jpg"],
    title: "Cleona Mathur",
    name: "Co-Founder",
    describtion: "ed non iaculis sem",
  },
  {
    image: ["/images/team/team-03.jpg"],
    title: "Darren Spratt",
    name: "Tour Manager",
    describtion: "ed non iaculis sem",
  },
  {
    image: ["/images/team/team-03.jpg"],
    title: "Lejla Fizovic",
    name: "Administrator",
    describtion: "ed non iaculis sem",
  },
];
const OurTeamAboutusComponent: React.FC<OurTeamAboutusProps> = ({
  className,
  data,
}) => {
  return (
    <section className={`${ourTeamAboutusComponent} ${className} rlr-section`}>
      <div className="container">
        <div className="row">
          {/* <!-- Section heading --> */}
          <div className="rlr-section__title rlr-section__title--centered">
            <h2 className="rlr-section__title--main">
              {data?.attributes?.Team?.Header}
            </h2>
            <span className="rlr-section__title--sub">
              {data?.attributes?.Team?.SubHeader}
            </span>
          </div>
          {data?.attributes?.Team?.TeamMember?.map((OurTeamAboutusCardItem) => {
            return (
              <OurTeamCardComponent
                image={OurTeamAboutusCardItem.Image?.data?.attributes?.url}
                title={OurTeamAboutusCardItem.Job}
                name={OurTeamAboutusCardItem.Name}
                describtion={OurTeamAboutusCardItem.Description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTeamAboutusComponent;
