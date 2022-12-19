import BusBookingFormComponent from './BusBookingForm.component'
import { BusBookingFormData } from './BusBookingForm.mock'

export default {
  title: 'Booking Module/BusBookingFormComponent',
  component: BusBookingFormComponent,
}

export const DefaultBusBookingFormComponent = () => {
  return (
    <BusBookingFormComponent
      {...BusBookingFormData}
    />
  )
}