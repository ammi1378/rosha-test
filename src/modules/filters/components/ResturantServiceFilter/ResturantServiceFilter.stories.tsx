import ResturantServiceFilterComponent from './ResturantServiceFilter.component'
import { ResturantServiceFilterData } from './ResturantServiceFilter.mock'

export default {
  title: 'Services Module/ResturantServiceFilterComponent',
  component: ResturantServiceFilterComponent,
}

export const DefaultResturantServiceFilterComponent = () => {
  return (
    <ResturantServiceFilterComponent
      {...ResturantServiceFilterData}
    />
  )
}