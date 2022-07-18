import Image from 'next/image'
import styled from '@emotion/styled'

import { BREAKPOINTS, spaces } from '@components/common/spaces'
import { Grid } from '@components/Grid'
import { colors } from '@components/common/colors'
import { getLinkStyles } from '@components/RenderContent/components/link'
import { Heading } from '@components/typography/Headings'
import { Subheading } from '@components/typography/Subheadings'

import {
  CareersPageHeadingProps,
  CareersPageImageHeight,
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
  leftGridProps,
  leftContents,
  rightContents
}: CareersPageSplitViewProps) => {
  const CareersPageSplitViewWrapper = styled.div<{
    extraTopPadding?: boolean
    extraBottomPadding?: boolean
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
  `

  const splitView = (
    <CareersPageSplitViewWrapper
      extraTopPadding={extraTopPadding}
      extraBottomPadding={extraBottomPadding}
      className="grid-wrapper"
    >
      <Grid className="grid-inner" container spacing={3}>
        <Grid item xs={12} md={6} {...leftGridProps}>
          {leftContents}
        </Grid>
        <Grid item xs={12} md={6}>
          {rightContents}
        </Grid>
      </Grid>
    </CareersPageSplitViewWrapper>
  )

  if (inverted) {
    return <div style={{ background: colors.onyx }}>{splitView}</div>
  }

  return splitView
}

export const CareersPageImage = ({
  src,
  alt,
  quality,
  height
}: CareersPageImageProps) => {
  const CareersPageImageWrapper = styled.div<{
    height: CareersPageImageHeight
  }>`
    position: relative;
    ${({ height }) => `height: ${height}px;`};
  `

  return (
    <CareersPageImageWrapper height={height ?? CareersPageImageHeight.REGULAR}>
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
