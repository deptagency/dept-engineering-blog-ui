import { Author, PostOrPage, Tag } from '@tryghost/content-api'

interface BodyClassProps {
  isPost?: boolean
  isHome?: boolean
  author?: Author
  tags?: Tag[]
  page?: PostOrPage
}

export const BodyClass = ({
  isHome = false,
  isPost = false,
  author,
  tags,
  page
}: BodyClassProps) => {
  let classes = []

  const isAuthor = (author && author.slug) || false
  const isPage = (page && page.slug) || false

  if (isHome) {
    classes.push(`home-template`)
  } else if (isPost) {
    classes.push(`post-template`)
  } else if (isPage) {
    classes.push(`page-template`)
    classes.push(`page-${page?.slug}`)
  } else if (tags && tags.length > 0) {
    classes.push(`tag-template`)
  } else if (isAuthor) {
    classes.push(`author-template`)
    classes.push(`author-${author?.slug}`)
  }

  if (tags) {
    classes = classes.concat(tags.map(({ slug }) => `tag-${slug}`))
  }

  //if (context.includes('paged')) {
  //    classes.push('paged');
  //}

  return classes.join(` `).trim()
}
