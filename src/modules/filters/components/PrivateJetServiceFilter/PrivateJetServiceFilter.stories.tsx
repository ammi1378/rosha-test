import PrivateJetServiceFilterComponent from "./PrivateJetServiceFilter.component"
import { PrivateJetServiceFilterData } from "./PrivateJetServiceFilter.mock"


export default {
  title: 'Services Module/PrivateJetServiceFilterComponent',
  component: PrivateJetServiceFilterComponent,
}

export const DefaultPrivateJetServiceFilterComponent = () => {
  return (
    <PrivateJetServiceFilterComponent
      {...PrivateJetServiceFilterData}
    />
  )
}