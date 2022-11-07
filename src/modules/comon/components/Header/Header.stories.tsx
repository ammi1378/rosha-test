import HeaderComponent from './Header.component'
import { HeaderData } from './Header.mock'

export default {
  title: 'Comon Module/HeaderComponent',
  component: HeaderComponent,
}

export const DefaultHeaderComponent = () => {
  return (
    <HeaderComponent
      {...HeaderData}
    />
  )
}