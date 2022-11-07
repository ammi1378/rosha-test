import HotelInfoModalComponent from './HotelInfoModal.component'
import { HotelInfoModalData } from './HotelInfoModal.mock'

export default {
  title: 'Services Module/HotelInfoModalComponent',
  component: HotelInfoModalComponent,
}

export const DefaultHotelInfoModalComponent = () => {
  return (
    <HotelInfoModalComponent
      {...HotelInfoModalData}
    />
  )
}