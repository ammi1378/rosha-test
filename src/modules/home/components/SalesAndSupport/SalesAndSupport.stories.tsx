import SalesAndSupportComponent from './SalesAndSupport.component'
import { SalesAndSupportData } from './SalesAndSupport.mock'

export default {
  title: 'Home Module/SalesAndSupportComponent',
  component: SalesAndSupportComponent,
}

export const DefaultSalesAndSupportComponent = () => {
  return (
    <SalesAndSupportComponent
      {...SalesAndSupportData}
    />
  )
}