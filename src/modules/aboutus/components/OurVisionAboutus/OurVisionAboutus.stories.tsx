import OurVisionAboutusComponent from './OurVisionAboutus.component'
import { OurVisionAboutusData } from './OurVisionAboutus.mock'

export default {
  title: 'Aboutus Module/OurVisionAboutusComponent',
  component: OurVisionAboutusComponent,
}

export const DefaultOurVisionAboutusComponent = () => {
  return (
    <OurVisionAboutusComponent
      {...OurVisionAboutusData}
    />
  )
}