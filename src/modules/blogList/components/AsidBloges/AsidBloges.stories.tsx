import AsidBlogesComponent from './AsidBloges.component'
import { AsidBlogesData } from './AsidBloges.mock'

export default {
  title: 'BlogList Module/AsidBlogesComponent',
  component: AsidBlogesComponent,
}

export const DefaultAsidBlogesComponent = () => {
  return (
    <AsidBlogesComponent
      {...AsidBlogesData}
    />
  )
}