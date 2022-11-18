import DailyTourServiceFilterComponent from "./DailyTourServiceFilter.component"
import { DailyTourServiceFilterData } from "./DailyTourServiceFilter.mock"

export default {
  title: 'Services Module/DailyTourServiceFilterComponent',
  component: DailyTourServiceFilterComponent,
}

export const DefaultDailyTourServiceFilterComponent = () => {
  return (
    <DailyTourServiceFilterComponent
      {...DailyTourServiceFilterData}
    />
  )
}