import Image from 'next/image'
import styled from '@emotion/styled'

import { colors } from '@components/common/colors'
import {
  BREAKPOINT,
  BREAKPOINTS,
  getWrappedMediaQueryRule,
  spaces
} from '@components/common/spaces'
import { Grid } from '@components/Grid'
import { getLinkStyles } from '@components/RenderContent/components/link'
import { Heading } from '@components/typography/Headings'
import { Subheading } from '@components/typography/Subheadings'

import {
  CareersPageContactViewProps,
  CareersPageHeadingProps,
  CareersPageHeightProfile,
  CareersPageHeightProfiles,
  CareersPageImageProps,
  CareersPageSplitViewProps,
  CareersPageSubheadingsProps
} from './components.model'

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
  extraTopPadding,
  extraBottomPadding,
  additionalWrapperStyles,
  containerGridProps,
  leftGridProps,
  rightGridProps,
  leftContents,
  rightContents
}: CareersPageSplitViewProps) => {
  const CareersPageSplitViewWrapper = styled.div<{
    extraTopPadding?: boolean
    extraBottomPadding?: boolean
    additionalWrapperStyles?: string
  }>`
    ${(props) => {
      const top = props.extraTopPadding ? spaces.xl : spaces.lg
      const bottom = props.extraBottomPadding ? spaces.xl : spaces.lg
      return `padding: ${top}px 0 ${bottom}px`
    }};

    @media (min-width: ${BREAKPOINTS.md}px) {
      ${(props) => {
        const top = props.extraTopPadding ? spaces.xxxxl : spaces.xxl
        const bottom = props.extraBottomPadding ? spaces.xxxxl : spaces.xxl
        return `padding: ${top}px 0 ${bottom}px`
      }};
    }

    ${additionalWrapperStyles ?? ''}
  `

  const splitView = (
    <CareersPageSplitViewWrapper
      extraTopPadding={extraTopPadding}
      extraBottomPadding={extraBottomPadding}
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
      let breakpoint: BREAKPOINT
      for (breakpoint in heightProfile) {
        heightRules += getWrappedMediaQueryRule(
          breakpoint,
          `height: ${heightProfile[breakpoint]}px;`
        )
      }
      return heightRules
    }}
  `

  return (
    <CareersPageImageWrapper
      heightProfile={
        heightProfile
          ? CareersPageHeightProfiles[heightProfile]
          : CareersPageHeightProfiles.REGULAR
      }
    >
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

  let wrapperStyles = ''
  const heightProfile = CareersPageHeightProfiles.REGULAR
  let breakpoint: BREAKPOINT
  for (breakpoint in heightProfile) {
    const rule = `height: ${heightProfile[breakpoint]}px;`
    wrapperStyles += getWrappedMediaQueryRule(
      breakpoint,
      breakpoint === 'xs' || breakpoint === 'sm'
        ? `& > div {
          ${rule}
        }`
        : `${rule}
        & > div {
          height: auto
        }`
    )
  }

  return (
    <CareersPageContactViewWrapper>
      <CareersPageSplitView
        extraTopPadding
        extraBottomPadding
        additionalWrapperStyles={wrapperStyles}
        containerGridProps={{ alignItems: 'center', rowSpacing: 12 }}
        leftContents={leftContents}
        rightContents={rightContents}
      ></CareersPageSplitView>
    </CareersPageContactViewWrapper>
  )
}
