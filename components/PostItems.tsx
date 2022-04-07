import { PostCard } from '@components/PostCard'
import { GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '@lib/ghost'
import Grid from '@mui/material/Grid'
interface PostItemsProps {
  settings: GhostSettings
  posts: GhostPostsOrPages
  isHome?: boolean
}
interface FirstPostItemProps {
  settings: GhostSettings
  post: GhostPostOrPage
  isHome?: boolean
  num: number
}

const FirstPost = ({ settings, post, isHome, num }: FirstPostItemProps) => (
  <div className="first-post-wrapper">
    <div className="grid-wrapper">
      <Grid className="grid-inner" container>
        <Grid item xs={12}>
          <PostCard key={1} {...{settings, post, isHome, num }} />
        </Grid>
      </Grid>
    </div>
  </div>
);

export const PostItems = ({ settings, posts, isHome }: PostItemsProps) => {
  const firstRow: React.ReactNode[] = []
  const rows: GhostPostOrPage[][] = [];

  if (!posts.length) {
    return null
  }

  firstRow.push(<FirstPost key={0} {...{settings, post: posts[0], isHome, num: 0 }} />)

  let newPosts: GhostPostOrPage[] = posts.slice(1);
  let breakOn: number = 2;
  while (newPosts.length) {
    rows.push(newPosts.slice(0, breakOn));
    breakOn = breakOn === 2 ? 3 : 2;
    newPosts = newPosts.slice(breakOn);
  }

  const mainRows = rows.map((row, i) => (
    <div className="grid-wrapper" key={i + 1}>
      <Grid className="grid-inner" columnSpacing={{ xs: 0, md: 3 }} container>
        {row.map((post, n) => (
          <Grid key={`${i + 1} ${n}`} item xs={12} md={row.length === 1 ? 12 : row.length === 3 ? 4 : 6}>
            <PostCard {...{settings, post, isHome, num: parseInt(`${i + 1}${n}`) }} />
          </Grid>
        ))}
      </Grid>
    </div>
  ))

  return <>{firstRow.concat(mainRows)}</>;
};
