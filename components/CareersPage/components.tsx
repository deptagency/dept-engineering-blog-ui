import Image from 'next/image'
import Link from 'next/link'
import Modal from 'react-modal'
import styled from '@emotion/styled'

import {
  BREAKPOINT,
  BREAKPOINTS,
  getWrappedMediaQueryRule
} from '@components/common/spaces'
import { Grid } from '@components/Grid'
import { getLinkStyles } from '@components/RenderContent/components/link'
import { StyledIconWrapper } from '@components/SiteNav/components'
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
  onExpand,
  moreText
}: CareersPageExpandableSectionsViewProps) => (
  <CareersPageSplitView
    innerClassNames=""
    containerGridProps={{ rowSpacing: 0, columnSpacing: 0 }}
    leftGridProps={{ container: true }}
    rightGridProps={{ container: true }}
    leftClassNames="careers-expandable-sections__left-grid"
    leftContents={leftContents}
    rightContents={
      <>
        <Grid
          className={`careers-expandable-sections__section-preview background-${sections[0].color}`}
          item
          container
          justifyContent="space-between"
          alignItems="center"
          xs={12}
          md={6}
          as="button"
          onClick={() => onExpand(0)}
        >
          <CareersPageHeadingTwo>{sections[0].title}</CareersPageHeadingTwo>
          <CareersPageSubheadings>{moreText}</CareersPageSubheadings>
        </Grid>
        <Grid
          className="careers-expandable-sections__section-preview-half-container"
          item
          direction="column"
          xs={12}
          md={6}
        >
          <Grid
            className={`careers-expandable-sections__section-preview-half background-${sections[1].color}`}
            item
            container
            justifyContent="space-between"
            alignItems="center"
            xs={12}
            as="button"
            onClick={() => onExpand(1)}
          >
            <CareersPageHeadingTwo>{sections[1].title}</CareersPageHeadingTwo>
            <CareersPageSubheadings>{moreText}</CareersPageSubheadings>
          </Grid>
          <Grid
            className={`careers-expandable-sections__section-preview-half background-${sections[2].color}`}
            item
            container
            justifyContent="space-between"
            alignItems="center"
            xs={12}
            as="button"
            onClick={() => onExpand(2)}
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
  closeText,
  onClose
}: CareersPageExpandedSectionProps) => {
  const modalStyles: Modal.Styles = {
    content: {
      inset: 0,
      padding: 0,
      height: '100%',
      overflow: 'auto',
      background: undefined,
      border: undefined,
      borderRadius: undefined,
      outline: undefined
    },
    overlay: { background: undefined, zIndex: 2000 }
  }

  const CareersPageExpandedSectionWrapper = styled.div<{
    topPadding: CareersPagePaddingProfile
    bottomPadding: CareersPagePaddingProfile
  }>`
    ${(props) =>
      getPaddingStylesForWrapper(props.topPadding, props.bottomPadding)}
  `

  return (
    <Modal
      isOpen={expandedSection !== undefined}
      onRequestClose={onClose}
      contentLabel={expandedSection?.title}
      style={modalStyles}
      className={`background-${expandedSection?.color}`}
    >
      {expandedSection && (
        <CareersPageExpandedSectionWrapper
          className="grid-wrapper"
          topPadding="REGULAR"
          bottomPadding="REGULAR"
        >
          <Grid
            className="grid-inner"
            container
            justifyContent="flex-end"
            columnSpacing={6}
          >
            <Grid item xs={12} md={6}>
              <Grid container justifyContent="flex-end">
                <Subheading.One
                  as="button"
                  noMargin
                  $color={expandedSection.inverted ? 'white' : undefined}
                  onClick={onClose}
                  className="careers-expanded-section__close"
                >
                  {closeText}
                </Subheading.One>
              </Grid>
              <Heading.One
                as="h1"
                $color={expandedSection.inverted ? 'white' : undefined}
                responsive
                noMargin
                className="careers-expanded-section__title"
              >
                {expandedSection.title}
              </Heading.One>
              {expandedSection.contents}
            </Grid>
          </Grid>
        </CareersPageExpandedSectionWrapper>
      )}
    </Modal>
  )
}

export const CareersPageContactView = ({
  leftContents,
  getInTouchText
}: CareersPageContactViewProps) => {
  return (
    <div className="careers-contact">
      <CareersPageWrappedSplitView
        wrapperExtraStyles={getHeightStylesForWrapper('REGULAR')}
        topPadding="LARGE"
        bottomPadding="LARGE"
        containerGridProps={{ alignItems: 'center', rowSpacing: 12 }}
        leftContents={leftContents}
        rightContents={
          <CareersPageSubheadings inverted>
            <Link href="https://www.deptagency.com/careers" passHref>
              <Grid
                className="careers-contact__link"
                container
                alignItems="center"
                columnSpacing={2}
                as="a"
              >
                <span>{getInTouchText}</span>
                <StyledIconWrapper>
                  <Image
                    alt=""
                    src="/icons/arrow-right.svg"
                    height="12"
                    width="18"
                  />
                </StyledIconWrapper>
              </Grid>
            </Link>
          </CareersPageSubheadings>
        }
      ></CareersPageWrappedSplitView>
    </div>
  )
}
