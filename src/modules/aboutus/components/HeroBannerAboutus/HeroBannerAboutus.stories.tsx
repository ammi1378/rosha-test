import HeroBannerAboutusComponent from './HeroBannerAboutus.component'
import { HeroBannerAboutusData } from './HeroBannerAboutus.mock'

export default {
  title: 'Aboutus Module/HeroBannerAboutusComponent',
  component: HeroBannerAboutusComponent,
}

export const DefaultHeroBannerAboutusComponent = () => {
  return (
    <HeroBannerAboutusComponent
      {...HeroBannerAboutusData}
    />
  )
}