import BusportTransportServiceFilterComponent from "./BusportTransportServiceFilter.component"
import { BusportTransportServiceFilterData } from "./BusportTransportServiceFilter.mock"


export default {
  title: 'Services Module/BusportTransportServiceFilterComponent',
  component: BusportTransportServiceFilterComponent,
}

export const DefaultBusportTransportServiceFilterComponent = () => {
  return (
    <BusportTransportServiceFilterComponent
      {...BusportTransportServiceFilterData}
    />
  )
}