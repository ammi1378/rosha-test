import AirportTransportServiceFilterComponent from "./AirportTransportServiceFilter.component"
import { AirportTransportServiceFilterData } from "./AirportTransportServiceFilter.mock"


export default {
  title: 'Services Module/AirportTransportServiceFilterComponent',
  component: AirportTransportServiceFilterComponent,
}

export const DefaultAirportTransportServiceFilterComponent = () => {
  return (
    <AirportTransportServiceFilterComponent
      {...AirportTransportServiceFilterData}
    />
  )
}