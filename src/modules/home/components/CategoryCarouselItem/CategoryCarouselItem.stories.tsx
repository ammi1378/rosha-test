import CategoryCarouselItemComponent from './CategoryCarouselItem.component'
import { CategoryCarouselItemData } from './CategoryCarouselItem.mock'

export default {
  title: 'Home Module/CategoryCarouselItemComponent',
  component: CategoryCarouselItemComponent,
}

export const DefaultCategoryCarouselItemComponent = () => {
  return (
    <CategoryCarouselItemComponent
      {...CategoryCarouselItemData}
    />
  )
}