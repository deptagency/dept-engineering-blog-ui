import { GhostPostOrPage, GhostSettings } from '@lib/ghost'

import { Button } from '@components/Button'
import { Grid } from '@components/Grid'
import { Header } from '@components/Header'
import { Layout } from '@components/Layout'
import { SEO } from '@components/meta/seo'
import { ISeoImage } from '@components/meta/seoImage'
import { Heading } from '@components/typography/Headings'

import {
  CareersPageHeading,
  CareersPageImage,
  CareersPageSplitView,
  CareersPageSubheadings
} from './components'
import { CareersPageImageHeight } from './components.model'

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
  const { nextImages } = settings.processEnv

  return (
    <>
      <SEO {...{ settings, meta_title, meta_description, seoImage }} />
      <Layout
        {...{ settings, bodyClass }}
        header={<Header {...{ settings }} />}
      >
        <CareersPageSplitView
          leftGridProps={{
            container: true,
            direction: 'column',
            rowSpacing: { xs: 2, md: 3 }
          }}
          leftContents={
            <>
              <CareersPageHeading as="h1">
                Careers in Engineering
              </CareersPageHeading>
              <div>
                <Button.Cta as="a">Explore Open Roles</Button.Cta>
              </div>
            </>
          }
          rightContents={
            <CareersPageSubheadings as="h2">
              <>
                DEPT® is a global digital agency that does cutting edge work in
                technology, creativity, and data. At DEPT® Engineering, we do
                things a little differently than other agencies: we’re makers at
                heart and it bleeds into everything we do.
              </>
            </CareersPageSubheadings>
          }
        />

        <CareersPageImage
          src="/images/careers/stroopy-mascot.webp"
          alt="Stroopy mascot"
          quality={nextImages.quality}
        />

        <CareersPageSplitView
          extraTopPadding
          leftContents={
            <CareersPageHeading>
              Happy Employees == Happy Clients
            </CareersPageHeading>
          }
          rightContents={
            <CareersPageSubheadings>
              <>
                Our goals are simple:{' '}
                <strong>Happy employees and happy clients</strong>. We believe
                making our employees happy and letting them focus on doing good
                work leads to happy clients. Our philosophy is to hire smart,
                client-facing engineers that can both understand our client’s
                business goals and write elegant code.
              </>
            </CareersPageSubheadings>
          }
        />

        <CareersPageSplitView
          extraBottomPadding
          leftContents={<CareersPageHeading>How we work</CareersPageHeading>}
          rightContents={
            <CareersPageSubheadings>
              <>
                Engineers are on one project at a time — in our experience this
                avoids burnout and makes for a better product.
              </>
              <>
                We all contribute and have various opportunities to mentor,
                coach, and lead. We are problem solvers who take active roles to
                get it done with lots of laughs along the way.
              </>
              <>
                We have long term goals and the endurance to keep running the
                race. We are resilient, optimistic, and approach all things with
                confidence. We strive for excellence, not perfection.
              </>
            </CareersPageSubheadings>
          }
        />

        <CareersPageSplitView
          extraTopPadding
          extraBottomPadding
          inverted
          leftContents={
            <CareersPageHeading inverted>
              Strong opinions, loosely held
            </CareersPageHeading>
          }
          rightContents={
            <CareersPageSubheadings inverted>
              <>
                We’re trustworthy, transparent, reliable, and unafraid to speak
                up. We are empowered to practice good judgment and are not
                governed by a policy or procedure. We like to say that our
                clients hire us for our strong opinions, loosely led. Meaning
                we’ve got the expertise and the opinions to solve your problem,
                but are flexible enough to change based on clients needs and
                wants.
              </>
              <>
                Oh, and we believe strongly that you should be there for your
                friends, family, hobbies/passions and that you should be home in
                time for dinner.
              </>
              <>
                To get a better idea of our Engineering philosophy, we welcome
                you to view{' '}
                <a
                  href="https://github.com/deptagency/engineering-soapboxes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  our list of collected opinions and practices
                </a>{' '}
                as well as check out our software engineering podcast{' '}
                <a href="https://shipit.io" target="_blank" rel="noreferrer">
                  Ship It
                </a>
                .
              </>
            </CareersPageSubheadings>
          }
        />

        <Grid container>
          <Grid item xs={12} md={6}>
            <CareersPageImage
              height={CareersPageImageHeight.TALL}
              src="/images/careers/book.jpg"
              alt={
                'Person reading the book "Confessions of an Heiress" by Paris Hilton'
              }
              quality={nextImages.quality}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CareersPageImage
              height={CareersPageImageHeight.TALL}
              src="/images/careers/backpack.jpg"
              alt={
                'Person smiling while wearing a backpack with Steve Harvey’s laughing face printed in a pattern'
              }
              quality={nextImages.quality}
            />
          </Grid>
        </Grid>

        <CareersPageImage
          src="/images/careers/desk.jpg"
          alt="Desk with laptop, coffee, magazine, skateboard, and toy"
          quality={nextImages.quality}
        />
      </Layout>
    </>
  )
}
