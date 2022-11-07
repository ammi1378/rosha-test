import MediaSliderComponent from './MediaSlider.component'
import { MediaSliderData } from './MediaSlider.mock'

export default {
  title: 'Toursingle Module/MediaSliderComponent',
  component: MediaSliderComponent,
}

export const DefaultMediaSliderComponent = () => {
  return (
    <MediaSliderComponent
      {...MediaSliderData}
    />
  )
}