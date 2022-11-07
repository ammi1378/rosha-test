import FilterSidbarServicesComponent from './FilterSidbarServices.component'
import { FilterSidbarServicesData } from './FilterSidbarServices.mock'

export default {
  title: 'Services Module/FilterSidbarServicesComponent',
  component: FilterSidbarServicesComponent,
}

export const DefaultFilterSidbarServicesComponent = () => {
  return (
    <FilterSidbarServicesComponent
      {...FilterSidbarServicesData}
    />
  )
}