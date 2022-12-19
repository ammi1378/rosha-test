import TranslateServiceFilterComponent from './TranslateServiceFilter.component'
import { TranslateServiceFilterData } from './TranslateServiceFilter.mock'

export default {
  title: 'Services Module/TranslateServiceFilterComponent',
  component: TranslateServiceFilterComponent,
}

export const DefaultTranslateServiceFilterComponent = () => {
  return (
    <TranslateServiceFilterComponent
      {...TranslateServiceFilterData}
    />
  )
}