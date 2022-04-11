import Link from 'next/link'
import { GetStaticProps } from 'next'

import { Layout } from '@components/Layout'
import { HeaderPage } from '@components/HeaderPage'
import { PostCard } from '@components/PostCard'

import { getAllSettings, GhostSettings, GhostPostsOrPages } from '@lib/ghost'
import { getLang, get } from '@utils/use-lang'
import { BodyClass } from '@helpers/BodyClass'

export const getStaticProps: GetStaticProps = async () => {
  const settings = await getAllSettings()

  return {
    props: {
      settings,
      bodyClass: BodyClass({}),
    },
  }
}

interface Custom404Props {
  posts: GhostPostsOrPages
  settings: GhostSettings
  bodyClass: string
}

export default function Custom404({ posts, settings, bodyClass }: Custom404Props) {
  const text = get(getLang(settings.lang))

  return (
    <Layout {...{ settings, bodyClass }} header={<HeaderPage {...{ settings }} />} errorClass="error-content">
      <div className="inner error-content-inner">
      <div className="error-code-wrap">
        <h1 className="error-code">404</h1>
      </div>
      <section className="error-message">
        <p className="error-description">{text(`PAGE_NOT_FOUND`)}</p>
        <Link href="/">
          <a className="btn btn-inverted error-link">{text(`GOTO_FRONT_PAGE`)}</a>
        </Link>
      </section>
      </div>
    </Layout>
  )
}
