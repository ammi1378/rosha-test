import DefaultServiceFilterComponent from './DefaultServiceFilter.component'
import { DefaultServiceFilterData } from './DefaultServiceFilter.mock'

export default {
  title: 'Services Module/DefaultServiceFilterComponent',
  component: DefaultServiceFilterComponent,
}

export const DefaultDefaultServiceFilterComponent = () => {
  return (
    <DefaultServiceFilterComponent
      {...DefaultServiceFilterData}
    />
  )
}