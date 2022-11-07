import BookingFormSingleTourComponent from './BookingFormSingleTour.component'
import { BookingFormSingleTourData } from './BookingFormSingleTour.mock'

export default {
  title: 'Toursingle Module/BookingFormSingleTourComponent',
  component: BookingFormSingleTourComponent,
}

export const DefaultBookingFormSingleTourComponent = () => {
  return (
    <BookingFormSingleTourComponent
      {...BookingFormSingleTourData}
    />
  )
}