import LogoCarouselComponent from './LogoCarousel.component'
import { LogoCarouselData } from './LogoCarousel.mock'

export default {
  title: 'Home Module/LogoCarouselComponent',
  component: LogoCarouselComponent,
}

export const DefaultLogoCarouselComponent = () => {
  return (
    <LogoCarouselComponent
      {...LogoCarouselData}
    />
  )
}