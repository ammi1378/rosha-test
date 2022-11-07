import VideoBlockComponent from './VideoBlock.component'
import { VideoBlockData } from './VideoBlock.mock'

export default {
  title: 'Home Module/VideoBlockComponent',
  component: VideoBlockComponent,
}

export const DefaultVideoBlockComponent = () => {
  return (
    <VideoBlockComponent
      {...VideoBlockData}
    />
  )
}