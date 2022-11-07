import CategoryCarouselComponent from './CategoryCarousel.component'
import { CategoryCarouselData } from './CategoryCarousel.mock'

export default {
  title: 'Home Module/CategoryCarouselComponent',
  component: CategoryCarouselComponent,
}

export const DefaultCategoryCarouselComponent = () => {
  return (
    <CategoryCarouselComponent
      {...CategoryCarouselData}
    />
  )
}