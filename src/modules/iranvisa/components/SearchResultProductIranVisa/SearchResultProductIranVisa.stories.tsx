import SearchResultProductIranVisaComponent from './SearchResultProductIranVisa.component'
import { SearchResultProductIranVisaData } from './SearchResultProductIranVisa.mock'

export default {
  title: 'Iranvisa Module/SearchResultProductIranVisaComponent',
  component: SearchResultProductIranVisaComponent,
}

export const DefaultSearchResultProductIranVisaComponent = () => {
  return (
    <SearchResultProductIranVisaComponent
      {...SearchResultProductIranVisaData}
    />
  )
}