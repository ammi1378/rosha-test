import ResultheadersItemComponent from './ResultheadersItem.component'
import { ResultheadersItemData } from './ResultheadersItem.mock'

export default {
  title: 'Services Module/ResultheadersItemComponent',
  component: ResultheadersItemComponent,
}

export const DefaultResultheadersItemComponent = () => {
  return (
    <ResultheadersItemComponent
      {...ResultheadersItemData}
    />
  )
}