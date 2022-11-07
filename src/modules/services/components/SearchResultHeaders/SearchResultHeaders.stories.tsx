import SearchResultHeadersComponent from './SearchResultHeaders.component'
import { SearchResultHeadersData } from './SearchResultHeaders.mock'

export default {
  title: 'Services Module/SearchResultHeadersComponent',
  component: SearchResultHeadersComponent,
}

export const DefaultSearchResultHeadersComponent = () => {
  return (
    <SearchResultHeadersComponent
      {...SearchResultHeadersData}
    />
  )
}