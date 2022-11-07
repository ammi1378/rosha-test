import HerobannerItemComponent from './HerobannerItem.component'
import { HerobannerItemData } from './HerobannerItem.mock'

export default {
  title: 'Home Module/HerobannerItemComponent',
  component: HerobannerItemComponent,
}

export const DefaultHerobannerItemComponent = () => {
  return (
    <HerobannerItemComponent
      {...HerobannerItemData}
    />
  )
}