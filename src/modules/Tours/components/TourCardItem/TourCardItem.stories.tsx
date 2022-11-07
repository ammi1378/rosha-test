import TourCardItemComponent from './TourCardItem.component'
import { TourCardItemData } from './TourCardItem.mock'

export default {
  title: 'Tours Module/TourCardItemComponent',
  component: TourCardItemComponent,
}

export const DefaultTourCardItemComponent = () => {
  return (
    <TourCardItemComponent
      {...TourCardItemData}
    />
  )
}