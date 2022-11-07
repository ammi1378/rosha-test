import OurValues_2AboutusComponent from './OurValues_2Aboutus.component'
import { OurValues_2AboutusData } from './OurValues_2Aboutus.mock'

export default {
  title: 'Aboutus Module/OurValues_2AboutusComponent',
  component: OurValues_2AboutusComponent,
}

export const DefaultOurValues_2AboutusComponent = () => {
  return (
    <OurValues_2AboutusComponent
      {...OurValues_2AboutusData}
    />
  )
}