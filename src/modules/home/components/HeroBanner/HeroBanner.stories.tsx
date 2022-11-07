import HeroBannerComponent from './HeroBanner.component'
import { HeroBannerData } from './HeroBanner.mock'

export default {
  title: 'Home Module/HeroBannerComponent',
  component: HeroBannerComponent,
}

export const DefaultHeroBannerComponent = () => {
  return (
    <HeroBannerComponent
      {...HeroBannerData}
    />
  )
}