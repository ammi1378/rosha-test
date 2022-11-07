import ServiceFilterContainerComponent from './ServiceFilterContainer.component'
import { ServiceFilterContainerData } from './ServiceFilterContainer.mock'

export default {
  title: 'Services Module/ServiceFilterContainerComponent',
  component: ServiceFilterContainerComponent,
}

export const DefaultServiceFilterContainerComponent = () => {
  return (
    <ServiceFilterContainerComponent
      {...ServiceFilterContainerData}
    />
  )
}