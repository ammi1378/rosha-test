import BlogCardItemComponent from './BlogCardItem.component'
import { BlogCardItemData } from './BlogCardItem.mock'

export default {
  title: 'BlogList Module/BlogCardItemComponent',
  component: BlogCardItemComponent,
}

export const DefaultBlogCardItemComponent = () => {
  return (
    <BlogCardItemComponent
      {...BlogCardItemData}
    />
  )
}