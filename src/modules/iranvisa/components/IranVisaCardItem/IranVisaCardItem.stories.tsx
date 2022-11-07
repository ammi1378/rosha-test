import IranVisaCardItemComponent from './IranVisaCardItem.component'
import { IranVisaCardItemData } from './IranVisaCardItem.mock'

export default {
  title: 'Iranvisa Module/IranVisaCardItemComponent',
  component: IranVisaCardItemComponent,
}

export const DefaultIranVisaCardItemComponent = () => {
  return (
    <IranVisaCardItemComponent
      {...IranVisaCardItemData}
    />
  )
}