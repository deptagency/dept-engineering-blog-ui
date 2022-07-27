import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'

import { colors } from '@components/common/colors'
import {
  BREAKPOINT,
  BREAKPOINTS,
  getWrappedMediaQueryRule
} from '@components/common/spaces'
import { Grid } from '@components/Grid'
import { getLinkStyles } from '@components/RenderContent/components/link'
import { Heading } from '@components/typography/Headings'
import { Subheading } from '@components/typography/Subheadings'
import { ArrowRightIcon } from '@icons/ArrowIcons'

import {
  CareersPageContactViewProps,
  CareersPageHeadingProps,
  CareersPageHeightProfile,
  CareersPageHeightProfiles,
  CareersPageImageProps,
  CareersPageMottoProps,
  CareersPagePaddingProfile,
  CareersPagePaddingProfiles,
  CareersPageSplitViewProps,
  CareersPageSubheadingsProps,
  CareersPageWrappedSplitViewProps
} from './components.model'

const getPaddingStylesForWrapper = (
  topPaddingProfile: CareersPagePaddingProfile,
  bottomPaddingProfile: CareersPagePaddingProfile
) => {
  const topPaddingProfileVal = CareersPagePaddingProfiles[topPaddingProfile]
  const bottomPaddingProfileVal =
    CareersPagePaddingProfiles[bottomPaddingProfile]

  let styles = ''
  let breakpoint: BREAKPOINT
  for (breakpoint in BREAKPOINTS) {
    const topPaddingForBreakpoint =
      typeof topPaddingProfileVal === 'object'
        ? topPaddingProfileVal[breakpoint]
        : undefined
    const bottomPaddingForBreakpoint =
      typeof bottomPaddingProfileVal === 'object'
        ? bottomPaddingProfileVal[breakpoint]
        : undefined

    let rulesForBreakpoint =
      topPaddingForBreakpoint !== undefined
        ? `padding-top: ${topPaddingForBreakpoint}px;`
        : ''
    if (bottomPaddingForBreakpoint !== undefined) {
      rulesForBreakpoint += `
          padding-bottom: ${bottomPaddingForBreakpoint}px;`
    }
    styles += getWrappedMediaQueryRule(breakpoint, rulesForBreakpoint)
  }

  return styles
}

const getHeightStylesForWrapper = (heightProfile: CareersPageHeightProfile) => {
  let styles = ''
  const heightProfileVal = CareersPageHeightProfiles[heightProfile]
  let breakpoint: BREAKPOINT
  for (breakpoint in heightProfileVal) {
    const rule = `height: ${heightProfileVal[breakpoint]}px;`
    styles += getWrappedMediaQueryRule(
      breakpoint,
      breakpoint === 'xs' || breakpoint === 'sm'
        ? `& > .grid-inner {
        ${rule}
      }`
        : `${rule}
      & > .grid-inner {
        height: auto;
      }`
    )
  }

  return styles
}

const InvertedDivWrapper = styled.div`
  background: ${colors.onyx};
`

export const CareersPageHeading = ({
  as = 'h2',
  children,
  inverted
}: CareersPageHeadingProps) => (
  <Heading.One
    as={as}
    $color={inverted ? 'white' : undefined}
    responsive
    noMargin
  >
    {children}
  </Heading.One>
)

export const CareersPageHeadingTwo = ({
  as = 'h3',
  children,
  inverted
}: CareersPageHeadingProps) => (
  <Heading.Two
    as={as}
    $color={inverted ? 'white' : undefined}
    responsive
    noMargin
  >
    {children}
  </Heading.Two>
)

export const CareersPageSubheadings = ({
  as = 'p',
  children,
  inverted
}: CareersPageSubheadingsProps) => {
  const CareersPageSubheading = styled(Subheading.One)<{
    noTopMargin?: boolean
    inverted?: boolean
  }>`
    ${({ noTopMargin }) => (noTopMargin ? 'margin-top: 0px;' : '')};
    margin-bottom: 0px;
    ${({ inverted }) => getLinkStyles(inverted ?? false)};
  `

  return (
    <>
      {(Array.isArray(children) ? children : [children]).map((content, i) => (
        <CareersPageSubheading
          key={i}
          as={as}
          noMargin={i === 0}
          $color={inverted ? 'white' : undefined}
          noTopMargin={i === 0}
          inverted={inverted}
        >
          {content}
        </CareersPageSubheading>
      ))}
    </>
  )
}

export const CareersPageUnorderedList = styled.ul`
  margin-bottom: 0px;
`

