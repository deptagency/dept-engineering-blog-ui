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
}

const FirstPost = ({ settings, post, isHome }: FirstPostItemProps) => (
  <div style={{ backgroundColor: 'black', width: '100%' }}>
    <div className="grid-wrapper">
      <Grid className="grid-inner" container spacing="2">
        <Grid item xs={12}>
          <PostCard key={1} {...{settings, post, isHome, num: 1 }} />
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
    <div className={`grid-wrapper`} key={i + 1}>
      <Grid className="grid-inner" container>
        {row.map((post, n) => (
          <Grid key={`${i} ${n}`} item xs={row.length === 3 ? 4 : 6}>
            <PostCard {...{settings, post, isHome }} />
          </Grid>
        ))}
      </Grid>
    </div>
  ))

  return <>{firstRow.concat(mainRows)}</>;
};
