import SouvenirsServiceFilterComponent from "./SouvenirsServiceFilter.component"
import { SouvenirsServiceFilterData } from "./SouvenirsServiceFilter.mock"


export default {
  title: 'Services Module/SouvenirsServiceFilterComponent',
  component: SouvenirsServiceFilterComponent,
}

export const DefaultSouvenirsServiceFilterComponent = () => {
  return (
    <SouvenirsServiceFilterComponent
      {...SouvenirsServiceFilterData}
    />
  )
}