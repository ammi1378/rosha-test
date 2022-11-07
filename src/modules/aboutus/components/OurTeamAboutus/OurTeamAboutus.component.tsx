import React from "react";
import OurTeamCardComponent from "../OurTeamCard/OurTeamCard.component";
import { OurTeamAboutusProps } from "./OurTeamAboutus.props";

const ourTeamAboutusComponent = "ourTeamAboutusComponent";

const OurTeamAboutusCardData =[
  {
    image: [
      "/images/team/team-03.jpg",
    ],
    title:"Devon Lane",
    name:"Founder",
    describtion :"ed non iaculis sem",
  },
  {
    image: [
      "/images/team/team-03.jpg",
    ],
    title:"Cleona Mathur",
    name:"Co-Founder",
    describtion :"ed non iaculis sem",
  },
  {
    image: [
      "/images/team/team-03.jpg",
    ],
    title:"Darren Spratt",
    name:"Tour Manager",
    describtion :"ed non iaculis sem",
  },
  {
    image: [
      "/images/team/team-03.jpg",
    ],
    title:"Lejla Fizovic",
    name:"Administrator",
    describtion :"ed non iaculis sem",
  },
]
const OurTeamAboutusComponent: React.FC<OurTeamAboutusProps> = ({ 
  className,
  title ,
  describtion
}) => {
  return <section className={`${ourTeamAboutusComponent} ${className} rlr-section`}>
    <div className="container">
      <div className="row">
        {/* <!-- Section heading --> */}
        <div className="rlr-section__title rlr-section__title--centered">
          <h2 className="rlr-section__title--main">
            {title}  
          </h2> 
          <span className="rlr-section__title--sub">
            {describtion}
          </span>
        </div>
        {OurTeamAboutusCardData.map((OurTeamAboutusCardItem) => {
          return (
            <OurTeamCardComponent 
              image={OurTeamAboutusCardItem.image}
              title={OurTeamAboutusCardItem.title}
              name={OurTeamAboutusCardItem.name}
              describtion={OurTeamAboutusCardItem.describtion}
            />
          )
        })}
      </div>
    </div>
  </section>
};

export default OurTeamAboutusComponent;