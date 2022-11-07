import TourServiceFilterComponent from './TourServiceFilter.component'
import { TourServiceFilterData } from './TourServiceFilter.mock'

export default {
  title: 'Services Module/TourServiceFilterComponent',
  component: TourServiceFilterComponent,
}

export const DefaultTourServiceFilterComponent = () => {
  return (
    <TourServiceFilterComponent
      {...TourServiceFilterData}
    />
  )
}