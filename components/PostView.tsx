import { GhostPostsOrPages, GhostSettings } from '@lib/ghost'

import { PostItems } from '@components/PostItems'
interface PostViewProps {
  settings: GhostSettings
  posts: GhostPostsOrPages
  isHome?: boolean
}

export const PostView = (props: PostViewProps) => (
  <div className="posts">
    <div className="post-feed">
      <PostItems {...props} />
    </div>
  </div>
)
