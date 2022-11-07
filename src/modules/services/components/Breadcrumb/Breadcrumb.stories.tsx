import BreadcrumbComponent from './Breadcrumb.component'
import { BreadcrumbData } from './Breadcrumb.mock'

export default {
  title: 'Services Module/BreadcrumbComponent',
  component: BreadcrumbComponent,
}

export const DefaultBreadcrumbComponent = () => {
  return (
    <BreadcrumbComponent
      {...BreadcrumbData}
    />
  )
}