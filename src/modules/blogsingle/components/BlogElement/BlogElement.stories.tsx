import BlogElementComponent from './BlogElement.component'
import { BlogElementData } from './BlogElement.mock'

export default {
  title: 'Blogsingle Module/BlogElementComponent',
  component: BlogElementComponent,
}

export const DefaultBlogElementComponent = () => {
  return (
    <BlogElementComponent
      {...BlogElementData}
    />
  )
}