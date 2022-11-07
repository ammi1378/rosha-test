import OurTeamCardComponent from './OurTeamCard.component'
import { OurTeamCardData } from './OurTeamCard.mock'

export default {
  title: 'Aboutus Module/OurTeamCardComponent',
  component: OurTeamCardComponent,
}

export const DefaultOurTeamCardComponent = () => {
  return (
    <OurTeamCardComponent
      {...OurTeamCardData}
    />
  )
}