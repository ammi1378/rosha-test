import CipServiceFilterComponent from './CipServiceFilter.component'
import { CipServiceFilterData } from './CipServiceFilter.mock'

export default {
  title: 'Services Module/CipServiceFilterComponent',
  component: CipServiceFilterComponent,
}

export const DefaultCipServiceFilterComponent = () => {
  return (
    <CipServiceFilterComponent
      {...CipServiceFilterData}
    />
  )
}