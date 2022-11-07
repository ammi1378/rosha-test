import HomeCardItemComponent from './HomeCardItem.component'
import { HomeCardItemData } from './HomeCardItem.mock'

export default {
  title: 'Home Module/HomeCardItemComponent',
  component: HomeCardItemComponent,
}

export const DefaultHomeCardItemComponent = () => {
  return (
    <HomeCardItemComponent
      {...HomeCardItemData}
    />
  )
}