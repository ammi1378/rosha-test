import ServicesCardItemComponent from './ServicesCardItem.component'
import { ServicesCardItemData } from './ServicesCardItem.mock'

export default {
  title: 'Services Module/ServicesCardItemComponent',
  component: ServicesCardItemComponent,
}

export const DefaultServicesCardItemComponent = () => {
  return (
    <ServicesCardItemComponent
      {...ServicesCardItemData}
    />
  )
}