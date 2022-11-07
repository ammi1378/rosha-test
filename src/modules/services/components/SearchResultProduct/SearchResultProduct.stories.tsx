import SearchResultProductComponent from './SearchResultProduct.component'
import { SearchResultProductData } from './SearchResultProduct.mock'

export default {
  title: 'Services Module/SearchResultProductComponent',
  component: SearchResultProductComponent,
}

export const DefaultSearchResultProductComponent = () => {
  return (
    <SearchResultProductComponent
      {...SearchResultProductData}
    />
  )
}