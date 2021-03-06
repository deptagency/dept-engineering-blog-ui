import Link from 'next/link'

import { GhostPostOrPage, GhostSettings } from '@lib/ghost'

import backpack from '@imgs/careers/backpack.jpg'
import book from '@imgs/careers/book.jpg'
import desk from '@imgs/careers/desk.jpg'
import stroopyMascot from '@imgs/careers/stroopy-mascot.webp'

import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Layout } from '@components/Layout'
import { SEO } from '@components/meta/seo'
import { ISeoImage } from '@components/meta/seoImage'

import {
  CareersPageContactView,
  CareersPageHeading,
  CareersPageImage,
  CareersPageMotto,
  CareersPageSplitView,
  CareersPageSubheadings,
  CareersPageUnorderedList,
  CareersPageWrappedSplitView
} from './components'

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
        header={<Header {...{ settings }} isCareersPage />}
        errorClass="no-bottom-padding"
      >
        <CareersPageWrappedSplitView
          bottomPadding="MEDIUM"
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
                <Link href="https://www.deptagency.com/careers/roles/" passHref>
                  <Button.Cta as="a">Explore Open Roles</Button.Cta>
                </Link>
              </div>
            </>
          }
          rightContents={
            <CareersPageSubheadings as="h2">
              <>
                DEPT?? is a global digital agency that does cutting edge work in
                technology, creativity, and data. At DEPT?? Engineering, we do
                things a little differently than other agencies: we???re makers at
                heart and it bleeds into everything we do.
              </>
            </CareersPageSubheadings>
          }
        />

        <CareersPageImage
          src={stroopyMascot}
          alt="Stroopy mascot"
          quality={nextImages.quality}
          priority
        />

        <CareersPageWrappedSplitView
          topPadding="LARGE"
          bottomPadding="LARGE"
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
                client-facing engineers that can both understand our client???s
                business goals and write elegant code.
              </>
            </CareersPageSubheadings>
          }
        />

        <CareersPageImage
          src={desk}
          alt="Desk with laptop, coffee, magazine, skateboard, and toy"
          quality={nextImages.quality}
        />

        <CareersPageWrappedSplitView
          topPadding="LARGE"
          bottomPadding="LARGE"
          containerGridProps={{ justifyContent: 'flex-end' }}
          rightContents={
            <CareersPageSubheadings>
              <>
                Engineers are on one project at a time ??? in our experience this
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

        <CareersPageWrappedSplitView
          topPadding="LARGE"
          bottomPadding="LARGE"
          inverted
          leftContents={
            <CareersPageHeading inverted>
              Strong opinions, loosely held
            </CareersPageHeading>
          }
          rightContents={
            <CareersPageSubheadings inverted>
              <>
                We???re trustworthy, transparent, reliable, and unafraid to speak
                up. We are empowered to practice good judgment and are not
                governed by a policy or procedure. We like to say that our
                clients hire us for our strong opinions, loosely led. Meaning
                we???ve got the expertise and the opinions to solve your problem,
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

        <CareersPageSplitView
          innerClassNames=""
          containerGridProps={{ rowSpacing: 0, columnSpacing: 0 }}
          leftContents={
            <CareersPageImage
              heightProfile="TALL"
              src={book}
              alt={
                'Person reading the book "Confessions of an Heiress" by Paris Hilton'
              }
              quality={nextImages.quality}
            />
          }
          rightContents={
            <CareersPageImage
              heightProfile="TALL"
              src={backpack}
              alt={
                'Person smiling while wearing a backpack with Steve Harvey???s laughing face printed in a pattern'
              }
              quality={nextImages.quality}
            />
          }
        ></CareersPageSplitView>

        <CareersPageMotto inverted>
          We???re big enough to cope and small enough to care
        </CareersPageMotto>

        <CareersPageWrappedSplitView
          topPadding="LARGE"
          leftContents={
            <CareersPageHeading>More about DEPT??</CareersPageHeading>
          }
          rightContents={
            <CareersPageSubheadings>
              <>
                One of our mottoes is ???big enough to cope and small enough to
                care.??? Big enough to cope means we have the resources to provide
                you with things like top notch equipment and software to get
                your job done, good compensation, and benefits. Small enough to
                care means each local team works how they see most effectively
                and treat clients right. We???re doing all of this as a fast
                growing, global company and with that comes a lot of excitement.
                You have the opportunity to get in and help us build a world
                class digital agency.
              </>
            </CareersPageSubheadings>
          }
        />

        <CareersPageWrappedSplitView
          bottomPadding="LARGE"
          leftContents={<CareersPageHeading>Who we are</CareersPageHeading>}
          rightContents={
            <CareersPageSubheadings>
              <>
                We???re over 100 people in seven offices: Boston, Brooklyn,
                Newburyport, Mar Del Plata, San Jose, Split and Zagreb. We???ve
                had 100% growth every year.
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
              <>
                We???re trustworthy, transparent, reliable, and unafraid to speak
                up. We are empowered to practice good judgment and are not
                governed by a policy or procedure.
              </>
            </CareersPageSubheadings>
          }
        />

        <CareersPageWrappedSplitView
          topPadding="LARGE"
          bottomPadding="LARGE"
          inverted
          leftContents={
            <CareersPageHeading inverted>Extra stuff</CareersPageHeading>
          }
          rightContents={
            <CareersPageUnorderedList>
              <CareersPageSubheadings inverted as="li">
                <>
                  WFH Stipend - $500 reimbursement to help outfit your home
                  office with everything you need to set yourself up for
                  success.
                </>
                <>Annual company meeting in Amsterdam.</>
                <>Dog friendly office with unlimited kibble.</>
                <>
                  An open & entrepreneurial work environment where everyone is
                  treated as an adlit.
                </>
                <>
                  An organization dedicated to constantly learning and improving
                  through guild meetings, lunch & learns, conferences and
                  practice.
                </>
              </CareersPageSubheadings>
            </CareersPageUnorderedList>
          }
        />

        <CareersPageContactView
          leftContents={
            <CareersPageHeading inverted>Interested?</CareersPageHeading>
          }
          getInTouchText="Get in touch"
        ></CareersPageContactView>
      </Layout>
    </>
  )
}
