import AboutUsMainContentComponent from './AboutUsMainContent.component'
import { AboutUsMainContentData } from './AboutUsMainContent.mock'

export default {
  title: 'Aboutus Module/AboutUsMainContentComponent',
  component: AboutUsMainContentComponent,
}

export const DefaultAboutUsMainContentComponent = () => {
  return (
    <AboutUsMainContentComponent
      {...AboutUsMainContentData}
    />
  )
}