import SimilarProductsComponent from './SimilarProducts.component'
import { SimilarProductsData } from './SimilarProducts.mock'

export default {
  title: 'Toursingle Module/SimilarProductsComponent',
  component: SimilarProductsComponent,
}

export const DefaultSimilarProductsComponent = () => {
  return (
    <SimilarProductsComponent
      {...SimilarProductsData}
    />
  )
}