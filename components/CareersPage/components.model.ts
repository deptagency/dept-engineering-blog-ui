import React, { ElementType } from 'react'

import { GridProps } from '@components/Grid'
import { BREAKPOINT, spaces } from '@components/common/spaces'
import { Colors } from '@components/common/colors'

export type CareersPageAmountsByBreakpoint = Partial<Record<BREAKPOINT, number>>

export const CareersPagePaddingProfiles: Record<
  string,
  CareersPageAmountsByBreakpoint
> = {
  NONE: {
    xs: spaces.none
  },
  REGULAR: {
    xs: spaces.lg,
    md: spaces.xxl
  },
  MEDIUM: {
    xs: spaces.lg,
    md: spaces.xxxxl
  },
  LARGE: {
    xs: spaces.xl,
    md: spaces.xxxxxl
  }
}

export type CareersPagePaddingProfile = keyof typeof CareersPagePaddingProfiles

export interface CareersPageSplitViewProps {
  excludeGridWrapperClass?: boolean
  excludeGridInnerClass?: boolean
  inverted?: boolean
  topPadding?: CareersPagePaddingProfile
  bottomPadding?: CareersPagePaddingProfile
  additionalWrapperStyles?: string
  containerGridProps?: GridProps
  leftGridProps?: GridProps
  rightGridProps?: GridProps
  leftContents?: React.ReactNode
  rightContents?: React.ReactNode
}

export interface CareersPageHeadingProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: ElementType<any>
  children: React.ReactNode
  inverted?: boolean
}

export interface CareersPageSubheadingsProps extends CareersPageHeadingProps {
  children: React.ReactNode | React.ReactNode[]
}

export interface CareersPageExpandableSection {
  color: Colors
  title: string
  contents: React.ReactNode
}

export interface CareersPageExpandableSectionsViewProps {
  leftContents: React.ReactNode
  sections: CareersPageExpandableSection[]
  moreText: string
  closeText: string
}

export const CareersPageHeightProfiles: Record<
  string,
  CareersPageAmountsByBreakpoint
> = {
  REGULAR: {
    xs: 300,
    sm: 400,
    md: 600
  },
  TALL_IMAGE: {
    xs: 400,
    sm: 600,
    md: 700,
    lg: 800
  },
  TALL_EXPANDABLE_SECTIONS: {
    xs: 600,
    md: 800
  }
}

export type CareersPageHeightProfile = keyof typeof CareersPageHeightProfiles

export interface CareersPageImageProps {
  src: string
  alt?: string
  quality?: string | number
  heightProfile?: CareersPageHeightProfile
}

export interface CareersPageContactViewProps {
  leftContents: React.ReactNode
  rightContents: React.ReactNode
}
