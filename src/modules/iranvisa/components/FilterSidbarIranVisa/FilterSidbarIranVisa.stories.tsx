import FilterSidbarIranVisaComponent from './FilterSidbarIranVisa.component'
import { FilterSidbarIranVisaData } from './FilterSidbarIranVisa.mock'

export default {
  title: 'Iranvisa Module/FilterSidbarIranVisaComponent',
  component: FilterSidbarIranVisaComponent,
}

export const DefaultFilterSidbarIranVisaComponent = () => {
  return (
    <FilterSidbarIranVisaComponent
      {...FilterSidbarIranVisaData}
    />
  )
}