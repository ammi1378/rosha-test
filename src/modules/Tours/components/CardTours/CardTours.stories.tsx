import CardToursComponent from './CardTours.component'
import { CardToursData } from './CardTours.mock'

export default {
  title: 'Tours Module/CardToursComponent',
  component: CardToursComponent,
}

export const DefaultCardToursComponent = () => {
  return (
    <CardToursComponent
      {...CardToursData}
    />
  )
}