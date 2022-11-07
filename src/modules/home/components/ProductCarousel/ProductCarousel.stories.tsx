import ProductCarouselComponent from './ProductCarousel.component'
import { ProductCarouselData } from './ProductCarousel.mock'

export default {
  title: 'Home Module/ProductCarouselComponent',
  component: ProductCarouselComponent,
}

export const DefaultProductCarouselComponent = () => {
  return (
    <ProductCarouselComponent
      {...ProductCarouselData}
    />
  )
}