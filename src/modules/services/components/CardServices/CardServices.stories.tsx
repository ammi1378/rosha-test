import CardServicesComponent from './CardServices.component'
import { CardServicesData } from './CardServices.mock'

export default {
  title: 'Services Module/CardServicesComponent',
  component: CardServicesComponent,
}

export const DefaultCardServicesComponent = () => {
  return (
    <CardServicesComponent
      {...CardServicesData}
    />
  )
}