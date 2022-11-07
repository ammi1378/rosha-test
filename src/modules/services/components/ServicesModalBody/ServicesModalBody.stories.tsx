import ServicesModalBodyComponent from './ServicesModalBody.component'
import { ServicesModalBodyData } from './ServicesModalBody.mock'

export default {
  title: 'Services Module/ServicesModalBodyComponent',
  component: ServicesModalBodyComponent,
}

export const DefaultServicesModalBodyComponent = () => {
  return (
    <ServicesModalBodyComponent
      {...ServicesModalBodyData}
    />
  )
}