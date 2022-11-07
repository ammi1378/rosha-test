import CardIranvisaComponent from './CardIranvisa.component'
import { CardIranvisaData } from './CardIranvisa.mock'

export default {
  title: 'Iranvisa Module/CardIranvisaComponent',
  component: CardIranvisaComponent,
}

export const DefaultCardIranvisaComponent = () => {
  return (
    <CardIranvisaComponent
      {...CardIranvisaData}
    />
  )
}