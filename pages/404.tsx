import Link from 'next/link'
import { GetStaticProps } from 'next'

import { GhostPostsOrPages, GhostSettings, getAllSettings } from '@lib/ghost'
import { get, getLang } from '@utils/use-lang'

import { BodyClass } from '@helpers/BodyClass'
import { Layout } from '@components/Layout'
import { Header } from '@components/Header'
import { Heading } from '@components/typography/Headings'

export const getStaticProps: GetStaticProps = async () => {
  const settings = await getAllSettings()

  return {
    props: {
      settings,
      bodyClass: BodyClass({})
    }
  }
}

interface Custom404Props {
  posts: GhostPostsOrPages
  settings: GhostSettings
  bodyClass: string
}

export default function Custom404({ settings, bodyClass }: Custom404Props) {
  const text = get(getLang(settings.lang))

  return (
    <Layout
      {...{ settings, bodyClass }}
      header={<Header {...{ settings }} />}
      errorClass="error-content"
    >
      <div className="inner error-content-inner">
        <div className="error-code-wrap">
          <Heading.Two as="h1">404</Heading.Two>
        </div>
        <section className="error-message">
          <p className="error-description">{text(`PAGE_NOT_FOUND`)}</p>
          <Link href="/">
            <a className="btn btn-inverted error-link">
              {text(`GOTO_FRONT_PAGE`)}
            </a>
          </Link>
        </section>
      </div>
    </Layout>
  )
}
