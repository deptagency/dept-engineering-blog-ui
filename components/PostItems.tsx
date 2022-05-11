import { useRouter } from 'next/router'
import { GridWrapper, Row, Col } from '@components/Grid'
import { FilterTags } from '@components/FilterTags'
import { PostCard } from '@components/PostCard'
import { GhostPostOrPage, GhostPostsOrPages, GhostSettings } from '@lib/ghost'

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
    <PostCard key={1} {...{settings, post, isHome, num }} />
  </div>
);

export const PostItems = ({ settings, posts, isHome }: PostItemsProps) => {
  const firstRow: React.ReactNode[] = []
  const rows: GhostPostOrPage[][] = [];
  const { asPath } = useRouter();

  if (!posts.length) {
    return null
  }

  firstRow.push(<FirstPost key={0} {...{settings, post: posts[0], isHome, num: 0 }} />)

  if (isHome || asPath.indexOf('/tag') >= 0) {
    firstRow.push(
      <GridWrapper key="filter-tags">
          <Row>
            <Col>
            <FilterTags currentTag={asPath.split('/').slice(-1)[0] || ''} tags={["Platforms", "Teams", "Process", "People"]} />
            </Col>
          </Row>
      </GridWrapper>
    )
  }

  let newPosts: GhostPostOrPage[] = posts.slice(1);
  let breakOn: number = 2;

  while (newPosts.length) {
    rows.push(newPosts.slice(0, breakOn));
    newPosts = newPosts.slice(breakOn);
    breakOn = breakOn === 2 ? 3 : 2;
  }

  const mainRows = rows.map((row, i) => (
    <GridWrapper key={i + 1}>
        <Row>
        {row.map((post, n) => (
          <Col key={`${i + 1} ${n}`} xs={12} md={row.length === 1 ? 12 : row.length === 3 ? 4 : 6}>
            <PostCard {...{settings, post, isHome, num: parseInt(`${i + 1}${n}`) }} />
          </Col>
        ))}
      </Row>
    </GridWrapper>
  ))

  return <>{firstRow.concat(mainRows)}</>;
};
