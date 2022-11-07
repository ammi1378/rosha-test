import OurTeamAboutusComponent from './OurTeamAboutus.component'
import { OurTeamAboutusData } from './OurTeamAboutus.mock'

export default {
  title: 'Aboutus Module/OurTeamAboutusComponent',
  component: OurTeamAboutusComponent,
}

export const DefaultOurTeamAboutusComponent = () => {
  return (
    <OurTeamAboutusComponent
      {...OurTeamAboutusData}
    />
  )
}