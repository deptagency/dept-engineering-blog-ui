import { Fragment } from 'react'

import { GhostPostOrPage, GhostSettings } from '@lib/ghost'

import { Header } from './Header'
import { Layout } from './Layout'
import { SEO } from './meta/seo'
import { ISeoImage } from './meta/seoImage'

interface CareersPageProps {
  cmsData: {
    page: GhostPostOrPage
    settings: GhostSettings
    seoImage: ISeoImage
    bodyClass: string
  }
}

export function Careers({ cmsData }: CareersPageProps) {
  const { page, settings, seoImage, bodyClass } = cmsData
  const { meta_title, meta_description } = page

  return (
    <>
      <SEO {...{ settings, meta_title, meta_description, seoImage }} />
      <Layout
        {...{ settings, bodyClass }}
        header={<Header {...{ settings }} />}
      >
        <Fragment></Fragment>
      </Layout>
    </>
  )
}
