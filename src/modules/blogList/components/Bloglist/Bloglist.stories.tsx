import BloglistComponent from './Bloglist.component'
import { BloglistData } from './Bloglist.mock'

export default {
  title: 'BlogList Module/BloglistComponent',
  component: BloglistComponent,
}

export const DefaultBloglistComponent = () => {
  return (
    <BloglistComponent
      {...BloglistData}
    />
  )
}