import ProductDetailHeaderComponent from './ProductDetailHeader.component'
import { ProductDetailHeaderData } from './ProductDetailHeader.mock'

export default {
  title: 'Toursingle Module/ProductDetailHeaderComponent',
  component: ProductDetailHeaderComponent,
}

export const DefaultProductDetailHeaderComponent = () => {
  return (
    <ProductDetailHeaderComponent
      {...ProductDetailHeaderData}
    />
  )
}