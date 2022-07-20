import Image from 'next/image'
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

import {
  CareersPageContactViewProps,
  CareersPageExpandableSectionsViewProps,
  CareersPageHeadingProps,
  CareersPageHeightProfile,
  CareersPageHeightProfiles,
  CareersPageImageProps,
  CareersPagePaddingProfile,
  CareersPagePaddingProfiles,
  CareersPageSplitViewProps,
  CareersPageSubheadingsProps
} from './components.model'

const getHeightStylesForWrapper = (
  heightProfile: CareersPageHeightProfile,
  defaultInnerGridHeight: string
) => {
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
        height: ${defaultInnerGridHeight};
      }`
    )
  }

  return styles
}

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

export const CareersPageSubheadings = ({
  as = 'p',
  children,
  inverted
}: CareersPageSubheadingsProps) => {
  const CareersPageSubheading = styled(Subheading.One)<{
    inverted?: boolean
  }>`
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
          inverted={inverted}
        >
          {content}
        </CareersPageSubheading>
      ))}
    </>
  )
}

export const CareersPageSplitView = ({
  inverted,
  topPadding = 'REGULAR',
  bottomPadding = 'REGULAR',
  additionalWrapperStyles,
  containerGridProps,
  leftGridProps,
  rightGridProps,
  leftContents,
  rightContents
}: CareersPageSplitViewProps) => {
  const CareersPageSplitViewWrapper = styled.div<{
    topPadding: CareersPagePaddingProfile
    bottomPadding: CareersPagePaddingProfile
    additionalWrapperStyles?: string
  }>`
    ${(props) => {
      let styles = ''
      const topPaddingProfile = CareersPagePaddingProfiles[props.topPadding]
      const bottomPaddingProfile =
        CareersPagePaddingProfiles[props.bottomPadding]

      let breakpoint: BREAKPOINT
      for (breakpoint in BREAKPOINTS) {
        const topPaddingForBreakpoint =
          typeof topPaddingProfile === 'object'
            ? topPaddingProfile[breakpoint]
            : undefined
        const bottomPaddingForBreakpoint =
          typeof bottomPaddingProfile === 'object'
            ? bottomPaddingProfile[breakpoint]
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

      styles += props.additionalWrapperStyles ?? ''
      return styles
    }}
  `

  const splitView = (
    <CareersPageSplitViewWrapper
      topPadding={topPadding}
      bottomPadding={bottomPadding}
      additionalWrapperStyles={additionalWrapperStyles}
      className="grid-wrapper"
    >
      <Grid
        className="grid-inner"
        container
        rowSpacing={3}
        columnSpacing={6}
        {...containerGridProps}
      >
        <Grid item xs={12} md={6} {...leftGridProps}>
          {leftContents}
        </Grid>
        <Grid item xs={12} md={6} {...rightGridProps}>
          {rightContents}
        </Grid>
      </Grid>
    </CareersPageSplitViewWrapper>
  )

  if (inverted) {
    const OnyxDiv = styled.div`
      background: ${colors.onyx};
    `
    return <OnyxDiv>{splitView}</OnyxDiv>
  }

  return splitView
}

export const CareersPageImage = ({
  src,
  alt,
  quality,
  heightProfile
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
      <Image
        src={src}
        alt={alt}
        quality={quality}
        layout="fill"
        objectFit="cover"
      />
    </CareersPageImageWrapper>
  )
}

export const CareersPageExpandableSectionsView = ({
  leftContents,
  sections,
  moreText,
  closeText
}: CareersPageExpandableSectionsViewProps) => {
  const wrapperStyles = getHeightStylesForWrapper(
    'TALL_EXPANDABLE_SECTIONS',
    '100%'
  )

  return (
    <CareersPageSplitView
      topPadding="NONE"
      bottomPadding="NONE"
      additionalWrapperStyles={wrapperStyles}
      leftContents={leftContents}
      rightGridProps={{
        container: true
      }}
      rightContents={
        <>
          <Grid item xs={12} md={6}>
            <Heading.Two
              as="h3"
              // $color={inverted ? 'white' : undefined}
              responsive
              noMargin
            >
              {sections[0].title}
            </Heading.Two>
          </Grid>
          <Grid item xs={12} md={6}>
            <Heading.Two
              as="h3"
              // $color={inverted ? 'white' : undefined}
              responsive
              noMargin
            >
              {sections[1].title}
            </Heading.Two>
          </Grid>
        </>
      }
    ></CareersPageSplitView>
  )
}

export const CareersPageContactView = ({
  leftContents,
  rightContents
}: CareersPageContactViewProps) => {
  const linearGradientStyle = `${colors.onyx} 0%, ${colors.onyx} 50%, ${colors.purple} 50%, ${colors.purple} 100%`
  const CareersPageContactViewWrapper = styled.div`
    background: linear-gradient(to bottom, ${linearGradientStyle});
    @media (min-width: ${BREAKPOINTS.md}px) {
      background: linear-gradient(to right, ${linearGradientStyle});
    }
  `

  const wrapperStyles = getHeightStylesForWrapper('REGULAR', 'auto')

  return (
    <CareersPageContactViewWrapper>
      <CareersPageSplitView
        topPadding="LARGE"
        bottomPadding="LARGE"
        additionalWrapperStyles={wrapperStyles}
        containerGridProps={{ alignItems: 'center', rowSpacing: 12 }}
        leftContents={leftContents}
        rightContents={rightContents}
      ></CareersPageSplitView>
    </CareersPageContactViewWrapper>
  )
}
