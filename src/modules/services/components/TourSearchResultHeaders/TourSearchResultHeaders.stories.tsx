import TourSearchResultHeadersComponent from './TourSearchResultHeaders.component'
import { TourSearchResultHeadersData } from './TourSearchResultHeaders.mock'

export default {
  title: 'Services Module/TourSearchResultHeadersComponent',
  component: TourSearchResultHeadersComponent,
}

export const DefaultTourSearchResultHeadersComponent = () => {
  return (
    <TourSearchResultHeadersComponent
      {...TourSearchResultHeadersData}
    />
  )
}