import ContactUsMainContactComponent from './ContactUsMainContact.component'
import { ContactUsMainContactData } from './ContactUsMainContact.mock'

export default {
  title: 'Contactus Module/ContactUsMainContactComponent',
  component: ContactUsMainContactComponent,
}

export const DefaultContactUsMainContactComponent = () => {
  return (
    <ContactUsMainContactComponent
      {...ContactUsMainContactData}
    />
  )
}