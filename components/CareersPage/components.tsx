import Image from 'next/image'
import Modal from 'react-modal'
import styled from '@emotion/styled'

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
  CareersPageExpandedSectionProps,
  CareersPageHeadingProps,
  CareersPageHeightProfile,
  CareersPageHeightProfiles,
  CareersPageImageProps,
  CareersPagePaddingProfile,
  CareersPagePaddingProfiles,
  CareersPageSplitViewProps,
  CareersPageSubheadingsProps,
  CareersPageWrappedSplitViewProps
} from './components.model'

Modal.setAppElement('#__next')

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

  if (inverted) {
    return <div className="background-onyx">{splitView}</div>
  }

  return splitView
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
    <Grid className={leftClassNames} item xs={12} md={6} {...leftGridProps}>
      {leftContents}
    </Grid>
    <Grid className={rightClassNames} item xs={12} md={6} {...rightGridProps}>
      {rightContents}
    </Grid>
  </Grid>
)

export const CareersPageImage = ({
  src,
  alt,
  quality,
  priority,
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
        priority={priority}
        layout="fill"
        objectFit="cover"
      />
    </CareersPageImageWrapper>
  )
}

export const CareersPageExpandableSectionsView = ({
  leftContents,
  sections,
  moreText
}: CareersPageExpandableSectionsViewProps) => (
  <CareersPageSplitView
    innerClassNames=""
    containerGridProps={{ rowSpacing: 0, columnSpacing: 0 }}
    leftGridProps={{ container: true }}
    rightGridProps={{ container: true }}
    leftClassNames="careers-expandable-sections__left-grid"
    rightClassNames="careers-expandable-sections__right-grid"
    leftContents={leftContents}
    rightContents={
      <>
        <Grid
          className="careers-expandable-sections__section-preview background-platinum"
          item
          container
          justifyContent="space-between"
          alignItems="center"
          xs={12}
          md={6}
          onClick={sections[0].onExpand}
        >
          <CareersPageHeadingTwo>{sections[0].title}</CareersPageHeadingTwo>
          <CareersPageSubheadings>{moreText}</CareersPageSubheadings>
        </Grid>
        <Grid
          item
          direction="column"
          xs={12}
          md={6}
          className="careers-expandable-sections__section-preview-half-container"
        >
          <Grid
            className="careers-expandable-sections__section-preview-half"
            item
            container
            justifyContent="space-between"
            alignItems="center"
            xs={12}
            onClick={sections[1].onExpand}
          >
            <CareersPageHeadingTwo>{sections[1].title}</CareersPageHeadingTwo>
            <CareersPageSubheadings>{moreText}</CareersPageSubheadings>
          </Grid>
          <Grid
            className="careers-expandable-sections__section-preview-half background-onyx"
            item
            container
            justifyContent="space-between"
            alignItems="center"
            xs={12}
            onClick={sections[2].onExpand}
          >
            <CareersPageHeadingTwo inverted>
              {sections[2].title}
            </CareersPageHeadingTwo>
            <CareersPageSubheadings inverted>{moreText}</CareersPageSubheadings>
          </Grid>
        </Grid>
      </>
    }
  ></CareersPageSplitView>
)

export const CareersPageExpandedSection = ({
  expandedSection,
  onClose
}: CareersPageExpandedSectionProps) => {
  const modalStyles: Modal.Styles = {
    content: {
      inset: 0,
      padding: 0,
      height: '100%',
      background: undefined,
      border: undefined,
      borderRadius: undefined,
      outline: undefined
    },
    overlay: { background: undefined, zIndex: 2000 }
  }

  return (
    <Modal
      isOpen={expandedSection !== undefined}
      onRequestClose={onClose}
      contentLabel={expandedSection?.title}
      style={modalStyles}
      className={`background-${expandedSection?.color}`}
    >
      {expandedSection && (
        <div className="grid-wrapper">
          <CareersPageHeading inverted={expandedSection.inverted}>
            {expandedSection.title}
          </CareersPageHeading>
        </div>
      )}
    </Modal>
  )
}

export const CareersPageContactView = ({
  leftContents,
  rightContents
}: CareersPageContactViewProps) => (
  <div className="careers-contact">
    <CareersPageWrappedSplitView
      wrapperExtraStyles={getHeightStylesForWrapper('REGULAR')}
      topPadding="LARGE"
      bottomPadding="LARGE"
      containerGridProps={{ alignItems: 'center', rowSpacing: 12 }}
      leftContents={leftContents}
      rightContents={rightContents}
    ></CareersPageWrappedSplitView>
  </div>
)
