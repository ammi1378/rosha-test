import FooterComponent from './Footer.component'
import { FooterData } from './Footer.mock'

export default {
  title: 'Comon Module/FooterComponent',
  component: FooterComponent,
}

export const DefaultFooterComponent = () => {
  return (
    <FooterComponent
      {...FooterData}
    />
  )
}