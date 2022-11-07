import FormBookingComponent from './FormBooking.component'
import { FormBookingData } from './FormBooking.mock'

export default {
  title: 'Booking Module/FormBookingComponent',
  component: FormBookingComponent,
}

export const DefaultFormBookingComponent = () => {
  return (
    <FormBookingComponent
      {...FormBookingData}
    />
  )
}