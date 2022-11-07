import BannerAboutUsCardComponent from './BannerAboutUsCard.component'
import { BannerAboutUsCardData } from './BannerAboutUsCard.mock'

export default {
  title: 'Aboutus Module/BannerAboutUsCardComponent',
  component: BannerAboutUsCardComponent,
}

export const DefaultBannerAboutUsCardComponent = () => {
  return (
    <BannerAboutUsCardComponent
      {...BannerAboutUsCardData}
    />
  )
}