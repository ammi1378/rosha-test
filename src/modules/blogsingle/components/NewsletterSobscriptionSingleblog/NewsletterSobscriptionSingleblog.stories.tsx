import NewsletterSobscriptionSingleblogComponent from './NewsletterSobscriptionSingleblog.component'
import { NewsletterSobscriptionSingleblogData } from './NewsletterSobscriptionSingleblog.mock'

export default {
  title: 'Blogsingle Module/NewsletterSobscriptionSingleblogComponent',
  component: NewsletterSobscriptionSingleblogComponent,
}

export const DefaultNewsletterSobscriptionSingleblogComponent = () => {
  return (
    <NewsletterSobscriptionSingleblogComponent
      {...NewsletterSobscriptionSingleblogData}
    />
  )
}