export const CareersPageWrappedSplitView = ({
  wrapperClassNames = 'grid-wrapper',
  wrapperExtraStyles,
  innerClassNames = 'grid-inner',
  inverted,
  topPadding = 'REGULAR',
  bottomPadding = 'REGULAR',
  containerGridProps,
  leftGridProps,
  rightGridProps,
  leftContents,
  rightContents,
  leftClassNames,
  rightClassNames
}: CareersPageWrappedSplitViewProps) => {
  const CareersPageSplitViewWrapper = styled.div<{
    topPadding: CareersPagePaddingProfile
    bottomPadding: CareersPagePaddingProfile
    wrapperExtraStyles?: string
  }>`
    ${(props) => {
      let styles = getPaddingStylesForWrapper(
        props.topPadding,
        props.bottomPadding
      )
      styles += props.wrapperExtraStyles ?? ''
      return styles
    }}
  `

  const splitView = (
    <CareersPageSplitViewWrapper
      className={wrapperClassNames}
      topPadding={topPadding}
      bottomPadding={bottomPadding}
      wrapperExtraStyles={wrapperExtraStyles}
    >
      <CareersPageSplitView
        innerClassNames={innerClassNames}
        containerGridProps={containerGridProps}
        leftGridProps={leftGridProps}
        rightGridProps={rightGridProps}
        leftContents={leftContents}
        rightContents={rightContents}
        leftClassNames={leftClassNames}
        rightClassNames={rightClassNames}
      />
    </CareersPageSplitViewWrapper>
  )

  return inverted ? (
    <InvertedDivWrapper>{splitView}</InvertedDivWrapper>
  ) : (
    splitView
  )
}

export const CareersPageSplitView = ({
  innerClassNames = 'grid-inner',
  containerGridProps,
  leftGridProps,
  rightGridProps,
  leftContents,
  rightContents,
  leftClassNames,
  rightClassNames
}: CareersPageSplitViewProps) => (
  <Grid
    className={innerClassNames}
    container
    rowSpacing={3}
    columnSpacing={6}
    {...containerGridProps}
  >
    {leftContents ? (
      <Grid className={leftClassNames} item xs={12} md={6} {...leftGridProps}>
        {leftContents}
      </Grid>
    ) : (
      <></>
    )}
    <Grid className={rightClassNames} item xs={12} md={6} {...rightGridProps}>
      {rightContents}
    </Grid>
  </Grid>
)

export const CareersPageImage = ({
  heightProfile,
  alt,
  layout = 'fill',
  objectFit = 'cover',
  ...props
}: CareersPageImageProps) => {
  const CareersPageImageWrapper = styled.div<{
    heightProfile: CareersPageHeightProfile
  }>`
    position: relative;
    ${({ heightProfile }) => {
      let heightRules = ''
      const heightProfileVal = CareersPageHeightProfiles[heightProfile]
      let breakpoint: BREAKPOINT
      for (breakpoint in heightProfileVal) {
        heightRules += getWrappedMediaQueryRule(
          breakpoint,
          `height: ${heightProfileVal[breakpoint]}px;`
        )
      }
      return heightRules
    }}
  `

  return (
    <CareersPageImageWrapper heightProfile={heightProfile ?? 'REGULAR'}>
      <Image alt={alt} layout={layout} objectFit={objectFit} {...props} />
    </CareersPageImageWrapper>
  )
}

export const CareersPageMotto = ({
  inverted,
  children
}: CareersPageMottoProps) => {
  const CareersPageMottoWrapper = styled.div<{
    topPadding: CareersPagePaddingProfile
    bottomPadding: CareersPagePaddingProfile
  }>`
    ${(props) =>
      getPaddingStylesForWrapper(props.topPadding, props.bottomPadding)}
    & > .grid-inner {
      text-align: center;
    }
  `

  const mottoView = (
    <CareersPageMottoWrapper
      className="grid-wrapper"
      topPadding="LARGE"
      bottomPadding="LARGE"
    >
      <Grid className="grid-inner" container justifyContent="center">
        <CareersPageHeading inverted={inverted}>{children}</CareersPageHeading>
      </Grid>
    </CareersPageMottoWrapper>
  )

  return inverted ? (
    <InvertedDivWrapper>{mottoView}</InvertedDivWrapper>
  ) : (
    mottoView
  )
}

export const CareersPageContactView = ({
  leftContents,
  getInTouchText
}: CareersPageContactViewProps) => {
  const halfOnyxHalfPurple = `${colors.onyx} 0%, ${colors.onyx} 50%, ${colors.purple} 50%, ${colors.purple} 100%`
  const CareersPageContactWrapper = styled.div`
    background: linear-gradient(to bottom, ${halfOnyxHalfPurple});
    ${getWrappedMediaQueryRule(
      'md',
      `background: linear-gradient(to right, ${halfOnyxHalfPurple});`
    )}
  `
  const noLinkStyles = `box-shadow: none !important;
  transition: none !important;`
  const CareersPageContactLink = styled(Grid)`
    ${noLinkStyles}
    &:hover {
      ${noLinkStyles}
    }
  `

  return (
    <CareersPageContactWrapper>
      <CareersPageWrappedSplitView
        wrapperExtraStyles={getHeightStylesForWrapper('REGULAR')}
        topPadding="LARGE"
        bottomPadding="LARGE"
        containerGridProps={{ alignItems: 'center', rowSpacing: 12 }}
        leftContents={leftContents}
        rightContents={
          <CareersPageSubheadings inverted as="div">
            <Link href="https://www.deptagency.com/careers" passHref>
              <CareersPageContactLink
                container
                alignItems="center"
                columnSpacing={2}
                as="a"
              >
                <span>{getInTouchText}</span>
                <ArrowRightIcon inverted />
              </CareersPageContactLink>
            </Link>
          </CareersPageSubheadings>
        }
      ></CareersPageWrappedSplitView>
    </CareersPageContactWrapper>
  )
}
