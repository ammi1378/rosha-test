import HotelServiceFilterComponent from "./HotelServiceFilter.component"
import { HotelServiceFilterData } from "./HotelServiceFilter.mock"


export default {
  title: 'Services Module/HotelServiceFilterComponent',
  component: HotelServiceFilterComponent,
}

export const DefaultHotelServiceFilterComponent = () => {
  return (
    <HotelServiceFilterComponent
      {...HotelServiceFilterData}
    />
  )
}