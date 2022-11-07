import CardBlogesComponent from './CardBloges.component'
import { CardBlogesData } from './CardBloges.mock'

export default {
  title: 'BlogList Module/CardBlogesComponent',
  component: CardBlogesComponent,
}

export const DefaultCardBlogesComponent = () => {
  return (
    <CardBlogesComponent
      {...CardBlogesData}
    />
  )
}