import OurVisionAboutUsCardComponent from './OurVisionAboutUsCard.component'
import { OurVisionAboutUsCardData } from './OurVisionAboutUsCard.mock'

export default {
  title: 'Aboutus Module/OurVisionAboutUsCardComponent',
  component: OurVisionAboutUsCardComponent,
}

export const DefaultOurVisionAboutUsCardComponent = () => {
  return (
    <OurVisionAboutUsCardComponent
      {...OurVisionAboutUsCardData}
    />
  )
}