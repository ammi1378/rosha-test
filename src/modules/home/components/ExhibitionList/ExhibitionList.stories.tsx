import ExhibitionListComponent from './ExhibitionList.component'
import { ExhibitionListData } from './ExhibitionList.mock'

export default {
  title: 'Home Module/ExhibitionListComponent',
  component: ExhibitionListComponent,
}

export const DefaultExhibitionListComponent = () => {
  return (
    <ExhibitionListComponent
      {...ExhibitionListData}
    />
  )
}