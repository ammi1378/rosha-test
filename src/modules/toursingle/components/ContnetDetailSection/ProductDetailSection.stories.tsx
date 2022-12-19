import ProductDetailSectionComponent from './ProductDetailSection.component'
import { ProductDetailSectionData } from './ProductDetailSection.mock'

export default {
  title: 'Toursingle Module/ProductDetailSectionComponent',
  component: ProductDetailSectionComponent,
}

export const DefaultProductDetailSectionComponent = () => {
  return (
    <ProductDetailSectionComponent
      {...ProductDetailSectionData}
    />
  )
}