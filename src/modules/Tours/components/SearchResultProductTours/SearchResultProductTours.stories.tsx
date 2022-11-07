import SearchResultProductToursComponent from './SearchResultProductTours.component'
import { SearchResultProductToursData } from './SearchResultProductTours.mock'

export default {
  title: 'Tours Module/SearchResultProductToursComponent',
  component: SearchResultProductToursComponent,
}

export const DefaultSearchResultProductToursComponent = () => {
  return (
    <SearchResultProductToursComponent
      {...SearchResultProductToursData}
    />
  )
}