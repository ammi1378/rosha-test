import VipServiceFilterComponent from './VipServiceFilter.component'
import { VipServiceFilterData } from './VipServiceFilter.mock'

export default {
  title: 'Services Module/VipServiceFilterComponent',
  component: VipServiceFilterComponent,
}

export const DefaultVipServiceFilterComponent = () => {
  return (
    <VipServiceFilterComponent
      {...VipServiceFilterData}
    />
  )
}