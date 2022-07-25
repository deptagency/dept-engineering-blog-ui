import { CareersPageSubheadings } from './components'
import { CareersPageExpandableSection } from './components.model'

export const sections: CareersPageExpandableSection[] = [
  {
    color: 'platinum',
    title: 'Why join DEPT®?',
    contents: (
      <CareersPageSubheadings as="ul">
        <li>
          <strong>Project Variety -</strong> All employees have the flexibility
          to work on a variety of different projects.
        </li>
        <li>
          <strong>Product Focused -</strong> Ranging from consumer facing
          technology, to academia, to health care companies dedicated to
          meaningful causes.
        </li>
        <li>
          <strong>Top Talent -</strong> At DEPT®, we believe you are only as
          good as the people you surround yourself with.
        </li>
        <li>
          <strong>One Project -</strong> All engineers and developers are only
          on one project at a time — this prevents burnout and makes for a
          better <strong>product</strong>.
        </li>
        <li>
          <strong>“Hybrid” work -</strong> the opportunity and the flexibility
          to work in the way that works best for you, whether that be in the
          office, remote, or a mix of the two.
        </li>
        <li>
          A people-first culture with a relaxed environment. We like to say we
          treat people like adults here, meaning we trust your judgment and your
          ability.
        </li>
      </CareersPageSubheadings>
    )
  },
  {
    color: 'white',
    title: 'Who we are',
    contents: (
      <CareersPageSubheadings>
        <>
          We’re over 100 people in seven offices: Boston, Brooklyn, Newburyport,
          Mar Del Plata, San Jose, Split and Zagreb. We’ve had 100% growth every
          year.
        </>
        <>
          We all contribute and have various opportunities to mentor, coach, and
          lead. We are problem solvers who take active roles to get it done with
          lots of laughs along the way.
        </>
        <>
          We have long term goals and the endurance to keep running the race. We
          are resilient, optimistic, and approach all things with confidence. We
          strive for excellence, not perfection.
        </>
        <>
          We’re trustworthy, transparent, reliable, and unafraid to speak up. We
          are empowered to practice good judgment and are not governed by a
          policy or procedure.
        </>
      </CareersPageSubheadings>
    )
  },
  {
    inverted: true,
    color: 'onyx',
    title: 'Extra stuff',
    contents: (
      <CareersPageSubheadings inverted as="ul">
        <li>
          WFH Stipend - $500 reimbursement to help outfit your home office with
          everything you need to set yourself up for success
        </li>
        <li>Annual company meeting in Amsterdam.</li>
        <li>Dog friendly office with unlimited kibble.</li>
        <li>
          An open & entrepreneurial work environment where everyone is treated
          as an adult.
        </li>
        <li>
          An organization dedicated to constantly learning and improving through
          guild meetings, lunch & learns, conferences and practice.
        </li>
      </CareersPageSubheadings>
    )
  }
]
