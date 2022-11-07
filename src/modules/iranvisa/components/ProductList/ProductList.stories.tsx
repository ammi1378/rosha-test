import ProductListComponent from './ProductList.component'
import { ProductListData } from './ProductList.mock'

export default {
  title: 'Iranvisa Module/ProductListComponent',
  component: ProductListComponent,
}

export const DefaultProductListComponent = () => {
  return (
    <ProductListComponent
      {...ProductListData}
    />
  )
}