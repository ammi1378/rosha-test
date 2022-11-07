import PaginationComponent from './Pagination.component'
import { PaginationData } from './Pagination.mock'

export default {
  title: 'Services Module/PaginationComponent',
  component: PaginationComponent,
}

export const DefaultPaginationComponent = () => {
  return (
    <PaginationComponent
      {...PaginationData}
    />
  )
}